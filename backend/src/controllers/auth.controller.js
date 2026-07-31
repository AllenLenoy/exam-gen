import userService from '../services/user.service.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import config from '../config/env.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { OAuth2Client } from 'google-auth-library';

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID');

/**
 * Auth Controller - Handles authentication requests
 */
class AuthController {
    /**
     * Register new user
     */
    async register(req, res, next) {
        try {
            const { name, email, password, role } = req.body;

            // Validation
            if (!name || name.trim().length < 2) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: 'Name must be at least 2 characters long'
                });
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: 'Please provide a valid email address'
                });
            }

            if (!password || password.length < 6) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: 'Password must be at least 6 characters long'
                });
            }

            if (role === 'admin') {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: 'Cannot register as an administrator'
                });
            }

            const user = await userService.createUser({ name, email, password, role });

            res.status(HTTP_STATUS.CREATED).json({
                message: 'User registered successfully',
                user
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Login user
     */
    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            // Validation
            if (!email || !password) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: 'Email and password are required'
                });
            }

            // Find user (including password for comparison)
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                    error: 'Invalid email or password'
                });
            }

            // Check if user is active
            if (!user.isActive) {
                return res.status(HTTP_STATUS.FORBIDDEN).json({
                    error: 'Account is deactivated. Contact administrator.'
                });
            }

            // Verify password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                    error: 'Invalid email or password'
                });
            }

            // Generate JWT token
            const token = jwt.sign(
                { id: user._id, role: user.role },
                config.jwtSecret,
                { expiresIn: config.jwtExpire }
            );

            console.log(`✅ User logged in: ${email} (${user.role})`);

            res.json({
                message: 'Login successful',
                token,
                user: user.toJSON()
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Google Login
     */
    async googleLogin(req, res, next) {
        try {
            const { credential, role } = req.body;
            
            if (!credential) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: 'Google credential is required'
                });
            }

            const ticket = await googleClient.verifyIdToken({
                idToken: credential,
                audience: process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID'
            });

            const payload = ticket.getPayload();
            const { email, name, sub: googleId, picture } = payload;

            let user = await User.findOne({ email });

            if (!user) {
                const userRole = role && ['teacher', 'student'].includes(role) ? role : 'student';
                
                user = await User.create({
                    name,
                    email,
                    googleId,
                    role: userRole,
                    avatar: picture
                });
            } else if (!user.googleId) {
                user.googleId = googleId;
                if (!user.avatar && picture) user.avatar = picture;
                await user.save();
            }

            if (!user.isActive) {
                return res.status(HTTP_STATUS.FORBIDDEN).json({
                    error: 'Account is deactivated. Contact administrator.'
                });
            }

            const token = jwt.sign(
                { id: user._id, role: user.role },
                config.jwtSecret,
                { expiresIn: config.jwtExpire }
            );

            console.log(`✅ User logged in via Google: ${email} (${user.role})`);

            res.json({
                message: 'Google login successful',
                token,
                user: user.toJSON()
            });
        } catch (error) {
            console.error('Google login error:', error);
            res.status(HTTP_STATUS.UNAUTHORIZED).json({
                error: 'Invalid Google credential'
            });
        }
    }

    /**
     * Get current user
     */
    async getCurrentUser(req, res, next) {
        try {
            res.json({
                user: req.user
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Update user profile
     */
    async updateProfile(req, res, next) {
        try {
            const { name, phone, qualification, subjects, bio, experience } = req.body;

            const user = await User.findById(req.user._id);
            if (!user) {
                return res.status(HTTP_STATUS.NOT_FOUND).json({
                    error: 'User not found'
                });
            }

            // Update fields if provided
            if (name) user.name = name;
            if (phone !== undefined) user.phone = phone;
            if (qualification !== undefined) user.qualification = qualification;
            if (subjects !== undefined) user.subjects = subjects;
            if (bio !== undefined) user.bio = bio;
            if (experience !== undefined) user.experience = experience;

            await user.save();

            res.json({
                message: 'Profile updated successfully',
                user
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Logout
     */
    async logout(req, res, next) {
        try {
            res.json({
                message: 'Logged out successfully'
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();

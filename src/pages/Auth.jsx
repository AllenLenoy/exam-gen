import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { GoogleLogin } from '@react-oauth/google';

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRole, setSignupRole] = useState('student');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Input validation
    if (!loginEmail || !loginPassword) {
      toast({
        title: 'Missing fields',
        description: 'Please enter both email and password',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);

    try {
      // Import API service
      const { authAPI } = await import('@/lib/apiService');

      // Call real login API
      const response = await authAPI.login({
        email: loginEmail,
        password: loginPassword
      });

      // Store token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast({
        title: 'Login successful!',
        description: `Welcome back, ${response.data.user.name}!`,
      });

      // Route based on user role
      const { role } = response.data.user;
      if (role === 'student') {
        navigate('/dashboard/student');
      } else if (role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/dashboard');
      }

    } catch (error) {
      console.error('Login error:', error);

      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        'Invalid email or password';

      toast({
        title: 'Login failed',
        description: errorMessage,
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Input validation
    if (!signupName?.trim() || signupName.trim().length < 2) {
      toast({
        title: 'Name required',
        description: 'Please enter a valid full name (at least 2 characters)',
        variant: 'destructive'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!signupEmail || !emailRegex.test(signupEmail)) {
      toast({
        title: 'Valid email required',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }

    if (!signupPassword) {
      toast({
        title: 'Password required',
        description: 'Please enter a password',
        variant: 'destructive'
      });
      return;
    }

    if (signupPassword.length < 6) {
      toast({
        title: 'Weak password',
        description: 'Password must be at least 6 characters long',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);

    try {
      // Import API service
      const { authAPI } = await import('@/lib/apiService');

      // Call real register API
      await authAPI.register({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        role: signupRole
      });

      toast({
        title: 'Account created!',
        description: 'Please log in to continue.',
      });

      // Clear form
      setSignupName('');
      setSignupEmail('');
      setSignupPassword('');

    } catch (error) {
      console.error('Signup error:', error);

      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        'Could not create account';

      toast({
        title: 'Registration failed',
        description: errorMessage,
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setIsLoading(true);
    try {
      const { authAPI } = await import('@/lib/apiService');
      const response = await authAPI.googleLogin({
        credential: credentialResponse.credential,
        role: signupRole // passed from the active tab if they are signing up, otherwise defaults
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast({
        title: 'Login successful!',
        description: `Welcome back, ${response.data.user.name}!`,
      });

      const { role } = response.data.user;
      if (role === 'student') {
        navigate('/dashboard/student');
      } else if (role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Google login error:', error);
      toast({
        title: 'Google Login failed',
        description: 'Failed to authenticate with Google.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #003b1b 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container relative z-10 py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="flex justify-center mb-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
                <FileText className="h-6 w-6" />
              </div>
              <span className="text-3xl font-bold font-display text-foreground tracking-tight">ExamGen</span>
            </Link>
          </div>

          <Card className="border-border shadow-md bg-card overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary" />
            <Tabs defaultValue="login">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Log In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent>
                <TabsContent value="login" className="mt-0">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="mt-0">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="John Doe"
                          className="pl-10"
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-role">I am a</Label>
                      <Select value={signupRole} onValueChange={(v) => setSignupRole(v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Creating account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </CardContent>
            </Tabs>

            <div className="px-6 pb-6 pt-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2 text-sm w-full">
                  <Label className="text-muted-foreground">Select role before continuing with Google (for new users):</Label>
                  <Select value={signupRole} onValueChange={(v) => setSignupRole(v)}>
                    <SelectTrigger className="w-full max-w-[200px] h-9">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full flex justify-center">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => {
                      toast({
                        title: 'Google Login failed',
                        description: 'Failed to authenticate with Google.',
                        variant: 'destructive'
                      });
                    }}
                    useOneTap
                    theme="outline"
                    shape="rectangular"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            By continuing, you agree to our{' '}
            <Link to="#" className="text-primary hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

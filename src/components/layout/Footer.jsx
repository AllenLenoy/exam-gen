import { Link } from 'react-router-dom';
import { FileText, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 pt-16 pb-8 overflow-hidden">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-96 bg-sky-500/5 blur-3xl rounded-full" />

      <div className="container relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/20">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display text-white">ExamGen</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              The smart way to create, distribute, and grade exams. Trusted by educators worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800/50 text-gray-500 transition-all duration-300 hover:bg-sky-500/10 hover:text-sky-400">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800/50 text-gray-500 transition-all duration-300 hover:bg-gray-700 hover:text-white">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800/50 text-gray-500 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold font-display text-white mb-5 text-sm tracking-wide uppercase">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Features</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Pricing</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Integrations</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">API</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold font-display text-white mb-5 text-sm tracking-wide uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Documentation</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Help Center</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Blog</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Community</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-display text-white mb-5 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">About</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Careers</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Privacy</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-sky-400 transition-colors duration-200">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} ExamGen. All rights reserved. Made with ❤️ for educators.
          </p>
        </div>
      </div>
    </footer>
  );
}

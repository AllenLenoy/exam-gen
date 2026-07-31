import { Link } from 'react-router-dom';
import { FileText, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-muted text-muted-foreground pt-16 pb-8 border-t border-border">
      <div className="container relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary shadow-sm">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-display text-primary">ExamGen</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              The smart way to create, distribute, and grade exams. Trusted by educators worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://x.com/AllenLenoy" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-background border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://github.com/AllenLenoy" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-background border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/allen-lenoy-5ab794202/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-background border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold font-display text-foreground mb-5 text-sm tracking-widest uppercase">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-primary transition-colors duration-200">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors duration-200">Pricing</a></li>
              <li><Link to="/auth" className="hover:text-primary transition-colors duration-200">Integrations</Link></li>
              <li><Link to="/auth" className="hover:text-primary transition-colors duration-200">API</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold font-display text-foreground mb-5 text-sm tracking-widest uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">Documentation</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">Help Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">Blog</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">Community</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-display text-foreground mb-5 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">About</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">Privacy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors duration-200">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} ExamGen. All rights reserved. Made with ❤️ for educators.
          </p>
        </div>
      </div>
    </footer>
  );
}

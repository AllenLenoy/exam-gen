import { NavLink } from '@/components/NavLink';
import { FileText, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-18 items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-md shadow-sky-500/20 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-sky-500/30">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold font-display bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            ExamGen
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/auth"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-sky-50 hover:text-sky-700"
            activeClassName="bg-sky-50 text-sky-700"
          >
            <BookOpen className="h-4 w-4" />
            Question Bank
          </NavLink>
          <NavLink
            to="/auth"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700"
            activeClassName="bg-violet-50 text-violet-700"
          >
            <Sparkles className="h-4 w-4" />
            Generate Exam
          </NavLink>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-600 hover:text-gray-900">
            <Link to="/auth">Log In</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 border-0 hover:brightness-110">
            <Link to="/auth" className="flex items-center gap-1.5">
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

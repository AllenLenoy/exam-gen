import { NavLink } from '@/components/NavLink';
import { FileText, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-display text-primary tracking-tight">
            ExamGen
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink
            to="/auth"
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
            activeClassName="bg-primary/10 text-primary"
          >
            <BookOpen className="h-4 w-4" />
            Question Bank
          </NavLink>
          <NavLink
            to="/auth"
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
            activeClassName="bg-primary/10 text-primary"
          >
            <Sparkles className="h-4 w-4" />
            Generate Exam
          </NavLink>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground hover:text-primary">
            <Link to="/auth">Log In</Link>
          </Button>
          <Button asChild size="sm" className="rounded-md bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 transition-all duration-300 border-0 font-semibold px-5">
            <Link to="/auth" className="flex items-center gap-1.5">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Subtle overlay texture or lines if desired, keeping it clean */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-primary-foreground/90 border border-white/10 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-secondary" />
            No credit card required
          </div>

          <h2 className="font-display text-4xl font-semibold text-primary-foreground sm:text-5xl mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            Ready to Transform
            <br />
            Your Assessments?
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Join thousands of educators who have elevated their exam creation process.
            Start for free today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms]">
            <Button asChild size="lg" className="group rounded-md bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 transition-all duration-300 px-8 text-base font-semibold border-0">
              <Link to="/auth" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground transition-colors">
              <a href="#how-it-works">
                View Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

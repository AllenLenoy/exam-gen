import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Rich multi-gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-700" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 via-transparent to-violet-500/30 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

      {/* Floating decorative shapes */}
      <div className="absolute top-12 left-[10%] h-20 w-20 rounded-2xl border border-white/10 bg-white/5 rotate-12 animate-float hidden md:block" />
      <div className="absolute bottom-16 right-[12%] h-16 w-16 rounded-full border border-white/10 bg-white/5 animate-float-slow hidden md:block" />
      <div className="absolute top-[40%] right-[25%] h-12 w-12 rounded-xl border border-white/10 bg-white/5 -rotate-12 animate-float-reverse hidden md:block" />
      <div className="absolute bottom-[30%] left-[20%] h-10 w-10 rounded-full border border-white/10 bg-white/5 animate-float [animation-delay:3s] hidden md:block" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-white/90 border border-white/15 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-amber-300" />
            No credit card required
          </div>

          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl mb-6 animate-fade-in-up [animation-delay:100ms] drop-shadow-lg">
            Ready to Transform
            <br />
            Your Assessments?
          </h2>

          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Join thousands of educators who have simplified their exam creation process.
            Start for free today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms]">
            <Button asChild size="lg" className="group rounded-full bg-white text-indigo-700 shadow-xl shadow-black/20 hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 px-8 text-base font-bold border-0">
              <Link to="/auth" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/40 px-8 text-base font-semibold transition-all duration-300">
              <Link to="#how-it-works">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

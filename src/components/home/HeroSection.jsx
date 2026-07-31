import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      {/* ── Animated gradient mesh background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-violet-50/50" />

      {/* Morphing gradient orbs */}
      <div className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-400/20 to-cyan-300/15 blur-3xl animate-morph" />
      <div className="absolute bottom-[-15%] right-[-5%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-400/15 to-fuchsia-300/10 blur-3xl animate-morph [animation-delay:4s]" />
      <div className="absolute top-[40%] left-[50%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-amber-300/10 to-orange-200/10 blur-3xl animate-morph [animation-delay:2s]" />

      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-[12%] h-16 w-16 rounded-2xl border-2 border-sky-200/40 bg-sky-100/30 backdrop-blur-sm rotate-12 animate-float hidden lg:block" />
      <div className="absolute top-32 right-[15%] h-12 w-12 rounded-full border-2 border-violet-200/40 bg-violet-100/30 backdrop-blur-sm animate-float-slow hidden lg:block" />
      <div className="absolute bottom-28 left-[8%] h-10 w-10 rounded-xl border-2 border-amber-200/40 bg-amber-100/30 backdrop-blur-sm -rotate-12 animate-float-reverse hidden lg:block" />
      <div className="absolute bottom-20 right-[10%] h-14 w-14 rounded-2xl border-2 border-emerald-200/40 bg-emerald-100/30 backdrop-blur-sm rotate-45 animate-float [animation-delay:2s] hidden lg:block" />
      <div className="absolute top-[60%] left-[25%] h-8 w-8 rounded-full border-2 border-rose-200/40 bg-rose-100/30 backdrop-blur-sm animate-float-slow [animation-delay:3s] hidden lg:block" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge pill */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-sky-200/60 bg-white/60 px-5 py-2.5 text-sm backdrop-blur-md shadow-sm animate-fade-in-up">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-medium text-gray-700">Smart Exam Generation Platform</span>
          </div>

          {/* Headline */}
          <h1 className="mb-8 font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up [animation-delay:100ms]">
            Create{' '}
            <span className="gradient-text">
              Randomized Exams
            </span>
            <br className="hidden sm:block" />
            {' '}in Minutes
          </h1>

          {/* Subtitle */}
          <p className="mb-12 mx-auto max-w-2xl text-lg text-gray-500 sm:text-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Empower teachers to build question banks, generate fair assessments,
            and track student performance — all in one powerful platform.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up [animation-delay:300ms]">
            <Button asChild size="lg" className="group rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 border-0 px-8 text-base font-semibold hover:brightness-110">
              <Link to="/auth" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group rounded-full border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 px-8 text-base font-semibold hover:bg-white hover:border-gray-400 hover:shadow-md transition-all duration-300">
              <Link to="#how-it-works" className="flex items-center gap-2">
                <Play className="h-4 w-4 text-sky-500" />
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up [animation-delay:500ms]">
            {/* Stacked avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {['bg-sky-500', 'bg-violet-500', 'bg-amber-500', 'bg-emerald-500', 'bg-rose-500'].map((bg, i) => (
                  <div
                    key={i}
                    className={`h-9 w-9 rounded-full ${bg} border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {['S', 'M', 'A', 'K', 'R'][i]}
                  </div>
                ))}
              </div>
              <span className="ml-3 text-sm font-medium text-gray-600">
                Trusted by <span className="font-bold text-gray-900">1,000+</span> educators
              </span>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-200" />

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-gray-600"><span className="font-bold text-gray-900">50K+</span> Exams</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse [animation-delay:500ms]" />
                <span className="text-gray-600"><span className="font-bold text-gray-900">100K+</span> Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

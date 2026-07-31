import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 order-2 lg:order-1 mt-12 lg:mt-0 relative z-10">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-md bg-muted border border-border text-sm font-semibold text-primary tracking-wider uppercase animate-fade-in-up">
              AI-Powered Assessment
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in-up [animation-delay:100ms]">
              Crafting Academic Excellence with AI-Powered Exams.
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up [animation-delay:200ms] leading-relaxed">
            Empower educators to generate randomized, rigorous question banks and assessments in seconds. Shift your focus from drafting to teaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up [animation-delay:300ms]">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 transition-all text-base px-8 h-12">
              <Link to="/auth">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-muted transition-colors text-base px-8 h-12 flex items-center gap-2">
              <a href="#how-it-works">
                <Play className="h-5 w-5" />
                See How It Works
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground text-sm font-medium animate-fade-in-up [animation-delay:400ms]">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=JD&background=14532d&color=fff&size=32" alt="Educator" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=SA&background=14532d&color=fff&size=32" alt="Educator" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=MR&background=14532d&color=fff&size=32" alt="Educator" />
              </div>
            </div>
            <span>Trusted by <span className="text-black">10,000+</span> Educators</span>
          </div>
        </div>

        {/* Right Column: Interactive Mockup */}
        <div className="lg:col-span-7 order-1 lg:order-2 animate-fade-in-up [animation-delay:200ms] relative z-10">
          <div className="bg-card rounded-xl border border-border shadow-lg p-6 md:p-8 relative overflow-hidden">
            {/* App Header */}
            <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <h2 className="font-display text-lg font-semibold text-foreground">Exam Generator</h2>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-muted-foreground mb-2">Subject Area</label>
                  <select className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary appearance-none outline-none transition-colors">
                    <option>Advanced Biology</option>
                    <option>World History</option>
                    <option>Calculus II</option>
                    <option>Organic Chemistry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-muted-foreground mb-2">Specific Topic (Optional)</label>
                  <input className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="e.g. Cellular Respiration" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Questions</label>
                    <input className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" type="number" defaultValue="25" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Difficulty</label>
                    <select className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none">
                      <option>Mixed</option>
                      <option>Introductory</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mt-4">
                  <Sparkles className="h-4 w-4" />
                  Generate Draft
                </button>
              </div>

              {/* Preview Area */}
              <div className="bg-muted/30 rounded-lg border border-border p-4 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-muted-foreground">Live Preview</span>
                  <span className="text-xs font-semibold bg-muted px-2 py-1 rounded text-muted-foreground">Drafting...</span>
                </div>
                <div className="space-y-4 flex-grow">
                  {/* Skeleton Question 1 */}
                  <div className="animate-pulse">
                    <div className="flex gap-2 mb-2">
                      <div className="w-6 h-6 rounded bg-border flex-shrink-0"></div>
                      <div className="h-4 bg-border rounded w-full mt-1"></div>
                    </div>
                    <div className="h-4 bg-border rounded w-5/6 ml-8 mb-3"></div>
                    <div className="ml-8 space-y-2">
                      <div className="h-3 bg-border rounded w-2/3"></div>
                      <div className="h-3 bg-border rounded w-3/4"></div>
                      <div className="h-3 bg-muted border border-border rounded w-1/2"></div>
                    </div>
                  </div>
                  <hr className="border-border" />
                  {/* Skeleton Question 2 */}
                  <div className="animate-pulse opacity-50">
                    <div className="flex gap-2 mb-2">
                      <div className="w-6 h-6 rounded bg-border flex-shrink-0"></div>
                      <div className="h-4 bg-border rounded w-full mt-1"></div>
                    </div>
                    <div className="h-4 bg-border rounded w-4/6 ml-8 mb-3"></div>
                    <div className="ml-8 space-y-2">
                      <div className="h-3 bg-border rounded w-1/2"></div>
                      <div className="h-3 bg-border rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

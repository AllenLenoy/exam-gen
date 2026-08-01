import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Play, CheckCircle2, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_DATA = {
  'Advanced Biology': [
    {
      q: "Which organelle is primarily responsible for cellular respiration?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"]
    },
    {
      q: "What is the primary function of DNA polymerase?",
      options: ["Synthesize RNA", "Synthesize DNA", "Degrade proteins", "Form peptide bonds"]
    }
  ],
  'World History': [
    {
      q: "In what year did the French Revolution begin?",
      options: ["1776", "1789", "1812", "1848"]
    },
    {
      q: "Which empire was ruled by Suleiman the Magnificent?",
      options: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Byzantine Empire"]
    }
  ],
  'Calculus II': [
    {
      q: "Evaluate the integral of e^x dx.",
      options: ["e^x + C", "xe^x + C", "ln(x) + C", "1/x + C"]
    },
    {
      q: "Which test is best for the series Σ (1/n^2)?",
      options: ["Ratio Test", "Root Test", "p-series Test", "Divergence Test"]
    }
  ],
  'Organic Chemistry': [
    {
      q: "What is the hybridization of carbon in methane?",
      options: ["sp", "sp2", "sp3", "sp3d"]
    },
    {
      q: "Which functional group is present in alcohols?",
      options: ["-COOH", "-OH", "-NH2", "-CHO"]
    }
  ]
};

export function HeroSection() {
  const [subject, setSubject] = useState('Advanced Biology');
  const [isDrafting, setIsDrafting] = useState(false);
  const [previewItems, setPreviewItems] = useState([]);

  const handleGenerate = () => {
    if (isDrafting) return;
    setIsDrafting(true);
    setPreviewItems([]);
    
    // Simulate AI generation delay
    setTimeout(() => {
      setPreviewItems(MOCK_DATA[subject] || MOCK_DATA['Advanced Biology']);
      setIsDrafting(false);
    }, 1800);
  };

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
            <span>Trusted by <span className="text-black dark:text-white">10,000+</span> Educators</span>
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
                  <select 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-muted/50 border border-border rounded-md px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary appearance-none outline-none transition-colors"
                  >
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
                <button 
                  onClick={handleGenerate}
                  disabled={isDrafting}
                  className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mt-4 disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {isDrafting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                  {isDrafting ? 'Generating...' : 'Generate Draft'}
                </button>
              </div>

              {/* Preview Area */}
              <div className="bg-muted/30 rounded-lg border border-border p-4 flex flex-col h-full overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-muted-foreground">Live Preview</span>
                  {isDrafting && (
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded animate-pulse">
                      Drafting...
                    </span>
                  )}
                </div>
                
                <div className="space-y-4 flex-grow overflow-y-auto pr-1 custom-scrollbar">
                  {previewItems.length > 0 && !isDrafting ? (
                    <div className="space-y-4 animate-fade-in">
                      {previewItems.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="text-sm font-medium text-foreground leading-snug">
                            {idx + 1}. {item.q}
                          </p>
                          <div className="pl-4 space-y-1">
                            {item.options.map((opt, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-border flex items-center justify-center text-[8px] text-muted-foreground">
                                  {String.fromCharCode(65 + i)}
                                </div>
                                <span className="text-xs text-muted-foreground">{opt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {/* Skeleton Question 1 */}
                      <div className={`transition-opacity duration-300 ${isDrafting ? 'animate-pulse opacity-100' : 'opacity-40'}`}>
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
                      <hr className="border-border my-4" />
                      {/* Skeleton Question 2 */}
                      <div className={`transition-opacity duration-300 ${isDrafting ? 'animate-pulse opacity-70' : 'opacity-20'}`}>
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
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

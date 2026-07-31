import { Upload, Settings, Send, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload Questions',
    description: 'Import questions from PDFs or create them manually. Organize by subject, difficulty, and type.',
    gradient: 'from-sky-500 to-blue-600',
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-200',
  },
  {
    step: '02',
    icon: Settings,
    title: 'Configure Exam',
    description: 'Set exam parameters like duration, total marks, question distribution, and difficulty balance.',
    gradient: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
  {
    step: '03',
    icon: Send,
    title: 'Assign to Students',
    description: 'Generate randomized papers and assign them to students or student groups.',
    gradient: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Review Results',
    description: 'Get instant grading, detailed analytics, and export results for your records.',
    gradient: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
      {/* Background divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-3 animate-fade-in-up">The Process</span>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl mb-5 animate-fade-in-up [animation-delay:100ms]">
            Get Started in{' '}
            <span className="text-primary">
              Four Simple Steps
            </span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up [animation-delay:200ms]">
            From question upload to rigorous result analysis — effortlessly
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line — thin and subtle */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
            <div className="h-full w-full bg-border" />
          </div>

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:py-10 animate-fade-in-up ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'lg:ml-auto' : ''} bg-card border border-border rounded-md p-8 max-w-md shadow hover-lift transition-all`}>
                    <span className="text-5xl font-extrabold font-display text-black mb-2 block">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-semibold font-display text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary shadow-sm text-primary transition-transform hover:scale-110">
                    <step.icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                </div>

                {/* Empty space for zigzag */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

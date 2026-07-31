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
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/20 to-white" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="inline-block text-sm font-semibold text-violet-600 tracking-wide uppercase mb-3 animate-fade-in-up">How It Works</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-5 animate-fade-in-up [animation-delay:100ms]">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>
          <p className="text-gray-500 text-lg animate-fade-in-up [animation-delay:200ms]">
            From question upload to result analysis — effortlessly
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line — gradient dashed */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
            <div className="h-full w-full bg-gradient-to-b from-sky-300 via-violet-300 via-amber-300 to-emerald-300 opacity-40" />
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
                  <div className={`inline-block ${index % 2 === 0 ? 'lg:ml-auto' : ''} ${step.bgLight} ${step.borderColor} border rounded-2xl p-6 max-w-md hover-lift`}>
                    <span className={`text-5xl font-extrabold font-display bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-30`}>
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold font-display text-gray-900 mb-2 -mt-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-xl animate-pulse-glow`}>
                    <step.icon className="h-8 w-8" />
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

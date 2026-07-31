import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Brain, Shield, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Question Bank',
    description: 'Build comprehensive question banks organized by subject, difficulty, and type.',
    color: 'from-sky-500 to-blue-600',
    bgLight: 'bg-sky-50',
    textColor: 'text-sky-600',
  },
  {
    icon: Brain,
    title: 'Smart Randomization',
    description: 'Generate unique exams with intelligent question selection algorithms.',
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Assign tests to students and track their progress in real-time.',
    color: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    icon: Shield,
    title: 'Secure Testing',
    description: 'Anti-cheating measures and secure exam delivery for fair assessments.',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    icon: Zap,
    title: 'Instant Grading',
    description: 'Automatic grading for objective questions with detailed analytics.',
    color: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Comprehensive reports on student performance and question effectiveness.',
    color: 'from-cyan-500 to-sky-600',
    bgLight: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-background">
      {/* Soft background line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-3 animate-fade-in-up">Platform Features</span>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl mb-5 animate-fade-in-up [animation-delay:100ms]">
            Everything You Need for
            <br />
            <span className="text-primary">Academic Assessment</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up [animation-delay:200ms]">
            A complete, rigorous solution for creating, distributing, and analyzing exams at scale.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative bg-card border-border shadow hover-lift cursor-default animate-fade-in-up overflow-hidden rounded-md"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Subtle top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-105 border border-primary/10">
                  <feature.icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="mb-2.5 text-xl font-semibold font-display text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

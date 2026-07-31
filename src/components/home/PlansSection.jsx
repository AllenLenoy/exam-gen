import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Up to 50 questions',
      '5 exams per month',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start Free',
    popular: false,
    gradient: '',
    buttonStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For individual teachers',
    features: [
      'Unlimited questions',
      'Unlimited exams',
      'Advanced analytics',
      'PDF import',
      'Priority support',
      'Export to PDF/Word',
    ],
    cta: 'Get Pro',
    popular: true,
    gradient: 'from-sky-500 to-indigo-600',
    buttonStyle: 'default',
  },
  {
    name: 'School',
    price: '$99',
    period: 'per month',
    description: 'For institutions',
    features: [
      'Everything in Pro',
      'Up to 50 teachers',
      'Unlimited students',
      'Admin dashboard',
      'API access',
      'Custom branding',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: '',
    buttonStyle: 'outline',
  },
];

export function PlansSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-background">
      {/* Background divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-3 animate-fade-in-up">Pricing</span>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl mb-5 animate-fade-in-up [animation-delay:100ms]">
            Simple,{' '}
            <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up [animation-delay:200ms]">
            Choose the plan that fits your needs. Upgrade anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-500 animate-fade-in-up overflow-hidden rounded-md ${
                plan.popular
                  ? 'border border-primary shadow-lg scale-[1.02] bg-card z-10'
                  : 'border-border bg-card hover-lift shadow-sm'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary py-1.5 text-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className={`text-center pb-4 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="text-xl font-display font-semibold text-foreground">{plan.name}</CardTitle>
                <div className="mt-5">
                  <span className={`text-5xl font-extrabold font-display ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-full ${plan.popular ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                        <Check className={`h-3 w-3 ${plan.popular ? 'text-primary' : 'text-secondary'}`} />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <Button
                    asChild
                    className="w-full rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors border-0 font-semibold"
                  >
                    <Link to="/auth">{plan.cta}</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-md border-border text-foreground hover:bg-muted hover:text-foreground font-semibold transition-colors"
                  >
                    <Link to="/auth">{plan.cta}</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

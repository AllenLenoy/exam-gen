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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-white" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-sm font-semibold text-sky-600 tracking-wide uppercase mb-3 animate-fade-in-up">Pricing</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-5 animate-fade-in-up [animation-delay:100ms]">
            Simple,{' '}
            <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-gray-500 text-lg animate-fade-in-up [animation-delay:200ms]">
            Choose the plan that fits your needs. Upgrade anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-500 animate-fade-in-up overflow-hidden ${
                plan.popular
                  ? 'border-0 shadow-2xl shadow-sky-500/15 scale-[1.04] bg-white z-10 shimmer-border'
                  : 'border-gray-100 bg-white/80 backdrop-blur-sm hover-lift'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-b-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className={`text-center pb-4 ${plan.popular ? 'pt-10' : 'pt-8'}`}>
                <CardTitle className="text-xl font-display font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-5">
                  <span className={`text-5xl font-extrabold font-display ${plan.popular ? 'gradient-text' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-full ${plan.popular ? 'bg-sky-100' : 'bg-gray-100'}`}>
                        <Check className={`h-3 w-3 ${plan.popular ? 'text-sky-600' : 'text-gray-500'}`} />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <Button
                    asChild
                    className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 border-0 font-semibold hover:brightness-110"
                  >
                    <Link to="/auth">{plan.cta}</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-semibold transition-all duration-300"
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

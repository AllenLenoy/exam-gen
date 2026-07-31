import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'High School Teacher',
    content: 'ExamGen has transformed how I create assessments. What used to take hours now takes minutes, and my students get unique papers every time.',
    rating: 5,
    gradient: 'from-sky-500 to-blue-600',
    bgTint: 'bg-sky-50/50',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'University Professor',
    content: 'The randomization feature ensures academic integrity. I can confidently assign online exams knowing each student gets a different set of questions.',
    rating: 5,
    gradient: 'from-violet-500 to-purple-600',
    bgTint: 'bg-violet-50/50',
  },
  {
    name: 'Emily Rodriguez',
    role: 'School Principal',
    content: 'We deployed ExamGen across our entire school. The admin dashboard gives us complete visibility into assessment quality and student performance.',
    rating: 5,
    gradient: 'from-amber-500 to-orange-600',
    bgTint: 'bg-amber-50/50',
  },
  {
    name: 'James Wilson',
    role: 'Math Teacher',
    content: 'The question bank feature is a game-changer. I\'ve built up years of questions that I can reuse and remix for different classes.',
    rating: 5,
    gradient: 'from-emerald-500 to-teal-600',
    bgTint: 'bg-emerald-50/50',
  },
  {
    name: 'Lisa Thompson',
    role: 'Online Tutor',
    content: 'Perfect for my online tutoring business. I can quickly generate practice tests for students based on their weak areas.',
    rating: 5,
    gradient: 'from-rose-500 to-pink-600',
    bgTint: 'bg-rose-50/50',
  },
  {
    name: 'David Park',
    role: 'Department Head',
    content: 'The analytics help us identify which topics students struggle with most. It\'s become essential for our curriculum planning.',
    rating: 5,
    gradient: 'from-cyan-500 to-sky-600',
    bgTint: 'bg-cyan-50/50',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/20 to-white" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-sm font-semibold text-violet-600 tracking-wide uppercase mb-3 animate-fade-in-up">Testimonials</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-5 animate-fade-in-up [animation-delay:100ms]">
            Loved by Educators{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Worldwide</span>
          </h2>
          <p className="text-gray-500 text-lg animate-fade-in-up [animation-delay:200ms]">
            See what teachers and institutions are saying about ExamGen
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`group ${testimonial.bgTint} border-gray-100/80 backdrop-blur-sm hover-lift animate-fade-in-up`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-7 relative">
                {/* Decorative quote */}
                <Quote className={`absolute top-5 right-5 h-8 w-8 opacity-10 bg-gradient-to-br ${testimonial.gradient} text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-600 mb-7 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11 ring-2 ring-white shadow-sm">
                    <AvatarFallback className={`bg-gradient-to-br ${testimonial.gradient} text-white font-bold text-sm`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTextReveal } from '@/hooks/use-gsap';
import { RainbowText } from './rainbow-text';

const testimonials = [
  {
    quote: "The content database work the team at Nichify worked on for my Ed-Tech company was done with great detail and care",
    name: "BUDDING EDTECH STARTUP",
    role: "Founder"
  },
  {
    quote: "Nichify did a great job making these videos for me. They completed the first draft ahead of the timeline. They understood all instructions in a single go and neatly integrated creative elements into their work.",
    name: "DR. RUCHIKA YOGESH",
    role: "Director"
  }
];

export function TestimonialsSection() {
  useTextReveal('.text-reveal');

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title font-black text-reveal" style={{animationDelay: '0s'}}>
            CLIENT TESTIMONIALS
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-reveal" style={{animationDelay: `${index * 0.1}s`}}>
              <blockquote className="text-xl mb-8 font-medium leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-bold transition-all duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

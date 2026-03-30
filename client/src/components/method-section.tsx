import { useTextReveal } from '@/hooks/use-gsap';
import { RainbowText } from './rainbow-text';

const methodSteps = [
  {
    number: '01',
    title: 'UNDERSTAND YOUR GOALS',
    description: 'Deep dive into your vision and objectives'
  },
  {
    number: '02',
    title: 'CREATE CUSTOM STRATEGY',
    description: 'Tailored approach for your unique challenges'
  },
  {
    number: '03',
    title: 'EXECUTE WITH PRECISION',
    description: 'Flawless implementation of creative solutions'
  },
  {
    number: '04',
    title: 'MONITOR & OPTIMIZE',
    description: 'Continuous improvement and refinement'
  },
  {
    number: '05',
    title: 'REPORT & IMPROVE',
    description: 'Measurable results and future planning'
  }
];

export function MethodSection() {
  useTextReveal('.text-reveal');

  return (
    <section id="method" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title font-black text-reveal" style={{animationDelay: '0s'}}>
            THE NICHIFY METHOD
          </h2>
          <p className="text-xl mt-6 text-gray-300 text-reveal" style={{animationDelay: '0.1s'}}>
            An approach with the promise to change your business story forever
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {methodSteps.map((step, index) => (
            <div key={step.number} className="text-center text-reveal group" style={{animationDelay: `${index * 0.08}s`}}>
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-white rounded-full flex items-center justify-center text-2xl font-black group-hover:bg-white group-hover:text-black transition-all duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 transition-all duration-300">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

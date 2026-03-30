import { useTextReveal } from '@/hooks/use-gsap';
import { RainbowText } from './rainbow-text';
import heroLogoImage from '@assets/Brand_Kit__1766138799599.png';

export function HeroSection() {
  useTextReveal('.text-reveal');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Geometric Elements */}
      <div className="geometric-shape top-20 left-10 w-32 h-32 border-2 border-black transform rotate-45 animate-rotate-3d" />

      <div className="geometric-shape bottom-32 left-1/4 w-16 h-48 bg-black transform -rotate-12 animate-float" />
      <div className="geometric-shape top-1/3 right-1/4 w-20 h-20 border-4 border-black rounded-full animate-bounce-in" style={{animationDelay: '1s'}} />
      <div className="geometric-shape bottom-20 right-10 w-12 h-40 bg-black transform rotate-45 animate-float" style={{animationDelay: '2s'}} />
      <div className="geometric-shape top-60 left-1/3 w-28 h-28 border-2 border-black animate-rotate-3d" style={{animationDelay: '0.5s'}} />
      
      <div className="text-center max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src={heroLogoImage} 
            alt="nichify." 
            className="h-32 md:h-48 w-auto mx-auto"
            data-testid="hero-logo"
          />
        </div>
        
        {/* Tagline */}
        <div>
          <p className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-reveal" style={{animationDelay: '0.1s'}}>
            we are black&white
            <br />
            so you can be{' '}
            <RainbowText hover>colorful</RainbowText>
          </p>
        </div>
        
        {/* Description */}
        <div>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-medium text-reveal" style={{animationDelay: '0.2s'}}>
            Focused Creativity → Immeasurable Impact
          </p>

        </div>
        
        {/* CTA Button */}
        <div>
          <button
            style={{animationDelay: '0.3s'}} 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-12 py-4 text-xl font-bold transition-all duration-300 text-reveal"
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

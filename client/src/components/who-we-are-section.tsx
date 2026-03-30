import { useEffect } from 'react';
import { useGSAP, useTextReveal } from '@/hooks/use-gsap';

export function WhoWeAreSection() {
  const { gsap } = useGSAP();
  useTextReveal('.text-reveal');

  useEffect(() => {
    if (!gsap) return;

    // Animate the floating elements (one up and down motion then stop)
    gsap.utils.toArray('.floating-element').forEach((element: any) => {
      gsap.to(element, {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: 1, // One up, one down, then stop
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });

    // Parallax effect for background elements
    gsap.utils.toArray('.parallax-bg').forEach((element: any) => {
      gsap.to(element, {
        y: -50,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });
  }, [gsap]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-bg absolute bottom-20 right-16 w-16 h-16 bg-gray-100 transform rotate-45 opacity-40" />
        <div className="parallax-bg absolute bottom-10 left-1/4 w-12 h-32 bg-gradient-to-t from-gray-100 to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-reveal leading-tight">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="text-reveal">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
                  Marketing is easy once you find your{' '}
                  <span className="font-bold text-black">Niche</span>.
                </p>
              </div>

              <div className="text-reveal space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                  We work with brands, small startups, daring-to-grow entrepreneurs, and anyone who needs a helping hand.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                  Our team comprises members with an excellent eye for quality and a true hand for creative ingenuity.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                  We are a truly content-focused agency that wishes to focus on what's important and stay true to the fundamentals.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-medium">
                  Technology only supports what we choose to build. That is the vision and action statement that enables our creative agency.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-reveal pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  Together, Let's Create Your Nichify Story.
                </h3>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="floating-element relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-500">CONTENT-FOCUSED</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-500">CREATIVE INGENUITY</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-500">QUALITY FOCUSED</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-2xl font-bold text-black">Find Your Niche</p>
                    <p className="text-gray-600 mt-2">Marketing becomes effortless</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Only 2 circles */}
              <div className="floating-element absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full opacity-80"></div>
              <div className="floating-element absolute -bottom-6 -left-6 w-12 h-12 border-2 border-gray-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
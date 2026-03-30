import { useEffect } from 'react';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { WhoWeAreSection } from '@/components/who-we-are-section';
import { MethodSection } from '@/components/method-section';
import { ServicesSection } from '@/components/services-section';
import { ClientsSection } from '@/components/clients-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-white text-black font-sans overflow-x-hidden">
      {/* SEO-optimized semantic structure */}
      <header>
        <Navigation />
      </header>
      
      <main>
        <section aria-label="Hero - Niche Marketing Agency">
          <HeroSection />
        </section>
        
        <section aria-label="About Nichify - Marketing Agency in Bangalore">
          <WhoWeAreSection />
        </section>
        
        <section aria-label="Our Niche Marketing Method">
          <MethodSection />
        </section>
        
        <section aria-label="Marketing and Videography Services">
          <ServicesSection />
        </section>
        
        <section aria-label="Our Clients">
          <ClientsSection />
        </section>
        
        <section aria-label="Client Testimonials">
          <TestimonialsSection />
        </section>
        
        <section aria-label="Contact Our Marketing Agency">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
      
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator"
        style={{
          width: '0%'
        }}
      />
      
      {/* Additional Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Nichify - Niche Marketing Agency in Bangalore",
          "description": "Leading niche marketing agency in Bangalore, India. We specialize in creative marketing, videography, and helping brands find their niche.",
          "url": "https://nichifymarketing.com",
          "mainEntity": {
            "@type": "MarketingAgency",
            "name": "Nichify",
            "description": "Niche marketing experts helping businesses find their niche and grow",
            "areaServed": "India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Niche Marketing",
                    "description": "Strategic niche marketing to help your business find its target audience"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Videography Agency Services",
                    "description": "Professional video production and cinematic storytelling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Creative Marketing",
                    "description": "Innovative marketing solutions with focused creativity"
                  }
                }
              ]
            }
          }
        })
      }} />

    </div>
  );
}

import { useTextReveal } from '@/hooks/use-gsap';
import { RainbowText } from './rainbow-text';
import { 
  Video, 
  Globe, 
  Share2, 
  TrendingUp, 
  Palette, 
  Film, 
  BarChart3, 
  Users,
  Calendar,
  Music
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic storytelling that captures your brand essence'
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Digital experiences that convert visitors into customers'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Strategic social presence that builds communities'
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that deliver measurable ROI'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visual identity that makes your brand unforgettable'
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Post-production magic that brings stories to life'
  },
  {
    icon: BarChart3,
    title: 'Paid Ads & Analytics',
    description: 'Precision targeting with comprehensive performance insights'
  },
  {
    icon: Users,
    title: 'Casting & Models',
    description: 'Perfect talent selection for authentic brand representation'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Complete event planning and seamless execution'
  },
  {
    icon: Music,
    title: 'Entertainment Solutions',
    description: 'Creative entertainment experiences and live productions'
  }
];

export function ServicesSection() {
  useTextReveal('.text-reveal');

  return (
    <section id="services" className="py-32 pb-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title font-black text-reveal">
            OUR SERVICES
          </h2>
          <p className="text-xl mt-6 text-gray-600 text-reveal">
            Complete services crafted and <span className="font-extrabold text-black" style={{fontWeight: '900'}}>NICHIFIED</span> for excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="service-card group p-8 border border-gray-200 hover:border-black text-reveal hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
                style={{animationDelay: `${index * 0.02}s`}}
              >
                <div className="service-icon w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center transition-all duration-200 border-2 border-black">
                  <Icon className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-all duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

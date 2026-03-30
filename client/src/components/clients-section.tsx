import { useTextReveal } from '@/hooks/use-gsap';
import brigadeGroupLogo from '@assets/Brigade_Group.svg_1753186458621.png';
import californiaBurritoLogo from '@assets/california burrito_1753186458624.png';
import crazyFloraLogo from '@assets/crazyflora_1753186458625.webp';
import craftCultureLogo from '@assets/craft culture_1753186458625.avif';

const clients = [
  {
    name: "Crazy Flora",
    logo: crazyFloraLogo,
  },
  {
    name: "California Burrito", 
    logo: californiaBurritoLogo,
  },
  {
    name: "Brigade Group",
    logo: brigadeGroupLogo,
  },
  {
    name: "Craft Culture",
    logo: craftCultureLogo,
  }
];

export function ClientsSection() {
  useTextReveal('.text-reveal');

  return (
    <section className="py-32 pt-40 pb-48 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title font-black mb-8 text-reveal" style={{animationDelay: '0s'}}>
            OUR <span className="blue-gradient-text">CLIENTS</span>
          </h2>
          <p className="text-xl text-gray-600 text-reveal" style={{animationDelay: '0.1s'}}>
            Some amazing brands we've had the privilege to work with
          </p>
        </div>

        <div className="flex items-center justify-center min-h-[200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center w-full">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-200 text-reveal w-full h-full"
                style={{animationDelay: `${0.1 + (index * 0.03)}s`}}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-200 mx-auto"
                  onLoad={() => console.log('Logo loaded successfully')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
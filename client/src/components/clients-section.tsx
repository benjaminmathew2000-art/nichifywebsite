import { useTextReveal } from '@/hooks/use-gsap';
import brigadeGroupLogo from '@assets/Brigade_Group.svg_1753186458621.png';
import californiaBurritoLogo from '@assets/california burrito_1753186458624.png';
import crazyFloraLogo from '@assets/crazyflora_1753186458625.webp';
import craftCultureLogo from '@assets/craft culture_1753186458625.avif';
import elenzaLogo from '@assets/elenza_logo.png';
import johnnyCaterersLogo from '@assets/johnny_caterers_logo.jpg';
import memorableLogo from '@assets/memorable_logo.png';
import kothanurRunClubLogo from '@assets/kothanur_run_club_logo.png';
import strydeSportsLogo from '@assets/stryde_sports_logo.png';

const clientGroups = [
  {
    industry: "Decor & Florals",
    sideBySide: false,
    mobileFullWidth: true,
    clients: [
      { name: "Crazy Flora", logo: crazyFloraLogo, logoClass: "max-h-24 max-w-[120px]" },
    ],
  },
  {
    industry: "Food & Beverage",
    sideBySide: true,
    clients: [
      { name: "California Burrito", logo: californiaBurritoLogo, logoClass: "max-h-12 max-w-[90px]" },
      { name: "Johnny Caterer's", logo: johnnyCaterersLogo, logoClass: "max-h-20 max-w-[90px]" },
    ],
  },
  {
    industry: "Real Estate",
    sideBySide: false,
    clients: [
      { name: "Brigade Group", logo: brigadeGroupLogo, logoClass: "max-h-16 max-w-[120px]" },
    ],
  },
  {
    industry: "Corporate Services",
    sideBySide: false,
    clients: [
      { name: "Craft Culture", logo: craftCultureLogo, logoClass: "max-h-16 max-w-[120px]" },
    ],
  },
  {
    industry: "Furniture",
    sideBySide: false,
    clients: [
      { name: "Elenza", logo: elenzaLogo, logoClass: "max-h-16 max-w-[120px]" },
    ],
  },
  {
    industry: "AI & Tech",
    sideBySide: false,
    clients: [
      { name: "Memorable", logo: memorableLogo, logoClass: "max-h-16 max-w-[120px]" },
    ],
  },
  {
    industry: "Community",
    sideBySide: true,
    clients: [
      { name: "Kothanur Run Club", logo: kothanurRunClubLogo, logoClass: "max-h-24 max-w-[90px]" },
      { name: "Stryde Sports", logo: strydeSportsLogo, logoClass: "max-h-12 max-w-[110px]" },
    ],
  },
];

export function ClientsSection() {
  useTextReveal('.text-reveal');

  return (
    <section className="py-32 pt-40 pb-48 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="section-title font-black mb-8 text-reveal" style={{animationDelay: '0s'}}>
            OUR <span className="blue-gradient-text">CLIENTS</span>
          </h2>
          <p className="text-xl text-gray-600 text-reveal" style={{animationDelay: '0.1s'}}>
            Some amazing brands we've had the privilege to work with
          </p>
        </div>

        {/* Desktop: flex justify-between so industries spread edge-to-edge */}
        <div className="hidden lg:flex justify-between items-start w-full gap-6">
          {clientGroups.map((group, index) => (
            <div
              key={group.industry}
              className={`flex flex-col items-center grayscale hover:grayscale-0 transition-all duration-200 text-reveal ${group.sideBySide ? 'w-48' : 'w-28'}`}
              style={{animationDelay: `${0.1 + (index * 0.03)}s`}}
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-5 h-9 flex items-center justify-center text-center leading-tight w-full">
                {group.industry}
              </span>

              {group.sideBySide ? (
                <div className="h-20 flex items-center justify-center gap-3 w-full">
                  <img
                    src={group.clients[0].logo}
                    alt={`${group.clients[0].name} logo`}
                    className={`${group.clients[0].logoClass} object-contain opacity-60 hover:opacity-100 transition-opacity duration-200`}
                  />
                  <div className="w-px h-10 bg-gray-200 shrink-0" />
                  <img
                    src={group.clients[1].logo}
                    alt={`${group.clients[1].name} logo`}
                    className={`${group.clients[1].logoClass} object-contain opacity-60 hover:opacity-100 transition-opacity duration-200`}
                  />
                </div>
              ) : (
                <div className="h-20 flex items-center justify-center w-full">
                  <img
                    src={group.clients[0].logo}
                    alt={`${group.clients[0].name} logo`}
                    className={`${group.clients[0].logoClass} object-contain opacity-60 hover:opacity-100 transition-opacity duration-200`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/tablet: 2-column grid, F&B spans full width */}
        <div className="lg:hidden grid grid-cols-2 gap-x-6 gap-y-10">
          {clientGroups.map((group, index) => (
            <div
              key={group.industry}
              className={`flex flex-col items-center grayscale hover:grayscale-0 transition-all duration-200 text-reveal ${(group.sideBySide || (group as any).mobileFullWidth) ? 'col-span-2' : ''}`}
              style={{animationDelay: `${0.1 + (index * 0.03)}s`}}
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 h-8 flex items-center justify-center text-center leading-tight w-full">
                {group.industry}
              </span>

              {group.sideBySide ? (
                <div className="h-20 flex items-center justify-center gap-6 w-full max-w-xs mx-auto">
                  <img
                    src={group.clients[0].logo}
                    alt={`${group.clients[0].name} logo`}
                    className="max-h-12 max-w-[110px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
                  />
                  <div className="w-px h-10 bg-gray-200 shrink-0" />
                  <img
                    src={group.clients[1].logo}
                    alt={`${group.clients[1].name} logo`}
                    className="max-h-16 max-w-[110px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ) : (
                <div className="h-20 flex items-center justify-center w-full">
                  <img
                    src={group.clients[0].logo}
                    alt={`${group.clients[0].name} logo`}
                    className="max-h-14 max-w-[110px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import logoImage from '@assets/Untitled_design_1766137452921.png';

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/nichify.marketing' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nichify/' }
  ];

  const services = [
    'Videography & Video Production',
    'Website Design & Development',
    'Social Media Marketing',
    'Performance Marketing & Analytics',
    'Graphic Design & Branding',
    'Video Editing Services',
    'Paid Advertising & ROI Tracking',
    'Casting & Model Selection',
    'Event Management Solutions',
    'Entertainment & Live Productions'
  ];



  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <img 
              src={logoImage} 
              alt="nichify." 
              className="h-12 w-auto mb-4 invert"
              data-testid="footer-logo"
            />
            <p className="text-gray-400 mb-6">we are black&white so you can be colorful</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading <strong>niche marketing agency in Bangalore</strong> and across India. 
              We help businesses find their niche and deliver focused creativity with immeasurable impact. 
              Perfect for companies looking to <strong>outsource their marketing</strong> to experts.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-all duration-300 hover:text-gray-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Nichify Marketing Agency. All rights reserved. | 
            <span className="text-gray-500"> Niche Marketing Experts in Bangalore, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

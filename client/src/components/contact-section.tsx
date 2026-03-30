import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTextReveal } from '@/hooks/use-gsap';
import { RainbowText } from './rainbow-text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';


const services = [
  'Videography',
  'Website Design', 
  'Social Media Marketing',
  'Performance Marketing',
  'Graphic Design',
  'Video Editing',
  'Paid Ads & Analytics',
  'Casting & Models'
];

const projectTypes = [
  'New Business Launch',
  'Rebrand/Refresh',
  'Marketing Campaign',
  'Digital Transformation',
  'Ongoing Marketing',
  'One-time Project'
];

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  customService: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  useTextReveal('.text-reveal');
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [showCustomService, setShowCustomService] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
      customService: '',
      projectType: ''
    }
  });

  const handleProjectTypeSelect = (projectType: string) => {
    setSelectedProjectType(projectType);
    setValue('projectType', projectType, { shouldValidate: true });
  };

  const handleServiceToggle = (service: string) => {
    const newServices = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    
    setSelectedServices(newServices);
    setValue('services', newServices, { shouldValidate: true });
  };

  const handleOtherToggle = () => {
    const isOtherSelected = selectedServices.includes('Other');
    
    if (isOtherSelected) {
      const newServices = selectedServices.filter(s => s !== 'Other');
      setSelectedServices(newServices);
      setValue('services', newServices, { shouldValidate: true });
      setShowCustomService(false);
      setValue('customService', '');
    } else {
      const newServices = [...selectedServices, 'Other'];
      setSelectedServices(newServices);
      setValue('services', newServices, { shouldValidate: true });
      setShowCustomService(true);
    }
  };

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      if (!scriptURL || scriptURL.includes('YOUR_SCRIPT_ID')) {
        throw new Error('Contact form not configured. Please contact us directly at connect@nichifymarketing.com');
      }
      
      console.log('Submitting form to Google Apps Script...');
      
      // Create URLSearchParams for better compatibility
      const formData = new URLSearchParams();
      formData.append('Timestamp', new Date().toISOString());
      formData.append('Name', data.name);
      formData.append('Email', data.email); 
      formData.append('Company', data.company || '');
      formData.append('ProjectType', data.projectType);
      formData.append('Services', data.services.join(', '));
      formData.append('CustomService', data.customService || '');
      formData.append('Message', data.message);
      formData.append('Source', window.location.hostname);
      
      // Use no-cors mode directly to prevent duplicate submissions
      // Google Apps Script will process the data regardless of CORS restrictions
      await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        mode: 'no-cors' // Prevents CORS issues and duplicate submissions
      });
      
      console.log('Form submitted successfully to Google Apps Script');
      return { success: true, message: 'Thank you! Your enquiry has been sent.' };
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      setSelectedServices([]);
      setSelectedProjectType('');
      setShowCustomService(false);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="section-title font-black mb-8 text-reveal" style={{animationDelay: '0s'}}>
          LET'S CREATE SOMETHING <span className="blue-gradient-text font-extrabold">EXTRAORDINARY</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-reveal" style={{animationDelay: '0.1s'}}>
          Ready to transform your brand into a magnet for attention and growth? Send us an enquiry by letting us know more about your project, who you are and your vision for the marketing and branding you desire.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Contact Form */}
          <div className="text-reveal" style={{animationDelay: '0.2s'}}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  {...register('name')}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:border-gray-500 focus:outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:border-gray-500 focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Input
                  {...register('company')}
                  placeholder="Company Name (Optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:border-gray-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Project Type:</label>
                <div className="grid grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleProjectTypeSelect(type)}
                      className={`px-4 py-2 text-sm border-2 transition-all duration-300 text-left ${
                        selectedProjectType === type
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Services Needed:</label>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 text-sm border-2 transition-all duration-300 text-left ${
                        selectedServices.includes(service)
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={handleOtherToggle}
                    className={`px-4 py-2 text-sm border-2 transition-all duration-300 text-left ${
                      selectedServices.includes('Other')
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    Other
                  </button>
                </div>
                {errors.services && (
                  <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>
                )}
              </div>

              {showCustomService && (
                <div>
                  <Input
                    {...register('customService')}
                    placeholder="Describe your custom service needs"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:border-gray-500 focus:outline-none transition-colors"
                  />
                </div>
              )}
              
              <div>
                <Textarea
                  {...register('message')}
                  placeholder="Tell us about your project and goals"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:border-gray-500 focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full btn-primary rainbow-hover py-4 text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className={contactMutation.isPending ? 'animate-pulse' : ''}>
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </span>
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="text-reveal space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-lg">
                Let's discuss how we can help elevate your brand's digital presence and turn your vision into reality.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-2">
                Email
              </h4>
              <p className="text-gray-600">connect@nichifymarketing.com</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-2">
                Remote Team
              </h4>
              <p className="text-gray-600">
                We are a <span className="font-extrabold text-black">100% remote organisation</span> and come together for work, shoots, and productions par excellence, to any location in our city of Bengaluru, in India or anywhere in the Globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

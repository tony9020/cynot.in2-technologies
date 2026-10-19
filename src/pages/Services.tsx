import { useInView } from 'react-intersection-observer';
import { Clock, Calendar, Repeat } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import Button from '../components/Button';

interface ServiceOffering {
  number: string;
  title: string;
  points: string[];
}

const buildAndDesign: ServiceOffering[] = [
  {
    number: '01',
    title: 'Software Development',
    points: [
      'Custom software tailored to business needs',
      'Mobile apps for iOS and Android',
      'Web application development using modern technologies',
      'API integration services',
      'SaaS and platform development',
      'Admin portals and dashboards',
    ],
  },
  {
    number: '02',
    title: 'Web Design & Development',
    points: [
      'Responsive websites for all devices',
      'E-commerce platform development',
      'Content Management System (CMS) implementation',
      'SEO optimisation for better search rankings',
      'Landing pages built to convert',
      'Website maintenance and performance tuning',
    ],
  },
  {
    number: '03',
    title: 'UI/UX & Graphic Design',
    points: [
      'UI/UX design, wireframes and prototypes',
      'Design systems and style guides',
      'Logo and brand identity',
      'Social media creatives and ad banners',
      'Brochures, flyers and print-ready artwork',
      'Presentations and pitch decks',
    ],
  },
  {
    number: '04',
    title: 'Data, Automation & AI',
    points: [
      'Business workflow automation',
      'AI chatbots and assistant integration',
      'Data analytics and reporting dashboards',
      'CRM and business tool integrations',
      'Database design and migration',
    ],
  },
];

const growAndSupport: ServiceOffering[] = [
  {
    number: '05',
    title: 'Digital Marketing',
    points: [
      'SEO and local SEO',
      'Google and Meta paid advertising',
      'Social media management',
      'Content and email marketing',
      'Analytics and conversion tracking',
      'Online reputation management',
    ],
  },
  {
    number: '06',
    title: 'Creative & Media Production',
    points: [
      'Video editing and motion graphics',
      '2D animation and explainer videos',
      'Photo editing and retouching',
      'Copywriting and content writing',
      'Product and social media content',
      'Podcast and audio editing',
    ],
  },
  {
    number: '07',
    title: 'IT Support Services',
    points: [
      'Network infrastructure setup and management',
      'Cybersecurity and threat protection',
      'Data backup and disaster recovery',
      'Cloud computing (AWS, Azure, Google Cloud)',
      'Helpdesk support for ongoing assistance',
      'Managed IT and device setup',
    ],
  },
  {
    number: '08',
    title: 'Digital Business Services',
    points: [
      'Online store and marketplace management',
      'Product listing and catalogue management',
      'Virtual assistance and data entry',
      'Domain, hosting and email setup',
      'Customer support via chat and email',
      'Business listing and profile setup',
    ],
  },
];

const pricingModels = [
  {
    icon: <Clock size={32} />,
    title: 'Hourly Rate',
    content: 'Ideal for short-term projects or ongoing support.',
  },
  {
    icon: <Calendar size={32} />,
    title: 'Project-Based Fee',
    content: 'Suitable for larger, more complex initiatives.',
  },
  {
    icon: <Repeat size={32} />,
    title: 'Retainer Model',
    content: 'For long-term partnerships with regular support requirements.',
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ServiceCard = ({ service, inView }: { service: ServiceOffering; inView: boolean }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md h-full ${inView ? 'fade-in' : 'opacity-0'}`}>
    <div className="flex items-center mb-4">
      <span className="text-3xl font-bold text-primary-200 mr-3">{service.number}</span>
      <h3 className="text-xl font-semibold">{service.title}</h3>
    </div>
    <ul className="space-y-2">
      {service.points.map((point) => (
        <li key={point} className="flex items-start text-neutral-700">
          <CheckIcon />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const { ref: buildRef, inView: buildInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: growRef, inView: growInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: pricingRef, inView: pricingInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <SEO
        title="Services"
        description="Explore Cynot Technologies' eight service areas: software development, web design, UI/UX and graphics, data & AI, digital marketing, creative production, IT support and digital business services."
        path="/services"
      />
      {/* Hero Banner */}
      <div className="bg-neutral-900 text-white py-32 relative">
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">Service Offerings</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Create it. Design it. Automate it.</h1>
            <p className="text-xl text-neutral-300">
              Products, websites, brands and intelligent systems, built around your business — then marketed, supported and kept running.
            </p>
          </div>
        </div>
      </div>

      {/* Build & Design */}
      <section 
        ref={buildRef}
        className={`section bg-white ${buildInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Build & Design"
            subtitle="Service Offerings · 01 – 04"
            center
          >
            <p className="text-center">
              Everything we design and engineer: software, websites, brand systems and intelligent automation.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {buildAndDesign.map((service) => (
              <ServiceCard key={service.number} service={service} inView={buildInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Grow & Support */}
      <section 
        ref={growRef}
        className={`section bg-neutral-50 ${growInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Grow & Support"
            subtitle="Service Offerings · 05 – 08"
            center
          >
            <p className="text-center">
              Reach more people. Keep everything running. Marketing, media, IT support and everyday digital operations, handled for you.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {growAndSupport.map((service) => (
              <ServiceCard key={service.number} service={service} inView={growInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section 
        ref={pricingRef}
        className={`section bg-white ${pricingInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Flexible pricing, shaped to your scope."
            subtitle="Pricing Structure"
            center
          >
            <p className="text-center">
              We offer flexible pricing options based on project scope and complexity. Our standard approach includes three models.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pricingModels.map((model, index) => (
              <div key={model.title} className="bg-neutral-50 p-8 rounded-lg shadow-md text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {model.icon}
                  </div>
                </div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                  Model {index + 1}
                </p>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-neutral-700">{model.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something that works for you.</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Share your scope and complexity — we'll recommend the right service mix and pricing model for it.
            </p>
            <Button 
              to="/contact" 
              variant="dark" 
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

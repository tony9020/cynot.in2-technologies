import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, TrendingUp } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('build');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const tabInfo = {
    build: {
      icon: <Code size={32} />,
      title: 'Build & Design',
      description: 'Products, websites, brands and intelligent systems, built around your business — from first wireframe to a platform your team can run on.',
      features: [
        'Software Development',
        'Web Design & Development',
        'UI/UX & Graphic Design',
        'Data, Automation & AI',
      ],
      image: 'https://images.pexels.com/photos/3861950/pexels-photo-3861950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services',
    },
    grow: {
      icon: <TrendingUp size={32} />,
      title: 'Grow & Support',
      description: 'Marketing, media, IT support and everyday digital operations, handled for you so your business keeps running and keeps reaching people.',
      features: [
        'Digital Marketing',
        'Creative & Media Production',
        'IT Support Services',
        'Digital Business Services',
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services',
    },
  };
  
  const handleTabChange = (tab: 'build' | 'grow') => {
    setActiveTab(tab);
  };
  
  const activeInfo = tabInfo[activeTab as keyof typeof tabInfo];

  return (
    <section className="section bg-neutral-50" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Service Offerings"
          subtitle="What We Do"
          center
        >
          <p className="text-neutral-600 text-center">
            Eight digital service areas under one roof, grouped the way businesses actually buy them: everything you build and design, and everything you need to grow and support it.
          </p>
        </SectionTitle>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-neutral-200">
          <button
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === 'build' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('build')}
          >
            Build &amp; Design
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === 'grow' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('grow')}
          >
            Grow &amp; Support
          </button>
        </div>
        
        {/* Content */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
            inView ? 'fade-in' : 'opacity-0'
          }`}
        >
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <div className="text-primary-600 mb-4">
              {activeInfo.icon}
            </div>
            <h3 className="text-3xl font-bold mb-4">{activeInfo.title}</h3>
            <p className="text-neutral-700 mb-6">{activeInfo.description}</p>
            
            <ul className="space-y-3 mb-8">
              {activeInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              to={activeInfo.link} 
              variant="primary"
            >
              View All Services
            </Button>
          </div>
          
          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img 
                src={activeInfo.image} 
                alt={activeInfo.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

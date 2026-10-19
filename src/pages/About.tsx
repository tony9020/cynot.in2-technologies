import { useInView } from 'react-intersection-observer';
import { Award, Layers, DollarSign, Clock, Headphones, Users, Code, ShieldCheck } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import Button from '../components/Button';

const benefits = [
  {
    icon: <Award size={32} />,
    title: 'Proven Track Record',
    content: 'Our experience means we understand both B2B and B2C market needs.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Tailored Solutions',
    content: 'A deep understanding of various industries lets us deliver customised solutions.',
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Cost-Effective',
    content: 'We optimise resources, reducing project timelines and costs.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Timely Delivery',
    content: 'Years of managing complex projects mean efficient, prioritised execution.',
  },
  {
    icon: <Headphones size={32} />,
    title: 'Ongoing Support',
    content: 'Our commitment extends beyond completion through comprehensive support services.',
  },
];

const expertise = [
  {
    icon: <Users size={32} />,
    value: '6+',
    title: 'Founders',
    content: 'Years of experience in software development and IT consulting.',
  },
  {
    icon: <Code size={32} />,
    value: '10+',
    title: 'Dev Team',
    content: 'Years in web design and development, with a focus on e-commerce platforms.',
  },
  {
    icon: <ShieldCheck size={32} />,
    value: '6+',
    title: 'Support Team',
    content: 'Specialises in cybersecurity and cloud computing, with years of hands-on experience.',
  },
];

const About = () => {
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: historyRef, inView: historyInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <SEO
        title="About Us"
        description="Incorporated in 2024 (CIN U62099KL2024PTC087538), Cynot Technologies is a Thrissur-based IT solutions company with 7+ years of combined team experience across software, web, design, marketing and IT support."
        path="/about"
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
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Seasoned people. Tailored solutions.</h1>
            <p className="text-xl text-neutral-300">
              An IT solutions provider with 7+ years of combined experience across B2B and B2C sectors — software, web, design, marketing, creative and IT support.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Company Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Technology that drives business growth</h2>
              <p className="text-neutral-700 mb-4">
                Cynot Technologies is a seasoned IT solutions provider specialising in software development, web design and development, UI/UX and graphic design, digital marketing, creative production and IT support services.
              </p>
              <p className="text-neutral-700 mb-6">
                With 7+ years of combined experience across B2B and B2C sectors, our team delivers tailored technology that drives business growth and success — from the first build through to ongoing support.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary-600">7+</p>
                  <p className="text-sm text-neutral-600">Years of Combined Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">8</p>
                  <p className="text-sm text-neutral-600">Digital Service Areas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">B2B + B2C</p>
                  <p className="text-sm text-neutral-600">Markets Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">End-to-end</p>
                  <p className="text-sm text-neutral-600">Build to Ongoing Support</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cynot Technologies Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registered Company Details */}
      <section className="section bg-neutral-50 pt-0 pb-0">
        <div className="container py-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Registered Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-1">Registered Name</p>
                <p className="text-neutral-700">CYNOT TECHNOLOGIES PRIVATE LIMITED (brand: Cynot Technologies)</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-1">Corporate Identity Number (CIN)</p>
                <p className="text-neutral-700">U62099KL2024PTC087538</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-1">Incorporation</p>
                <p className="text-neutral-700">6 May 2024 under the Companies Act, 2013 — company limited by shares</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-1">Nature of Business</p>
                <p className="text-neutral-700">IT solutions provider: software, web, UI/UX &amp; graphics, data &amp; AI, digital marketing, creative &amp; media, IT support and digital business services for B2B and B2C clients</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-1">Registered Office</p>
                <p className="text-neutral-700">Chaliechen House, Mangalassery, Koratti South, Mukundapuram, Thrissur 680308, Kerala, India</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-1">Contact</p>
                <p className="text-neutral-700">
                  <a href="mailto:support@cynot.in" className="text-primary-600 hover:underline">support@cynot.in</a> · <a href="tel:+919020555800" className="text-primary-600 hover:underline">+91 9020 555 800</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        ref={benefitsRef}
        className={`section bg-neutral-50 ${benefitsInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Benefits of Choosing Cynot Technologies"
            subtitle="Why Choose Us"
            center
          >
            <p className="text-center">
              Five reasons businesses and consumers alike keep working with us.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  <span className="text-primary-600 mr-2">{index + 1}</span>
                  {benefit.title}
                </h3>
                <p className="text-neutral-700">{benefit.content}</p>
              </div>
            ))}
            <div className="bg-primary-600 p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-3 text-white">All eight service areas</h3>
              <p className="text-primary-100">
                Software, Web, UI/UX &amp; Graphics, Data &amp; AI, Digital Marketing, Creative &amp; Media, IT Support and Digital Business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section 
        ref={historyRef}
        className={`section bg-white ${historyInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Journey"
            subtitle="Milestones"
            center
          >
            <p className="text-center">
              From a shared vision to an IT partner delivering end-to-end digital services.
            </p>
          </SectionTitle>

          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute md:left-1/2 left-[1rem] transform -translate-x-1/2 h-full md:w-1 w-[2px] bg-primary-100"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute md:left-1/2 left-[1rem] transform -translate-x-1/2 md:-translate-y-2 translate-y-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 pl-[3rem] md:pl-0">
                    <h3 className="text-xl font-semibold text-neutral-900">2020 · The Vision</h3>
                    <p className="mt-2 text-neutral-700">
                      Two graduates set out with a vision for technology that serves real business needs — the foundation of everything Cynot would become.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.pexels.com/photos/9626352/pexels-photo-9626352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot founding vision" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute md:left-1/2 left-[1rem] transform -translate-x-1/2 md:-translate-y-2 -translate-y-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img 
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot Technologies founded" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1 pl-[3rem]">
                    <h3 className="text-xl font-semibold text-neutral-900">2024 · Cynot Technologies Founded</h3>
                    <p className="mt-2 text-neutral-700">
                      The vision became a company: Cynot Technologies Private Limited, built by industry veterans with deep B2B and B2C IT services backgrounds.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute md:left-1/2 left-[1rem] transform -translate-x-1/2 md:-translate-y-2 -translate-y-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 pl-[3rem] md:pl-0">
                    <h3 className="text-xl font-semibold text-neutral-900">Today · Eight Service Areas</h3>
                    <p className="mt-2 text-neutral-700">
                      7+ years of combined experience now spans software, web, design, data &amp; AI, digital marketing, creative production, IT support and digital business services.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot Technologies today" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section 
        ref={teamRef}
        className={`section bg-neutral-50 ${teamInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Experienced people across B2B and B2C"
            subtitle="Team Expertise"
            center
          >
            <p className="text-center">
              Deep, hands-on experience in the areas that matter most to your project.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {expertise.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {item.icon}
                </div>
                <p className="text-4xl font-bold text-primary-600 mb-2">{item.value}</p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Our Leadership"
            subtitle="Meet The Team"
            center
          >
            <p className="text-center">
              Led by founders who still build, design and support the work we ship.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/IMG_20230722_211319448.jpg" 
                alt="Tony Christopher" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Tony Christopher</h3>
                <p className="text-primary-600 mb-4">Founder &amp; Tech Lead</p>
                <p className="text-neutral-700 mb-4">
                Senior Product Designer | UX Strategist | Technical Design Lead | with 6+ Years of experience crafting award-winning digital products for startups and enterprises across 6 countries.                </p>
                <div className="flex space-x-3">
                  <a href="https://tonychristopherofficial.com" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                  </svg>
                  </a>
                  <a href="https://linkedin.com/in/tonychristopherofficial" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                  </a>
                  <a href="https://instagram.com/tonychristopherofficial" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank" rel="noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/1649219836919.jpeg" 
                alt="Abhinav Jaiju" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Abhinav Jaiju</h3>
                <p className="text-primary-600 mb-4">Director, CTO</p>
                <p className="text-neutral-700 mb-4">
                Frontend Developer specializing in Next.js and a Marketing Analyst with a passion for building responsive and scalable web applications while optimizing user experience.                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                  </svg>
                  </a>
                  <a href="https://linkedin.com/in/abhinav-jaiju-006" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                  </a>
                  <a href="https://instagram.com/abhinav_jaiju" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank" rel="noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something that works for you.</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Whether you need software built, a website refreshed, a campaign launched or IT support, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                to="/contact" 
                variant="dark" 
                size="lg"
              >
                Contact Us
              </Button>
              <Button 
                to="/services" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10" 
                size="lg"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

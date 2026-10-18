import { useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import  { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import StatsBanner from '../components/StatsBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const benefits = [
  {
    title: 'Proven Track Record',
    content: 'Our experience means we understand both B2B and B2C market needs.',
  },
  {
    title: 'Tailored Solutions',
    content: 'A deep understanding of various industries lets us deliver customised solutions.',
  },
  {
    title: 'Cost-Effective',
    content: 'We optimise resources, reducing project timelines and costs.',
  },
  {
    title: 'Timely Delivery',
    content: 'Years of managing complex projects mean efficient, prioritised execution.',
  },
  {
    title: 'Ongoing Support',
    content: 'Our commitment extends beyond completion through comprehensive support services.',
  },
];

const Home = () => {
  useEffect(() => {
    document.title = "Cynot Technologies | Technology that drives business growth";
  }, []);

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: featuredRef, inView: featuredInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Hero
        title="Technology that drives business growth."
        subtitle="IT Solutions Provider"
        description="Software, web, design, digital marketing, creative and IT support services, all under one roof and tailored for B2B and B2C businesses."
        primaryAction={{
          text: "Explore Services",
          to: "/services",
        }}
        secondaryAction={{
          text: "Contact Us",
          to: "/contact",
        }}
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: 7,
              repeatType: 'reverse',
            }}
          >
            <a className="text-primary-100  hover:text-primary-600 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

      {/* About Section */}
      <section 
        ref={aboutRef} 
        className={`section bg-white ${aboutInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="About Cynot Technologies" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <span className="text-primary-400 font-bold text-md uppercase tracking-wider">Company Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Seasoned people. Tailored solutions.</h2>
              <p className="text-neutral-700 mb-6">
                Cynot Technologies is a seasoned IT solutions provider specialising in software development, web design and development, UI/UX and graphic design, digital marketing, creative production and IT support services. With 7+ years of combined experience across B2B and B2C sectors, our team delivers tailored technology that drives business growth and success.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">01 · Built by veterans</h3>
                    <p className="text-neutral-600">Founded by industry veterans with deep backgrounds in B2B and B2C IT services.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">02 · Experienced team</h3>
                    <p className="text-neutral-600">Professionals with hands-on experience in software development, web technologies and IT support.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">03 · Customer-centric</h3>
                    <p className="text-neutral-600">We understand both business and consumer markets, so we meet and exceed client expectations.</p>
                  </div>
                </div>
              </div>
              <Button to="/about" variant="primary" icon={<ArrowRight size={16} />} iconPosition="right">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* Featured Projects */}
      <section 
        ref={featuredRef} 
        className={`section bg-white ${featuredInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Selected Work"
            subtitle="Our Work"
            center
          >
            <p className="text-center">
              A snapshot of the platforms, migrations and growth work we deliver across our eight digital service areas.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Admin Portals & Dashboards"
              content="Custom web applications, admin portals and reporting dashboards built on modern technologies and integrated with the tools you already use."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
            <Card
              image="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="E-commerce & Cloud Platforms"
              content="Responsive storefronts, CMS implementations and cloud setups tuned for performance, search visibility and day-to-day reliability."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
            <Card
              image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Brand, Design & Growth"
              content="Design systems, brand identity, social creatives and campaign performance tracking that keep your marketing converting."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        ref={testimonialsRef} 
        className={`section bg-neutral-50 ${testimonialsInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Benefits of Choosing Cynot Technologies"
            subtitle="Why Choose Us"
            center
          >
            <p className="text-center">
              Experience, tailored solutions and support that continues long after launch.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    {index + 1}
                  </span>
                  <h3 className="ml-4 text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-neutral-700">{benefit.content}</p>
              </div>
            ))}
            <div className="bg-neutral-900 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">End-to-end, B2B &amp; B2C</h3>
                <p className="text-neutral-300">
                  Eight digital service areas, from first build to ongoing support — so one team stays accountable for the whole result.
                </p>
              </div>
              <div className="mt-6">
                <Button to="/contact" variant="primary" icon={<ArrowRight size={16} />} iconPosition="right">
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className={`bg-neutral-900 py-16 ${ctaInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's build something that works for you.</h2>
            <p className="text-neutral-300 max-w-2xl mb-8">
              Tell us what you need — software, a website, a brand refresh, a campaign or day-to-day IT support — and we'll shape the scope and the right pricing model around it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Get Started Today
              </Button>
              <Button to="/services" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

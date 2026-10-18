import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Monitor, Cloud, Database, Code, Server, ShieldCheck, Smartphone, LineChart } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const capabilities = [
  {
    icon: <Code size={32} />,
    title: 'Software Development',
    description: 'Custom software tailored to business needs, from SaaS platforms to admin portals and dashboards.',
    points: ['Web Applications', 'iOS & Android Apps', 'API Integration'],
  },
  {
    icon: <Monitor size={32} />,
    title: 'Web Design & Development',
    description: 'Responsive, fast websites and e-commerce platforms designed to convert and easy to manage.',
    points: ['E-commerce Platforms', 'CMS Implementation', 'SEO & Performance'],
  },
  {
    icon: <Database size={32} />,
    title: 'Data, Automation & AI',
    description: 'Workflows, assistants and reporting that turn your data into everyday decisions.',
    points: ['Workflow Automation', 'AI Chatbots', 'Analytics Dashboards'],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'UI/UX & Creative',
    description: 'Design systems, brand identity and media production that keep every touchpoint consistent.',
    points: ['Wireframes & Prototypes', 'Brand Identity', 'Video & Motion Graphics'],
  },
  {
    icon: <LineChart size={32} />,
    title: 'Digital Marketing',
    description: 'Search, paid media and social programs measured against the numbers that matter.',
    points: ['SEO & Local SEO', 'Google & Meta Ads', 'Conversion Tracking'],
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'IT Support Services',
    description: 'Infrastructure, security and cloud operations handled by a team that specialises in them.',
    points: ['Cybersecurity', 'Cloud (AWS, Azure, GCP)', 'Managed IT & Helpdesk'],
  },
];

const Technologies = () => {
  useEffect(() => {
    document.title = "Technologies | Cynot Technologies";
  }, []);

  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: caseStudiesRef, inView: caseStudiesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-neutral-900 text-white py-32 relative">
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">Cynot Technologies</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Technology that drives business growth</h1>
            <p className="text-xl text-neutral-300">
              Software development, web, data &amp; AI, cloud and IT support — delivered by a team with 7+ years of combined experience across B2B and B2C markets.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section 
        ref={overviewRef}
        className={`section bg-white ${overviewInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Cynot Technologies</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">One roof, eight digital service areas</h2>
              <p className="text-neutral-700 mb-4">
                Cynot Technologies is a seasoned IT solutions provider specialising in software development, web design and development, UI/UX and graphic design, digital marketing, creative production and IT support services.
              </p>
              <p className="text-neutral-700 mb-6">
                Our team of experienced developers, designers and consultants builds solutions around your business — not the other way round — and stays with you through launch and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">7+</p>
                  <p className="text-sm text-neutral-600">Years of Combined Experience</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">8</p>
                  <p className="text-sm text-neutral-600">Digital Service Areas</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">B2B + B2C</p>
                  <p className="text-sm text-neutral-600">Markets Served</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">End-to-end</p>
                  <p className="text-sm text-neutral-600">Build to Ongoing Support</p>
                </div>
              </div>
              <Button to="/contact" variant="primary">
                Contact Our Tech Team
              </Button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cynot Technologies Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section 
        ref={servicesRef}
        className={`section bg-neutral-50 ${servicesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Technology Capabilities"
            subtitle="What We Offer"
            center
          >
            <p className="text-center">
              From custom development to cloud and security, we cover the technology your business runs on.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {capabilities.map((capability) => (
              <Card
                key={capability.title}
                hoverEffect={true}
                className="h-full"
              >
                <div className="text-primary-600 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-neutral-700 mb-4">{capability.description}</p>
                <ul className="space-y-2 mb-4">
                  {capability.points.map((point) => (
                    <li key={point} className="flex items-center">
                      <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section 
        ref={caseStudiesRef}
        className={`section bg-white ${caseStudiesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Case Studies"
            subtitle="Our Success Stories"
            center
          >
            <p className="text-center">
              Explore how we've helped businesses transform through innovative technology solutions.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card
              image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Admin Portal & Dashboards"
              content="A custom analytics platform with real-time reporting and automated workflows, cutting manual effort across day-to-day operations."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
            <Card
              image="https://images.pexels.com/photos/6473730/pexels-photo-6473730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Mobile App Development"
              content="Cross-platform mobile experiences for iOS and Android, designed around clear user journeys and measurable engagement."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
            <Card
              image="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Cloud & Infrastructure"
              content="Migration and managed cloud setups across AWS, Azure and Google Cloud, backed by backup, security and helpdesk support."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies & Stack */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our Technology Stack"
            subtitle="Tools & Technologies"
            center
          >
            <p className="text-center">
              We use a wide range of cutting-edge technologies to deliver solutions that are robust, scalable, and future-proof.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Server size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Backend</h3>
              <p className="text-sm text-neutral-600 mt-2">Node.js, Python, Java, .NET</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Monitor size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-sm text-neutral-600 mt-2">React, Vue, Angular, Next.js</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Database size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Databases</h3>
              <p className="text-sm text-neutral-600 mt-2">MongoDB, PostgreSQL, MySQL, Redis</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Cloud size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Cloud</h3>
              <p className="text-sm text-neutral-600 mt-2">AWS, Azure, Google Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Talk to our technology team about what you want to build, and we'll shape the scope around it.
            </p>
            <Button 
              to="/contact" 
              variant="dark" 
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, TrendingUp } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

type ProjectCategory = 'all' | 'build' | 'grow';

interface Project {
  id: number;
  title: string;
  category: 'build' | 'grow';
  image: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Admin Portal & Reporting Dashboards',
    category: 'build',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Custom web application with role-based access, real-time data visualisation and automated reporting for a growing operations team.',
    tags: ['Web Application', 'Analytics', 'API Integration'],
  },
  {
    id: 2,
    title: 'E-commerce Storefront & CMS',
    category: 'build',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Responsive online store with a content management system, product catalogue and marketplace listings tuned for search and speed.',
    tags: ['E-commerce', 'CMS', 'SEO'],
  },
  {
    id: 3,
    title: 'Mobile App for iOS & Android',
    category: 'build',
    image: 'https://images.pexels.com/photos/6473730/pexels-photo-6473730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Cross-platform mobile app with a prototype-led UX process, launched alongside a design system the client team can extend.',
    tags: ['Mobile App', 'UI/UX', 'Design System'],
  },
  {
    id: 4,
    title: 'Brand Identity & Design System',
    category: 'build',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Logo, brand identity, style guide and a reusable component library covering social creatives, ad banners and print-ready artwork.',
    tags: ['Branding', 'UI/UX', 'Creative'],
  },
  {
    id: 5,
    title: 'SEO & Paid Advertising Program',
    category: 'grow',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Local SEO, Google and Meta campaigns with conversion tracking and monthly reporting across search, social and email.',
    tags: ['SEO', 'Google Ads', 'Analytics'],
  },
  {
    id: 6,
    title: 'Managed IT & Cloud Support',
    category: 'grow',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Network setup, cloud hosting on AWS and Azure, backup and disaster recovery, plus helpdesk support for an internal team.',
    tags: ['Cloud Computing', 'Cybersecurity', 'IT Support'],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  useEffect(() => {
    document.title = "Portfolio | Cynot Technologies";
    
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
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
            backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Work built to keep working</h1>
            <p className="text-xl text-neutral-300">
              Selected projects from across our eight digital service areas — everything we design and build, and everything we help you grow and support.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section 
        ref={projectsRef}
        className={`section bg-white ${projectsInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Featured Projects"
            subtitle="Portfolio Showcase"
            center
          >
            <p className="text-center">
              Browse our work across Build &amp; Design and Grow &amp; Support.
            </p>
          </SectionTitle>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <button
              className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                activeCategory === 'all' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                activeCategory === 'build' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveCategory('build')}
            >
              <div className="flex items-center">
                <Code size={16} className="mr-2" />
                Build &amp; Design
              </div>
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                activeCategory === 'grow' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveCategory('grow')}
            >
              <div className="flex items-center">
                <TrendingUp size={16} className="mr-2" />
                Grow &amp; Support
              </div>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                title={project.title}
                content={project.description}
                className="group h-full flex flex-col"
                hoverEffect={true}
              >
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Tell us what you want to build, launch or support — we'll recommend the right scope and pricing model.
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

export default Portfolio;

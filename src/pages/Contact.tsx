import { useState, FormEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin, Code, TrendingUp, Headphones, Check } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import Button from '../components/Button';

type ContactTopic = 'general' | 'build' | 'grow' | 'support';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    topic: 'general' as ContactTopic,
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real application, you would submit the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        topic: 'general',
        message: '',
      });
    }
  };

  const handleTopicSelect = (topic: ContactTopic) => {
    setFormData((prev) => ({ ...prev, topic }));
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Cynot Technologies in Thrissur, Kerala — email contact@cynot.in or call +91 9020 555 800 to discuss your software, web, design or IT project."
        path="/contact"
      />
      {/* Hero Banner */}
      <div className="bg-neutral-900 text-white py-32 relative">
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">Let's Talk</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Let's build something that works for you.</h1>
            <p className="text-xl text-neutral-300">
              Tell us what you need — software, a website, design, marketing or IT support — and our team will get back to you with the right scope and pricing model.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className={`section bg-white ${contactInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-1">Contact Information</h2>
                <p className="text-neutral-600 mb-6 text-sm">
                  CYNOT TECHNOLOGIES PRIVATE LIMITED · CIN U62099KL2024PTC087538
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Our Addresses</h3>
                      <p className="text-neutral-600 mb-3">
                        <span className="font-medium">Registered Office:</span><br />
                        Chaliechen House, Mangalassery,<br />
                        Koratti South, Mukundapuram,<br />
                        Thrissur 680308, Kerala, India
                      </p>
                      <p className="text-neutral-600">
                        <span className="font-medium">Operating Office:</span><br />
                        Shah Road, Chalakudy,<br />
                        Thrissur 680308, Kerala, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                      <p className="text-neutral-600 mb-1">
                        <span className="font-medium">General Enquiries:</span> <br />
                        <a href="mailto:contact@cynot.in" className="text-primary-600 hover:underline">contact@cynot.in</a>
                      </p>
                      <p className="text-neutral-600 mb-1">
                        <span className="font-medium">Support:</span> <br />
                        <a href="mailto:support@cynot.in" className="text-primary-600 hover:underline">support@cynot.in</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                      <p className="text-neutral-600 mb-1">
                        <span className="font-medium">Main Office:</span> <br />
                        <a href="tel:+919020555800" className="text-primary-600 hover:underline">+91 9020 555 800</a>
                      </p>
                      <p className="text-neutral-600">
                        <span className="font-medium">Technical Support:</span> <br />
                        <a href="tel:+918589010166" className="text-primary-600 hover:underline">+91 8589 010 166</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-xl mb-3">Business Hours</h3>
                  <p className="text-neutral-600 mb-2">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-neutral-600">Saturday - Sunday: Partially Closed</p>
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-xl mb-3">Let's Talk</h3>
                  <p className="text-neutral-700 font-semibold">Tony Christopher</p>
                  <p className="text-primary-600 text-sm mb-2">Founder &amp; Tech Lead</p>
                  <a
                    href="mailto:tonychristopherofficial@gmail.com"
                    className="text-neutral-600 hover:text-primary-600 hover:underline text-sm"
                  >
                    tonychristopherofficial@gmail.com
                  </a>
                  <br />
                  <a
                    href="tel:+919020555800"
                    className="text-neutral-600 hover:text-primary-600 hover:underline text-sm"
                  >
                    +91 9020 555 800
                  </a>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-xl mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/cynot.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com/cynot.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <Check size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
                  <p className="text-green-600 mb-6">
                    Your message has been received. We appreciate your interest and will get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {/* Topic Selection */}
                  <div className="mb-6">
                    <p className="text-neutral-700 mb-3 font-medium">What would you like to talk about?</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.topic === 'general'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleTopicSelect('general')}
                      >
                        <div className="flex flex-col items-center">
                          <div className="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                          <span className="font-medium">General</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.topic === 'build'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleTopicSelect('build')}
                      >
                        <div className="flex flex-col items-center">
                          <Code size={24} className="mb-2" />
                          <span className="font-medium">Build &amp; Design</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.topic === 'grow'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleTopicSelect('grow')}
                      >
                        <div className="flex flex-col items-center">
                          <TrendingUp size={24} className="mb-2" />
                          <span className="font-medium">Grow &amp; Support</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.topic === 'support'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleTopicSelect('support')}
                      >
                        <div className="flex flex-col items-center">
                          <Headphones size={24} className="mb-2" />
                          <span className="font-medium">IT Support</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring focus:ring-primary-200 focus:outline-none"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                            errors.subject ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="How can we help you?"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                          errors.message ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <Button
                        type="submit"
                        variant="primary"
                        icon={<Send size={16} />}
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-neutral-50 pt-0">
        <div className="container">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="h-96 w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.206628217476!2d76.36050317538282!3d10.244912489873302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080156f6e63bc1%3A0x9124cb6803a901ef!2s69V7%2BX68%2C%20Mangalassery%20-%20Chirangara%20Rd%2C%20Kizhakkummuri%2C%20Kerala%20680308!5e0!3m2!1sen!2sin!4v1745603561215!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Cynot Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What services does Cynot Technologies offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Eight digital service areas under one roof: Software Development, Web Design & Development, UI/UX & Graphic Design, Data, Automation & AI, Digital Marketing, Creative & Media Production, IT Support Services and Digital Business Services.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you price a project?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer flexible pricing based on scope and complexity, using three standard models: an hourly rate for short-term or support work, a project-based fee for larger initiatives, and a retainer for long-term partnerships.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work with B2B and B2C businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Our team has 7+ years of combined experience across both B2B and B2C sectors, so we understand how each market buys, uses and expects to be supported.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer services for small businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we serve businesses of all sizes. Our solutions are scalable and can be tailored to meet the specific needs and budget constraints of small businesses, startups, mid-sized companies, and large enterprises.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens after the project goes live?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our commitment extends beyond completion. We provide ongoing support — website maintenance, managed IT, campaign management and helpdesk assistance — through comprehensive support services.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you respond to my inquiry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our office for immediate assistance during business hours.',
                },
              },
            ],
          }),
        }}
      />
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="FAQs"
            center
          >
            <p className="text-center">
              Find answers to common questions about our services, pricing and how we can help you.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What services does Cynot Technologies offer?</h3>
              <p className="text-neutral-700">
                Eight digital service areas under one roof: Software Development, Web Design &amp; Development, UI/UX &amp; Graphic Design, Data, Automation &amp; AI, Digital Marketing, Creative &amp; Media Production, IT Support Services and Digital Business Services.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How do you price a project?</h3>
              <p className="text-neutral-700">
                We offer flexible pricing based on scope and complexity, using three standard models: an hourly rate for short-term or support work, a project-based fee for larger initiatives, and a retainer for long-term partnerships.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Do you work with B2B and B2C businesses?</h3>
              <p className="text-neutral-700">
                Yes. Our team has 7+ years of combined experience across both B2B and B2C sectors, so we understand how each market buys, uses and expects to be supported.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Do you offer services for small businesses?</h3>
              <p className="text-neutral-700">
                Yes, we serve businesses of all sizes. Our solutions are scalable and can be tailored to meet the specific needs and budget constraints of small businesses, startups, mid-sized companies, and large enterprises.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What happens after the project goes live?</h3>
              <p className="text-neutral-700">
                Our commitment extends beyond completion. We provide ongoing support — website maintenance, managed IT, campaign management and helpdesk assistance — through comprehensive support services.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How quickly can you respond to my inquiry?</h3>
              <p className="text-neutral-700">
                We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our office for immediate assistance during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Software, web, design, marketing &amp; IT support</h2>
            <p className="text-primary-100 mb-8 text-lg">
              All under one roof, tailored for B2B and B2C businesses — from the first build to ongoing support.
            </p>
            <Button 
              to="/services" 
              variant="dark" 
              size="lg"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
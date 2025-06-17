import React, { useState } from 'react';
import { Wrench, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Modal from './Modal'; // Make sure Modal.tsx is in the same folder
import logo from '/logo.jpg';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Water Supply Systems',
    'Government Projects and Bulk Supplier',
    'Consulting Services',
    'Construction Services',
    'Emergency Repairs',
    'Maintenance Plans'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openModal = (type: 'privacy' | 'terms') => {
    if (type === 'privacy') {
      setModalContent({
        title: 'Privacy Policy',
        content: 'We value your privacy and are committed to protecting your personal information.We only collect the information you provide, such as name, email, and contact number.3 We do not sell or share your information with third - party services without your consent.All data is stored securely and used solely to improve our services and customer experience.You may request deletion or review of your data at any time by contacting us at info@abhishekcompany.com.This policy is subject to change and we encourage you to review it periodically.'
      });
  } else {
    setModalContent({
      title: 'Terms of Use',
      content: `
By using our services, you agree to the following terms:

- All services are provided on a best-effort basis and are subject to availability.
- Pricing and service features may change with prior notice.
- We reserve the right to refuse or discontinue services under certain circumstances.
- Clients are responsible for the accuracy of the information they provide.
- Any misuse of our systems or personnel will result in termination of services.

For full terms, please contact us at abhishekcompanyinfo@gmail.com.
`

    });
}
  };

return (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-orange-500" />
 <img src="/logo.jpg"  alt="Abhishek & Company Logo"  className={`h-16 w-auto object-contain transition-all duration-300`}
              />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Leading provider of comprehensive piping solutions with over two decades
            of excellence in water supply systems, government projects, and construction services.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-orange-500" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-orange-500" />
              <span className="text-gray-300">abhishekcompanyinfo@gmail.com</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-orange-500 mt-1" />
              <span className="text-gray-300">
                B-416, 4th Floor, Emaar Gomti Greens<br />Lucknow-226010
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-6">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <span className="text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-2 transform inline-block cursor-pointer">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter for updates on new services and industry insights.
          </p>
          <div className="space-y-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Abhishek & Company. All rights reserved.
 Built with{' '}
  <span className="inline-block animate-pulse text-red-500 mx-1">Love ❤️</span>
  by{' '}
  <a
    href="https://nextgenscale.in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-500 font-semibold text-base hover:underline hover:text-orange-600 transition-colors duration-300"
  >
    NextGen Scale
  </a>
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <button onClick={() => openModal('privacy')} className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => openModal('terms')} className="hover:text-orange-500 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </div>

    {modalContent && (
      <Modal
        title={modalContent.title}
        content={modalContent.content}
        onClose={() => setModalContent(null)}
      />
    )}
  </footer>
);
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench, ChevronDown } from 'lucide-react';
import logo from '/logo.jpg';
import Modal from './Modal';

const ImageCarousel = () => {
  const images = ['/1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full max-w-lg rounded-xl shadow-lg"
      />
      <div className="flex space-x-4">
        <button
          onClick={goToPrevious}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [modal, setModal] = useState<{ title: string; content: React.ReactNode } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setAboutDropdown(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  
    { name: 'Services', href: '#services' },
    { name: 'Our Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const openModal = (title: string, content: React.ReactNode) => {
    setModal({ title, content });
    setIsOpen(false);
    setAboutDropdown(false);
  };

  const aboutOwnerContent = (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
      <img
        src="5.jpg"
        alt="Owner"
        className="w-72 h-72 rounded-xl object-cover shadow-lg"
      />
      <div className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
  <h2 className="text-2xl font-semibold text-orange-600 mb-2">Abhishek - Managing Director</h2>
  <p className="mb-2">
    <strong>Mr. Abhishek Singh</strong>, the Managing Director of <strong>Abhishek & Company</strong>, is a dynamic leader with a strong vision and a deep understanding of the construction and plumbing industry.
  </p>
  <p className="mb-2">
    With over 5 years of hands-on experience, he has transformed the company into a trusted name by introducing modern techniques, improving operational efficiency, and ensuring customer satisfaction across tier 2 and tier 3 cities.
  </p>
  <p className="mb-2">
    Known for his problem-solving mindset and people-first leadership, he focuses on transparent communication, long-term partnerships, and providing top-quality products and services.
  </p>
  <p>
    Outside of his professional responsibilities, he actively explores innovations in the building sector to make the construction process easier and more affordable for the common man.
  </p>
</div>

    </div>
  );

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Wrench className={`h-8 w-8 ${scrolled ? 'text-blue-800' : 'text-white'} transition-colors`} />
              {/* <img src={logo} alt="Abhishek & Company Logo" className={`h-16 w-auto object-contain transition-all duration-300 ${scrolled ? '' : 'invert'}`} /> */}
              <h1 className={`text-2xl font-bold tracking-wide transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
  Abhishek & Company
</h1>

            </div>

            <nav className="hidden md:flex space-x-6 items-center">
              <button onClick={() => scrollToSection('#home')} className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Home
              </button>

              <div className="relative">
                <button onClick={() => setAboutDropdown(!aboutDropdown)} className={`flex items-center gap-1 font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                  About Us <ChevronDown size={16} />
                </button>
                {aboutDropdown && (
                  <div className="absolute top-full mt-2 bg-white shadow-md rounded w-56 z-50 text-sm text-gray-800">
                    <button
                      onClick={() => openModal('Image Tab', <ImageCarousel />)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Image Tab
                    </button>
                    <button
                      onClick={() => openModal('About Managing Director', aboutOwnerContent)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Managing Director
                    </button>
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 space-y-2">
              {/* <button onClick={() => scrollToSection('#home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500">
                Home
              </button> */}
              <div className="px-4">
                <span className="block text-gray-700 font-semibold mb-2">About Us</span>
                <button
                  onClick={() => openModal('Image Tab', <ImageCarousel />)}
                  className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100"
                >
                  Image Tab
                </button>
                <button
                  onClick={() => openModal('About Managing Director', aboutOwnerContent)}
                  className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100"
                >
                  Managing Director 
                </button>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {modal && (
        <Modal title={modal.title} content={modal.content} onClose={() => setModal(null)} />
      )}
    </>
  );
};

export default Header;

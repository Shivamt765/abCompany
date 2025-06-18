import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals with decades of industry expertise',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Certified products and services meeting highest industry standards',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Committed to on-time project completion and efficient service',
  },
  {
    icon: Shield,
    title: 'Reliable Support',
    description: '24/7 customer support and comprehensive warranty coverage',
  },
];

const ProudMomentSlider = () => {
  const images = ['/19.jpg', '/r1.jpg','/r2.jpg', '/r3.jpg','/r4.jpg','/r5.jpg','/15.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full md:w-3/4 lg:w-2/3 overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400 animate-pulse">
      <img
        src={images[currentIndex]}
        alt={`Ram Mandir ${currentIndex + 1}`}
        className="w-full h-[450px] object-cover transition-opacity duration-1000 ease-in-out rounded-3xl opacity-100"
      />
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-300 hover:bg-yellow-400 p-2 rounded-full shadow-xl"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-300 hover:bg-yellow-400 p-2 rounded-full shadow-xl"
      >
        ▶
      </button>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Abhishek & Company
          </h2>
          <div className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full shadow-sm mb-4">
            ✅ BIS Certified
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of comprehensive piping solutions with over two decades of excellence in the industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/irrigation.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Your Trusted Piping Partner
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our establishment, Abhishek & Company has been at the forefront of providing 
              innovative piping solutions for residential, commercial, and government projects.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in comprehensive water supply systems, government project supplies, 
              professional consulting, and construction services.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-blue-800 font-semibold">
                "Excellence in every pipe, reliability in every project."
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-10 border-4 border-yellow-300 animate-fadeIn">
          <ProudMomentSlider />
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-900 flex items-center gap-2 animate-devotional-glow">
              🙏 Proud Contribution to Ram Mandir
            </h3>
            <p className="text-lg text-yellow-700 leading-relaxed">
  Abhishek & Company takes immense pride in contributing to the sacred Ram Mandir Project in Ayodhya. <br />
  From high-quality piping solutions and expert consultation to civil work, Makarana marble supply, and construction services, 
  it was an honor to serve a cause of such national and spiritual importance.
</p>

            <p className="text-yellow-800 font-medium">
              🇮🇳 Dedicated to building the nation, one project at a time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Visionary Founder
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Mrs. Geeta Singh</strong>, the founder of <strong>Abhishek & Company</strong>, built the foundation with resilience and values that continue to drive us forward. 
              Her dedication and pioneering spirit inspire excellence across the organization.
            </p>
          </div>
          <img
            src="/6.jpg"
            alt="Mrs. Geeta Singh - Founder"
            className="rounded-2xl w-full h-[480px] object-contain shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/5.jpg"
            alt="Mr. Abhishek Singh - Managing Director"
            className="rounded-2xl w-full h-[480px] object-contain shadow-2xl"
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Dynamic Managing Director
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
            <p className="text-lg text-gray-700 leading-relaxed">
  <strong>Mr. Abhishek Singh</strong>, the Managing Director of <strong>Abhishek & Company</strong>, is spearheading the brand's growth with strategic innovation, cutting-edge solutions, and a strong commitment to customer satisfaction. 
  Under his leadership, the company has expanded its footprint across multiple states, taking on major infrastructure and civil projects with a focus on quality and timely execution. 
  His hands-on approach, technical knowledge, and dedication to excellence ensure that every project reflects the company's core values. 
  Beyond business, Mr. Singh is known for his approachable personality, ethical leadership, and deep involvement in every stage—from planning to execution—which has earned him respect across clients, team members, and industry peers alike.
</p>

            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
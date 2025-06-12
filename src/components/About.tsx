import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with decades of industry expertise"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Certified products and services meeting highest industry standards"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to on-time project completion and efficient service"
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description: "24/7 customer support and comprehensive warranty coverage"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Abhishek & Company
          </h2>
           <div className="inline-block bg-green text-green-800  font-semibold px-4 py-1 rounded-full shadow-sm mb-4">
          <h1>✅ BIS Certified </h1>
        </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of comprehensive piping solutions with over two decades of excellence in the industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
              alt="Our Team"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Your Trusted Piping Partner
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our establishment, Abhishek & Company has been at the forefront of providing 
              innovative piping solutions for residential, commercial, and government projects. 
              Our commitment to quality and customer satisfaction has made us a trusted name 
              in the industry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in comprehensive water supply systems, government project supplies, 
              professional consulting, and construction services. Our team of experts ensures 
              every project meets the highest standards of quality and efficiency.
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
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
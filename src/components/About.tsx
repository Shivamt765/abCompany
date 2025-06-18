import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

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

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Section Heading */}
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

        {/* Company Overview */}
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

        {/* Feature Highlights */}
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

        {/* Proud Moment Section */}
        <div className="bg-yellow-50 p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-10">
          <img
            src="/21.jpg" // Make sure this image exists in your public/img folder
            alt="Ram Mandir Contribution"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-[350px]"
          />
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-3xl font-bold text-yellow-800">
              🙏 Proud Contribution to Ram Mandir
            </h3>
            <p className="text-lg text-yellow-700 leading-relaxed">
              Abhishek & Company takes immense pride in contributing to the sacred Ram Mandir Project in Ayodhya. 
              From high-quality piping solutions to expert consultation, it was an honor to serve a cause of such national and spiritual importance.
            </p>
            <p className="text-yellow-800 font-medium">
              🇮🇳 Dedicated to building the nation, one project at a time.
            </p>
          </div>
        </div>

        {/* Owner Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/6.jpg" // Replace with correct image path
            alt="Company Owner"
            className="rounded-2xl w-full h-[480px] object-contain shadow-2xl"
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Visionary Founder
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Mrs. Geeta Singh</strong>, the founder of <strong>Abhishek & Company</strong>, has established a legacy of excellence in a domain traditionally led by men. 
              Her vision, resilience, and attention to quality have transformed the company into a recognized and respected name across India.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Her leadership is rooted in values of trust, consistency, and service. 
              She continues to mentor and inspire the next generation in construction and business.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

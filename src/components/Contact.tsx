import React from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9415249002"],
      description: "Available 24/7 for emergency support"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["abhishekcompanyinfo@gmail.com"],
      description: "Quick response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["B- 416, 4th Floor, Emaar Gomti Greens, Lucknow-226010"],
      description: "Head office open Mon-Sat"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00 AM - 7:00 PM", "Sun: Emergency calls only"],
      description: "Extended hours for urgent projects"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="h-8 w-8 mr-3 text-orange-500" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-300 mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-400 mt-2">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Box */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency Services</h3>
              <p className="mb-4">
                Need urgent pipeline repair or emergency consultation? 
                Our emergency team is available 24/7.
              </p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Emergency: +91 9415249002
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
            <form
              action="https://formsubmit.co/abhishekcompanyinfo@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden Config Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Inquiry from Website Contact Form" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="water-supply">Water Supply Systems</option>
                    <option value="government-projects">Government Projects</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="construction">Construction Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Book an Appointment</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

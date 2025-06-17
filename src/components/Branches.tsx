import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Branches = () => {
  const branches = [
    {
      name: "Lucknow Branch",
      address: " B- 416, 4th Floor,Emaar Gomti Greens Lucknow-226010",
      phone: "+91 9415249002",
      // email: "mumbai@abhishekcompany.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      image: "/lko.jpg"
    },
    {
      name: "Ghaziabad Branch",
      address: " 905, Sec-4, Ahlcon Apartment Vaishali, Ghaziabad",
      phone: "+91 9415249002",
      email: "delhi@abhishekcompany.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      image: "/ghz.jpg"
    },
    {
      name: "Bhopal Branch",
      address: "301, Paras Urbane,Arera Colony ",
      phone: "+91 9415249002",
      email: "pune@abhishekcompany.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      image: "/bhp.jpg"
    },
    // {
    //   name: "Bangalore Branch",
    //   address: "321 Tech Park Road, Electronic City, Bangalore - 560100",
    //   phone: "+91 98765 43213",
    //   email: "bangalore@abhishekcompany.com",
    //   hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    //   image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    // }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Branches
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving customers across major cities with dedicated local support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{branch.name}</h3>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{branch.address}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {branch.phone}
                  </a>
                </div>
                
                {/* <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {branch.email}
                  </a>
                </div> */}
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <p className="text-gray-600">{branch.hours}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group-hover:bg-orange-500">
                    Visit Branch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Expanding Nationwide
            </h3>
            <p className="text-gray-600 mb-6">
              We're continuously expanding our presence across India to serve you better. 
              Can't find a branch near you? Contact our head office for support in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
    Request New Branch
  </button>
</a>

<a href="#contact">
  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
    Franchise Opportunities
  </button>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
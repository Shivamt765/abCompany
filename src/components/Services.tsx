import React from 'react';
import { Droplets, Building, Users, Hammer, AlertTriangle, Wrench, Leaf } from "lucide-react";


const Services = () => {
  const services = [
      {
      icon: Building,
      title: "Government Project and Bulk Supplier",
      description: "Trusted supplier for large-scale government infrastructure projects with certified materials and timely delivery.",
      features: ["Infrastructure Supply", "Bulk Material Provision", "Quality Certification", "Project Management"],
      image: "https://rashmimetaliks.com/wp-content/uploads/2021/09/MG_1171.jpg"
    },
    {
      icon: Droplets,
      title: "PVC Pipes Supply",
      description: "Durable and high-quality PVC pipes suitable for all water supply and sewage applications in residential, commercial, and industrial sectors.",
      features: ["UV Resistant", "High Flow Capacity", "Corrosion-Free", "Cost-Effective"],
      image: "https://www.colglo.co.uk/wp-content/uploads/2024/07/AdobeStock_329185759-copy.jpeg"
    },
    {
      icon: Droplets,
      title: "All Types of Water Supply",
      description: "Complete water supply solutions including pipe installation, maintenance, and repair for residential and commercial properties.",
      features: ["Pipeline Installation", "Water System Design", "Leak Detection & Repair", "Pressure Testing"],
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    },
  
    {
      icon: Users,
      title: "Consulting",
      description: "Expert consulting services for piping design, material selection, and project planning to ensure optimal results.",
      features: ["System Design", "Material Consultation", "Cost Optimization", "Technical Support"],
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Full-scale construction services for piping systems with skilled workforce and modern equipment.",
      features: ["Installation Services", "Site Preparation", "Quality Assurance", "Post-Installation Support"],
      image:"https://www.autodesk.com/blogs/construction/wp-content/uploads/2024/07/140-Common-Construction-Terms-to-Know.jpg"
    },
    {
      icon: AlertTriangle, // Placeholder icon
      title: "Fire Fighting",
      description: "Reliable fire fighting piping systems for residential, commercial, and industrial safety with ISI-certified equipment.",
      features: ["ISI Certified Materials", "Hydrant Systems", "Sprinkler Networks", "Pressure Pumps"],
      image: "https://media.istockphoto.com/id/1313773483/photo/action-portrait-of-male-and-female-firefighting-hose-team.jpg?s=612x612&w=0&k=20&c=yvOeisWZMyaDRdbWhuBsVohoK0TIu0ICJy4KFZl8ODs="
    },
    {
      icon: Wrench, // Replace with a real hardware icon if needed
      title: "Hardware Tools",
      description: "Supplying a broad range of high-quality hardware tools for construction, plumbing, and maintenance work.",
      features: ["Construction Tools", "Plumbing Kits", "Power Tools", "Safety Equipment"],
      image: "https://media.istockphoto.com/id/1394287688/photo/carpenter-shopping-in-hardware-store.jpg?s=612x612&w=0&k=20&c=2REACyiwXzjiTOe3J_rg4Ek6DHhq6f-bLvMnWkvHfeA="
    },
    {
      icon: Building,
      title: "Ready Mix Concrete Plant",
      description: "On-demand concrete supply for small and large construction projects using modern batching technology.",
      features: ["High Strength Mix", "On-Time Delivery", "Computerized Batching", "Bulk Orders Available"],
      image:"https://content.jdmagicbox.com/comp/sangli/z2/9999px233.x233.200205222621.e3z2/catalogue/vision-ready-mix-concrete-plant-sangli-cmtaqsr8ay.jpg"
    },
    {
      icon: Leaf, // Representing organic products
      title: "World-Class Organic Products (Upcoming)",
      description: "Launching soon – a range of premium organic food items including traditional pickles, natural vinegar, and spices.",
      features: ["100% Natural", "No Preservatives", "Traditional Recipes", "Eco-Friendly Packaging"],
      image: "http://veryrareonline.com/wp-content/uploads/2018/10/ORganic-food.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive piping and infrastructure solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group-hover:bg-orange-500">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
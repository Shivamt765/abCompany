import React, { useEffect, useRef } from 'react';

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  // Add more image paths
];

const ImageCarousel = () => {
  const scrollRef = useRef(null);
useEffect(() => {
  let position = 0;
  const speed = 1.5; // increase this for faster movement
  const interval = setInterval(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = position;
      position += speed;
      if (position >= scrollRef.current.scrollWidth / 2) {
        position = 0;
      }
    }
  }, 8); // decrease this for smoother and quicker animation

  return () => clearInterval(interval);
}, []);

  const allImages = [...images, ...images]; // Loop illusion

  return (
    <section className="py-12 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Our <span className="">Projects</span>
        </h2>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar px-6 py-4 scroll-smooth snap-x snap-mandatory"
        >
          {allImages.map((src, idx) => (
            <div
              key={idx}
              className="min-w-[400px] h-[250px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 snap-start"
            >
              <img
                src={src}
                alt={`carousel-img-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

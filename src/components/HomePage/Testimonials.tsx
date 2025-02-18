// src/components/TestimonialSlider.tsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  image: string;
  text: string;
  author: string;
}

// Example: 6 testimonials, but you can expand to 40
const testimonials: Testimonial[] = [
  {
    id: 1,
    image: '/assets/images/student1.jpg',
    text: '“London School helped me improve my English scores drastically.”',
    author: 'Jane D.'
  },
  {
    id: 2,
    image: '/assets/images/student2.jpg',
    text: '“I loved learning coding basics with JavaScript. Now I want to build games!”',
    author: 'Mark T.'
  },
  {
    id: 3,
    image: '/assets/images/student1.jpg',
    text: '“The German course was so immersive, I can’t wait to visit Germany.”',
    author: 'Emily S.'
  },
  {
    id: 4,
    image: '/assets/images/student2.jpg',
    text: '“Teachers at London School are top-notch, so supportive!”',
    author: 'Alex P.'
  },
  {
    id: 5,
    image: '/assets/images/student1.jpg',
    text: '“Their synergy with Logiscool is perfect for learning tech.”',
    author: 'Diana W.'
  },
  {
    id: 6,
    image: '/assets/images/student2.jpg',
    text: '“I gained confidence speaking English with real-world practice.”',
    author: 'Leo K.'
  },
];

const TestimonialSlider: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure Swiper only loads on client-side to avoid SSR/hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="bg-gray-50 py-12 px-4">
      <motion.h2
        className="text-2xl font-bold text-ls-blue mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Students Say
      </motion.h2>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={24}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testi) => (
          <SwiperSlide key={testi.id}>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-md transition-shadow h-full">
              <img
                src="https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
                alt={testi.author}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 leading-relaxed">{testi.text}</p>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                — {testi.author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;

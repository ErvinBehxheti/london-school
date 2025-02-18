// src/components/TeamSlider.tsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'Founder & Head Instructor',
    image: '/assets/images/team1.jpg',
    bio: 'Over 10 years teaching English & German, leading our premium programs.'
  },
  {
    name: 'Sarah Miller',
    position: 'Tech Lead',
    image: '/assets/images/team2.jpg',
    bio: 'A passionate programmer focusing on interactive JavaScript experiences.'
  },
  {
    name: 'Michael Brown',
    position: 'Senior German Teacher',
    image: '/assets/images/team3.jpg',
    bio: 'Inspires students with authentic cultural insights for mastering German.'
  },
  {
    name: 'Emily Green',
    position: 'English Specialist',
    image: '/assets/images/team4.jpg',
    bio: 'Expert in modern teaching methods, ensuring top-notch English proficiency.'
  },
];

const TeamSlider: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="py-12 px-4 bg-white">
      <motion.h2
        className="text-2xl font-bold text-ls-red mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h2>

      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination]}
        className="max-w-2xl mx-auto"
        // optionally add loop: true, speed, etc.
      >
        {teamMembers.map((member, i) => (
          <SwiperSlide key={i}>
            {/* 2-column layout on desktop: image left, text right */}
            <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
              {/* LEFT: Profile Photo */}
              <img
                src="https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
                alt={member.name}
                className="w-32 h-32 object-cover rounded-lg 
                           md:w-48 md:h-48"
              />

              {/* RIGHT: Text Info */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-ls-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {member.position}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSlider;

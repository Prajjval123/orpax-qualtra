import React from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center text-center px-4 text-white bg-banner bg-cover bg-center backdrop-blur-xl"
      style={{ height: '100vh' }}
    >
      {/* Typing Title */}
      <h1 className="text-4xl font-bold uppercase opacity-100 animate-fade-in">
        <Typewriter
          options={{
            strings: [
              'Orpax Qualtra',
              'We understand, we solve, and we deliver...',
            ],
            autoStart: true,
            loop: true, // Enable looping
            delay: 75,
            deleteSpeed: 50, // Speed of deleting text
            pauseFor: 1000, // Pause before retyping
          }}
        />
      </h1>

      {/* Content Section */}
      <div className="mt-6 text-lg font-medium opacity-0 animate-fade-in-later">
        <p className="mt-6 max-w-2xl text-base">
          Running a business, whether big, small, or medium, constantly involves
          challenges. At OQ, we look forward to helping you by working as an
          extension of your team to better understand your requirements, seek
          solutions for your bottlenecks, and deliver high-quality solutions. We
          do all this by taking maximum effort to ensure.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import HeroImage from '../assets/Hero.webp'

const Hero = ({isDialogOpen, setDialogOpen, MyDialog}) => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0"
      >
        <img
          src={HeroImage}
          alt="Wanaka Tree Service"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-black/40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 max-w-6xl mx-auto">
        {/* Main Heading */}
        <div
          
        >
          <h1 
            className="text-5xl md:text-6xl font-bold text-white mb-4 font-montserrat"
          >
            <span
              
              className="block"
            >
              Expert Tree Care
            </span>
            <span
              
              className="block"
            >
              in Wanaka,
            </span>
            <span
              
              className="block"
            >
              Hawea and Cromwell
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p 
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
          
        >
          Professional Arborist Services  Its our mission to help keep trees healthy and our customers happy.
         

        </p>

        {/* CTA Button */}
        <div
          
        >
          <MyDialog 
            isDialogOpen={isDialogOpen} 
            setDialogOpen={setDialogOpen} 
            text={
              <span
                
                className="inline-block"
              >
                Book a Free Quote
              </span>
            }
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2.3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg 
          className="w-6 h-6 text-white animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;

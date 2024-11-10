import { motion } from 'framer-motion';
import HeroImage from '../assets/Hero.jpg'

const Hero = ({isDialogOpen, setDialogOpen, MyDialog}) => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={HeroImage}
          alt="Wanaka Tree Service"
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block"
            >
              Expert Tree Care
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="block"
            >
              in Wanaka,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="block"
            >
              Hawea and Cromwell
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          Professional Arborist Services - Keeping Your Trees Healthy and Your Property Safe
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <MyDialog 
            isDialogOpen={isDialogOpen} 
            setDialogOpen={setDialogOpen} 
            text={
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                Book a Free Quote
              </motion.span>
            }
          />
        </motion.div>
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

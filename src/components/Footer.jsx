import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhiteLogo from '../assets/logoWhite.png';
const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of your navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.footer 
      className="bg-[#1a331a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src={WhiteLogo} 
                alt="Tree Company Logo" 
                className="h-24 w-auto"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              <motion.span 
                className="font-bold text-2xl text-white"
                variants={itemVariants}
              >
                Tree Company <br/>
                <span className="text-lg">Wanaka | Hawea</span>
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300"
              variants={itemVariants}
            >
              Professional tree care services in Wanaka & Hawea, delivered by certified arborists.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {/* Social Icons with hover animations */}
              <motion.a 
                href="https://www.facebook.com/WanakaArborist" 
                className="hover:text-[#95BE4C] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                className="hover:text-[#95BE4C] transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="grid grid-cols-2 gap-8 ml-5"
            variants={containerVariants}
          >
            {/* Quick Links Column */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-lg font-semibold mb-4"
                variants={itemVariants}
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-2">
                {['home', 'services', 'about', 'contact'].map((section, index) => (
                  <motion.li
                    key={section}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button 
                      onClick={() => scrollToSection(section)} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-lg font-semibold mb-4"
                variants={itemVariants}
              >
                Our Services
              </motion.h3>
              <ul className="space-y-2">
                {['Tree Removal', 'Crown Reduction', 'Emergency Services', 'Stump Removal'].map((service, index) => (
                  <motion.li
                    key={service}
                    className="text-gray-300"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 
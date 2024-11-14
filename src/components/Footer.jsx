import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Logo from '../assets/logo.png';
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
                src={Logo} 
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
                {['services', 'about', 'testimonials', 'contact'].map((section, index) => (
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

          
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 
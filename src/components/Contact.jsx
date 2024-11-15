import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
import { lazy, useRef } from 'react';
import WanakaTree from '../assets/WanakaTree.webp';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactItems = [
    {
      href: "tel:+64275166690",
      icon: <FaPhone className="text-xl" />,
      text: "027 516 6690"
    },
    {
      href: "mailto:info@treescompany.co.nz",
      icon: <FaEnvelope className="text-xl" />,
      text: "info@treescompany.co.nz"
    },
    {
      href: "https://www.facebook.com/WanakaArborist",
      icon: <FaFacebook className="text-xl" />,
      text: "Facebook Page",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="relative bg-gray-100 py-24 min-h-[600px] overflow-hidden"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax Background */}
      <motion.img 
        src={WanakaTree}
        alt="Background"
        className="absolute inset-0 z-0 h-[120%] object-cover"
        loading="lazy"
        style={{
          y,
          top: '-10%'
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content container with vertical padding */}
      <div className="container mx-auto px-4 relative z-10 py-12">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="flex flex-col items-center space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactItems.map((item, index) => (
            <motion.a 
              key={index}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="inline-flex items-center px-4 py-2 bg-[#2B5329] text-white rounded-lg hover:bg-[#1a331a] transition-colors space-x-2 backdrop-blur-sm bg-opacity-90"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.span>
              <motion.span 
                className="font-medium"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                {item.text}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
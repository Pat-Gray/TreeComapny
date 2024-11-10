import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';

const Contact = () => {
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
      className="bg-gray-100 py-12" 
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
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
              className="inline-flex items-center px-4 py-2 bg-[#2B5329] text-white rounded-lg hover:bg-[#1a331a] transition-colors space-x-2"
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
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const services = [
    {
      title: "Tree Pruning & Crown Care",
      description: "Expert pruning services including crown lifting, thinning, and reduction. We focus on improving tree health, safety, and aesthetics while maintaining natural form. Specializing in both young tree formation and mature tree maintenance.",
      image: "/images/pruning.jpg"
    },
    {
      title: "Tree Removal",
      description: "Safe and efficient removal of trees in any location, from straightforward felling to technical dismantling in confined spaces. We donate to tree planting charities for every tree removed, supporting environmental sustainability.",
      image: "/images/tree-removal.jpg"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency response for storm damage, fallen trees, and hazardous situations requiring immediate attention. Rapid response team equipped for any tree-related emergency.",
      image: "/images/emergency.jpg"
    },
    {
      title: "Hedge Maintenance",
      description: "Professional hedge trimming for both natural and formal styles. We specialize in difficult-to-access hedges and can maintain any height or style to enhance your garden's aesthetics.",
      image: "/images/hedge-maintenance.jpg"
    },
    {
      title: "Tree Support Systems",
      description: "Installation of professional bracing and support systems for at-risk trees. Combining cable systems with crown reduction to preserve tree form while ensuring safety.",
      image: "/images/health-assessment.jpg"
    },
    {
      title: "Wood Chipping",
      description: "Complete wood processing services including log milling for valuable timber and wood chipping for garden mulch. We promote sustainable recycling of all tree materials.",
      image: "/images/site-clearing.jpg"
    },
    {
      title: "Tree Planting & Advice",
      description: "Expert guidance on species selection and planting location. We provide complete planting services including tree sourcing, protection systems, and aftercare advice.",
      image: "/images/health-assessment.jpg"
    },
    {
      title: "Specialized Installations",
      description: "Professional installation of tree lighting, bird boxes, rope swings, and other tree accessories. We also offer rescue services for stranded items in trees.",
      image: "/images/crown-reduction.jpg"
    }
  ];

  return (
    <section id="services" className="pt-5 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional tree care services in Wanaka & Hawea, delivered by certified arborists
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {['Certified Arborists', 'Quality Guarantee', 'Local Expertise', 'Fully Insured'].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-[#2B5329]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <motion.button 
                  onClick={() => scrollToSection('quote')}
                  className="mt-4 bg-[#2B5329] text-white px-4 py-2 rounded-full hover:bg-[#1a331a] transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Quote
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


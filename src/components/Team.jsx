import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const owner = {
    name: "Andy Hennigen",
    role: "Company Owner and Lead Arborist",
    image: "/images/team/john.jpg",
    qualifications: "Certified Arborist with Over 15 Years Experience",
    description: "Andy leads our team with extensive experience in all aspects of tree care and management. His dedication to quality work and customer satisfaction has made him one of the most trusted arborists in the area.",
    highlights: [
      "Certified Arborist",
      "15+ Years Industry Experience",
      "Emergency Response Specialist",
      "Tree Risk Assessment Qualified"
    ]
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#2B5329] mb-4">Meet Our Expert</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional leadership ensuring the highest quality tree care services
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-full">
                <motion.img
                  src={owner.image}
                  alt={owner.name}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: '600px' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{owner.name}</h3>
                  <p className="text-xl text-[#2B5329] font-semibold">{owner.role}</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {owner.description}
                </p>
                
                <div className="border-t border-b border-gray-100 py-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Qualifications & Expertise:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {owner.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg 
                          className="w-5 h-5 mr-3 text-[#2B5329]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 
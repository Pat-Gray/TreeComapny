import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function About({isDialogOpen, setDialogOpen, MyDialog}) {
  const stats = [
    { 
      start: 0,
      end: 15,
      suffix: "+",
      label: "Years Experience",
      icon: (
        <svg className="w-8 h-8 text-[#2B5329]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      start: 0,
      end: 1000,
      suffix: "+",
      label: "Trees Cared For",
      icon: (
        <svg className="w-8 h-8 text-[#2B5329]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      start: 0,
      end: 100,
      suffix: "%",
      label: "Client Satisfaction",
      icon: (
        <svg className="w-8 h-8 text-[#2B5329]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    { 
      start: 0,
      end: 24,
      suffix: "/7",
      label: "Emergency Service",
      icon: (
        <svg className="w-8 h-8 text-[#2B5329]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const Counter = ({ from, to, suffix }) => {
    const [count, setCount] = useState(from);
    
    useEffect(() => {
      if (inView) {
        let startTime;
        const animationDuration = 2000; // 2 seconds
        
        const animation = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / animationDuration;
          
          if (progress < 1) {
            setCount(Math.floor(from + (to - from) * progress));
            requestAnimationFrame(animation);
          } else {
            setCount(to);
          }
        };
        
        requestAnimationFrame(animation);
      }
    }, [inView, from, to]);

    return (
      <span className="text-3xl font-bold text-[#2B5329]">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-9"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Your Trusted Tree Care Experts in Wanaka & Hawea
              </h2>
              <p className="text-lg text-gray-600">
                Southern Alps Tree Care brings together expertise, passion, and local knowledge 
                to deliver exceptional arborist services. Our certified team understands the unique 
                challenges of maintaining trees in the Southern Alps region.
              </p>
              <p className="text-lg text-gray-600">
                We take pride in our commitment to environmental sustainability and the preservation 
                of New Zealand's natural beauty, while ensuring the safety and aesthetics of your property.
              </p>
            </div>

            <MyDialog 
              isDialogOpen={isDialogOpen} 
              setDialogOpen={setDialogOpen} 
              text={
                <span className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Us
                </span>
              } 
            />
          </motion.div>

          {/* Stats Section */}
          <div ref={ref} className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center space-y-3">
                  {stat.icon}
                  <div className="h-12 flex items-center justify-center">
                    {inView && (
                      <Counter 
                        from={stat.start} 
                        to={stat.end} 
                        suffix={stat.suffix} 
                      />
                    )}
                  </div>
                  <p className="text-gray-600 font-medium text-center">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 
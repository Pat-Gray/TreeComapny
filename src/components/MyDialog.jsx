import Modal from 'react-modal';

export default function MyDialog({ isDialogOpen, setDialogOpen, text }) {
  const services = [
    { title: "Tree Removal", icon: "🌳" },
    { title: "Crown Reduction", icon: "👑" },
    { title: "Emergency Services", icon: "🚨" },
    { title: "Tree Pruning", icon: "✂️" },
    { title: "Stump Removal", icon: "🪓" },
    { title: "Tree Health Assessment", icon: "🔍" },
    { title: "Site Clearing", icon: "🏗️" },
    { title: "Hedge Maintenance", icon: "🌿" }
  ];

  return (
    <div>
      <button
        onClick={() => setDialogOpen(true)}
        className="bg-[#2B5329] text-white px-6 py-2.5 rounded-full text-base md:text-lg font-semibold w-fit hover:bg-[#1a331a] transition-colors"
      >
        {text}
      </button>
      
      <Modal 
        isOpen={isDialogOpen}
        onRequestClose={() => setDialogOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '550px',
            maxHeight: '90vh',
            overflow: 'auto',
            backgroundColor: 'white',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            border: 'none',
            borderRadius: '16px',
            padding: '0'
          }
        }}
      >
        <div className="relative">
          {/* Header */}
          <div className="bg-[#2B5329] text-white p-6 rounded-t-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Request a Quote</h2>
            <p className="text-center mt-2 text-gray-200 text-sm md:text-base">
              Get in touch for a free, no-obligation quote
            </p>
          </div>

          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Call Button Section */}
            <div className="flex flex-col items-center space-y-4 pb-6 border-b border-gray-200">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center bg-[#2B5329] text-white px-8 py-3 rounded-lg hover:bg-[#1a331a] transition-colors w-full md:w-auto text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us Now
              </a>
              <p className="text-gray-600 font-medium">- or fill out the form below -</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number *"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none transition-all"
                />
              </div>

              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none appearance-none bg-white text-gray-700 cursor-pointer transition-all"
                defaultValue=""
                required
              >
                <option value="" disabled>Select Service Needed *</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.icon} {service.title}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Additional Details About Your Project... *"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none resize-none transition-all"
                rows="4"
              />

              <button
                type="submit"
                className="w-full bg-[#2B5329] text-white px-6 py-4 rounded-lg hover:bg-[#1a331a] transition-all font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Free Quote
              </button>
            </form>
          </div>

          {/* Close Button */}
          <button 
            onClick={() => setDialogOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-200 cursor-pointer p-2 rounded-full hover:bg-[#1a331a] transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Modal>
    </div>
  );
}
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
       className="bg-[#2B5329] text-white px-8 py-3 rounded-full text-lg font-semibold w-fit hover:bg-[#1a331a] transition-colors">
          {text}
        </button>
      
      <Modal 
        isOpen={isDialogOpen}
        onRequestClose={() => setDialogOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1000
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '320px',
            maxWidth: '500px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: 'none'
          }
        }}
      >
        <div className="space-y-6 p-2">
          <h2 className="text-2xl font-bold text-[#2B5329] text-center">Request a Quote</h2>
          
          <div className="flex flex-col items-center space-y-3 pb-4 border-b">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center bg-[#2B5329] text-white px-8 py-3 rounded-lg hover:bg-[#1a331a] transition-colors w-full text-lg font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
            <p className="text-gray-600 font-medium">- or -</p>
           
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Address"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none"
              />
            </div>
            <div>
              <select 
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none appearance-none bg-white text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>Select Service Needed</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.icon} {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                placeholder="Additional Details About Your Project..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B5329] focus:border-[#2B5329] outline-none"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2B5329] text-white px-6 py-3 rounded-lg hover:bg-[#1a331a] transition-colors font-medium text-lg"
            >
              Get Free Quote
            </button>
          </form>

          <button 
            onClick={() => setDialogOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
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
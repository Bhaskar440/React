import React, { useState } from 'react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  // Function to scroll to the top/body section
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeItems = () => setModalContent(null);

  return (
    <footer className="bg-[#323232] text-[#d9d9d9] pt-20 pb-5 px-[8vw] flex flex-col gap-12 relative" id='footer'>
      
      {/* Modal Overlay */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black p-8 rounded-lg max-w-md w-full relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={closeItems} 
              className="absolute top-4 right-4 text-2xl font-bold hover:text-[#ff6347]"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#ff6347]">{modalContent.title}</h2>
            <p className="leading-relaxed">{modalContent.text}</p>
          </div>
        </div>
      )}

      <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-20">
        
        {/* Left Section */}
        <div className="flex flex-col items-start gap-5">
            <h2 className="text-[#ff6347] text-4xl font-bold">RefineFoods.</h2>
            <p>Bringing your favorite local cuisines right to your doorstep. Quality ingredients and lightning-fast delivery are our top priorities.</p>
        </div>

        {/* Center Section: Interactive Links */}
        <div className="flex flex-col items-start gap-5">
            <h2 className="text-white text-xl font-bold uppercase underline decoration-[#ff6347] underline-offset-8">Company</h2>
            <ul className="list-none space-y-2">
                <li onClick={scrollToHome} className="hover:text-[#ff6347] cursor-pointer transition">Home</li>
                <li 
                  onClick={() => setModalContent({
                    title: "About Us",
                    text: "Founded in 2026, RefineFoods has grown from a local startup to a leading food delivery platform. We partner with over 500+ restaurants to ensure you never run out of options."
                  })} 
                  className="hover:text-[#ff6347] cursor-pointer transition"
                >
                  About us
                </li>
                <li className="hover:text-[#ff6347] cursor-pointer transition">Delivery</li>
                <li 
                  onClick={() => setModalContent({
                    title: "Privacy Policy",
                    text: "Your data security is our priority. We use industry-standard encryption to protect your personal information and payment details. We never sell your data to third parties."
                  })} 
                  className="hover:text-[#ff6347] cursor-pointer transition"
                >
                  Privacy policy
                </li>
            </ul>
        </div>

        {/* Right Section: Contact */}
        <div className="flex flex-col items-start gap-5">
            <h2 className="text-white text-xl font-bold uppercase underline decoration-[#ff6347] underline-offset-8">Get In Touch</h2>
            <ul className="list-none space-y-2">
                <li className="hover:text-[#ff6347] cursor-pointer">+1-212-456-7890</li>
                <li className="hover:text-[#ff6347] cursor-pointer">contact@RefineFoods.com</li>
            </ul>
        </div>
      </div>

      <hr className="w-full h-[1px] bg-gray-600 border-none my-5" />
      <p className="text-center text-sm">Copyright 2026 © RefineFoods.com - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
import infront from "../assets/infront.jpg"; 
export default function Hero() {
  return (
    <section className="bg-orange-500 min-h-[400px] flex items-center px-8 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Text Content */}
        <div className="text-white space-y-4">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Delight <br /> in every bite!
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">
            Delivering happiness, <span className="underline decoration-2 underline-offset-4">on time.</span>
          </p>
          
          {/* Production Tip: Add a CTA button here later */}
          <button className="mt-6 bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
            Order Now
          </button>
        </div>

        {/* Right Side: Image/Illustration */}
        <div className="flex justify-center md:justify-end">
          <img 
            src={infront} 
            alt="Delicious Model" 
            className="w-full max-w-md drop-shadow-2xl animate-pulse-slow" 
          />
        </div>

      </div>
    </section>
  );
}
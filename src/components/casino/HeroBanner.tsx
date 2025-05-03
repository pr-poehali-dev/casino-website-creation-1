
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight animate-fade-in">
          <span className="block text-amber-500">其實</span>
          <span className="block text-white mt-2">PREMIUM CASINO</span>
        </h1>
        
        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-300">
          Погрузитесь в мир роскоши и захватывающих игр. Откройте для себя новые возможности выигрыша!
        </p>
        
        <div className="mt-10 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Button className="w-full flex items-center justify-center px-8 py-6 text-lg font-bold rounded-md text-black bg-amber-500 hover:bg-amber-600">
              Играть сейчас
            </Button>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button variant="outline" className="w-full flex items-center justify-center px-8 py-6 text-lg font-bold rounded-md text-amber-500 bg-transparent border border-amber-500 hover:bg-amber-950">
              Акции и бонусы
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroBanner;

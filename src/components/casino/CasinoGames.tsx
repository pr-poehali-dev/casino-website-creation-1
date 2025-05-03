
import { Card, CardContent } from "@/components/ui/card";

const CasinoGames = () => {
  const games = [
    { 
      name: "Золото Фортуны", 
      type: "Слот", 
      image: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Рояль Блэкджек", 
      type: "Карточная", 
      image: "https://images.unsplash.com/photo-1601556123240-fd2a229a0b3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Рулетка Премиум", 
      type: "Рулетка", 
      image: "https://images.unsplash.com/photo-1560722744-bed35e2d6188?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Покер Холдем", 
      type: "Покер", 
      image: "https://images.unsplash.com/photo-1541278107931-e006523892df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Дракон Удачи", 
      type: "Слот", 
      image: "https://images.unsplash.com/photo-1596838132742-717d917bae8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Баккара Люкс", 
      type: "Карточная", 
      image: "https://images.unsplash.com/photo-1596838387388-d22e0a4fa10a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-400">Популярные игры</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <Card key={index} className="bg-gray-800 border-amber-500 overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="relative h-48">
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-xl font-bold text-white">{game.name}</h3>
                <p className="text-amber-400">{game.type}</p>
              </div>
            </div>
            <CardContent className="p-4 flex justify-between items-center">
              <span className="text-green-400 font-semibold">96.5% RTP</span>
              <button className="px-4 py-2 bg-amber-500 text-black rounded font-bold hover:bg-amber-600 transition-colors">
                Играть
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <button className="px-6 py-3 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-950 transition-colors font-semibold">
          Все игры
        </button>
      </div>
    </section>
  );
};

export default CasinoGames;

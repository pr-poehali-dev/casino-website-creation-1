
import { Card, CardContent } from "@/components/ui/card";

const PromotionSection = () => {
  const promotions = [
    {
      title: "Приветственный бонус",
      description: "Получите 200% на первый депозит до 50,000₽ и 150 фриспинов",
      icon: "🎁"
    },
    {
      title: "Кэшбэк по пятницам",
      description: "Верните 15% от проигрышей каждую пятницу на свой счет",
      icon: "💰"
    },
    {
      title: "VIP программа",
      description: "Эксклюзивные бонусы, личный менеджер и особые привилегии",
      icon: "👑"
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-400">Акции и бонусы</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
          <Card key={index} className="bg-gray-800 border-amber-500 hover:bg-gray-750 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-4">{promo.icon}</span>
              <h3 className="text-xl font-bold text-amber-300 mb-2">{promo.title}</h3>
              <p className="text-gray-300">{promo.description}</p>
              <button className="mt-6 px-4 py-2 bg-transparent border border-amber-500 text-amber-500 rounded hover:bg-amber-950 transition-colors">
                Подробнее
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 mt-12 rounded-lg p-8 text-center">
        <span className="text-3xl mb-2 block">🎰</span>
        <h3 className="text-2xl font-bold mb-3">Турнир недели: Золотая Лихорадка</h3>
        <p className="mb-4 text-white">Призовой фонд 1,000,000₽! Участвуйте в еженедельном турнире и выигрывайте крупные призы.</p>
        <button className="px-6 py-3 bg-black text-amber-500 rounded-md hover:bg-gray-900 transition-colors font-semibold">
          Принять участие
        </button>
      </div>
    </section>
  );
};

export default PromotionSection;

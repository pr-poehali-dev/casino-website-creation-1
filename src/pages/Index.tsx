
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CasinoGames from "@/components/casino/CasinoGames";
import HeroBanner from "@/components/casino/HeroBanner";
import PromotionSection from "@/components/casino/PromotionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <HeroBanner />
      
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-400">Добро пожаловать в 其實 Casino</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-amber-500 p-6">
              <h3 className="text-2xl font-semibold mb-4 text-amber-300">О нас</h3>
              <p className="mb-4">
                Казино 其實 — это премиальное место для азартных развлечений с богатой коллекцией игр, 
                щедрыми бонусами и непревзойденным уровнем обслуживания.
              </p>
              <p>
                Мы предлагаем игрокам безопасную и увлекательную среду с 
                мгновенными выплатами и круглосуточной поддержкой.
              </p>
            </Card>
            <Card className="bg-gray-800 border-amber-500 p-6">
              <h3 className="text-2xl font-semibold mb-4 text-amber-300">Преимущества</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">🎰</span> 
                  <span>Более 1000 игровых автоматов</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💰</span> 
                  <span>Мгновенные выплаты 24/7</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎁</span> 
                  <span>Щедрые приветственные бонусы</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🏆</span> 
                  <span>VIP-программа лояльности</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔒</span> 
                  <span>Защищенные транзакции</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <CasinoGames />
        <PromotionSection />

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-400">Готовы начать?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Присоединяйтесь к тысячам игроков, которые уже оценили преимущества казино 其實. 
            Зарегистрируйтесь сейчас и получите эксклюзивный приветственный бонус!
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg">
              Регистрация
            </Button>
            <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-950 px-8 py-6 text-lg">
              Подробнее
            </Button>
          </div>
        </section>
      </div>

      <footer className="bg-black py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">© 2025 其實 Casino. Все права защищены.</p>
          <p className="text-sm">
            Азартные игры могут вызывать зависимость. Играйте ответственно.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

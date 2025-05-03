
import WheelOfFortune from "@/components/casino/WheelOfFortune";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LuckyWheel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-amber-500 hover:text-amber-400 flex items-center">
            <span className="mr-2">←</span> На главную
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-500">Колесо Удачи</h1>
          <div className="w-24"></div> {/* Пустой блок для выравнивания */}
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Испытайте свою удачу!</h2>
            <p className="text-gray-300 mb-6">
              Вращайте колесо и выигрывайте один из 20 ценных призов: деньги, фриспины, бонусы и многое другое!
              У вас есть одно бесплатное вращение каждый день.
            </p>
            <div className="inline-block bg-amber-900 text-amber-300 rounded-lg px-4 py-2 text-sm">
              Осталось вращений сегодня: <span className="font-bold">1</span>
            </div>
          </div>

          <WheelOfFortune />

          <div className="mt-10 bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Правила:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-amber-500">•</span>
                <span>Каждый игрок получает одно бесплатное вращение в день</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-amber-500">•</span>
                <span>Дополнительные вращения можно получить за депозиты или в рамках акций</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-amber-500">•</span>
                <span>Выигрыши зачисляются автоматически на ваш счет</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-amber-500">•</span>
                <span>Фриспины действительны в течение 7 дней после получения</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <span className="text-3xl mb-2 block">💰</span>
              <h3 className="text-xl font-bold mb-2 text-amber-400">Денежные призы</h3>
              <p className="text-gray-300">От 50₽ до 5000₽ мгновенно на ваш счет</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <span className="text-3xl mb-2 block">🎮</span>
              <h3 className="text-xl font-bold mb-2 text-amber-400">Фриспины</h3>
              <p className="text-gray-300">До 50 бесплатных вращений в популярных слотах</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <span className="text-3xl mb-2 block">🌟</span>
              <h3 className="text-xl font-bold mb-2 text-amber-400">Особые бонусы</h3>
              <p className="text-gray-300">VIP-статус, кэшбэк и другие эксклюзивные награды</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">© 2025 其實 Casino. Все права защищены.</p>
          <p className="text-sm">Азартные игры могут вызывать зависимость. Играйте ответственно.</p>
        </div>
      </footer>
    </div>
  );
};

export default LuckyWheel;

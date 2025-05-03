
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Prize {
  id: number;
  name: string;
  color: string;
  probability: number;
}

const prizes: Prize[] = [
  { id: 1, name: "1000₽", color: "#f59e0b", probability: 5 },
  { id: 2, name: "50 FS", color: "#b45309", probability: 10 },
  { id: 3, name: "500₽", color: "#f59e0b", probability: 8 },
  { id: 4, name: "20 FS", color: "#b45309", probability: 12 },
  { id: 5, name: "200₽", color: "#f59e0b", probability: 10 },
  { id: 6, name: "10 FS", color: "#b45309", probability: 15 },
  { id: 7, name: "VIP Статус", color: "#92400e", probability: 2 },
  { id: 8, name: "100₽", color: "#f59e0b", probability: 12 },
  { id: 9, name: "5 FS", color: "#b45309", probability: 18 },
  { id: 10, name: "5000₽", color: "#f59e0b", probability: 1 },
  { id: 11, name: "Кэшбэк 10%", color: "#92400e", probability: 5 },
  { id: 12, name: "50₽", color: "#f59e0b", probability: 15 },
  { id: 13, name: "15 FS", color: "#b45309", probability: 14 },
  { id: 14, name: "300₽", color: "#f59e0b", probability: 9 },
  { id: 15, name: "25 FS", color: "#b45309", probability: 11 },
  { id: 16, name: "150₽", color: "#f59e0b", probability: 11 },
  { id: 17, name: "Бонус 50%", color: "#92400e", probability: 3 },
  { id: 18, name: "75₽", color: "#f59e0b", probability: 13 },
  { id: 19, name: "30 FS", color: "#b45309", probability: 10 },
  { id: 20, name: "Джекпот", color: "#92400e", probability: 0.5 },
];

const WheelOfFortune = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<Prize | null>(null);
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spinTime = 5000; // Время вращения в мс

  useEffect(() => {
    drawWheel();
  }, []);

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Очистка холста
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 5;
    const anglePerPrize = (2 * Math.PI) / prizes.length;
    
    // Рисуем секции
    prizes.forEach((prize, index) => {
      const startAngle = index * anglePerPrize;
      const endAngle = (index + 1) * anglePerPrize;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = prize.color;
      ctx.fill();
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Добавляем текст
      ctx.save();
      ctx.translate(
        centerX + (radius * 0.75) * Math.cos(startAngle + anglePerPrize / 2),
        centerY + (radius * 0.75) * Math.sin(startAngle + anglePerPrize / 2)
      );
      ctx.rotate(startAngle + anglePerPrize / 2 + Math.PI / 2);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(prize.name, 0, 0);
      ctx.restore();
    });
    
    // Рисуем внешний круг
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#fbbf24";
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Рисуем центральный круг
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.strokeStyle = "#fbbf24";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setResult(null);
    
    // Расчет вероятности выигрыша
    const totalProbability = prizes.reduce((acc, prize) => acc + prize.probability, 0);
    let random = Math.random() * totalProbability;
    let selectedPrize: Prize | null = null;
    
    for (const prize of prizes) {
      random -= prize.probability;
      if (random <= 0) {
        selectedPrize = prize;
        break;
      }
    }
    
    if (!selectedPrize) {
      selectedPrize = prizes[0];
    }
    
    // Вычисляем угол для целевого приза
    const prizeIndex = prizes.findIndex(p => p.id === selectedPrize?.id);
    const anglePerPrize = (2 * Math.PI) / prizes.length;
    const destinationAngle = -(prizeIndex * anglePerPrize + anglePerPrize / 2);
    
    // Добавляем несколько полных оборотов + случайное смещение
    const fullRotations = 5 + Math.floor(Math.random() * 3);
    const targetRotation = fullRotations * 2 * Math.PI + destinationAngle;
    
    // Обновляем вращение
    const startTime = performance.now();
    const startRotation = rotation;
    
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / spinTime, 1);
      
      // Функция замедления
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const currentRotation = startRotation + targetRotation * easeOut(progress);
      
      setRotation(currentRotation);
      
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate(currentRotation);
          ctx.translate(-canvas.width / 2, -canvas.height / 2);
          drawWheel();
          ctx.restore();
        }
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        setResult(selectedPrize);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          width={400} 
          height={400} 
          className="mb-4"
        />
        
        {/* Указатель */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent border-t-amber-500" />
        </div>
      </div>
      
      <Button 
        onClick={spinWheel} 
        disabled={spinning}
        className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 text-lg mt-6"
      >
        {spinning ? "Вращается..." : "Вращать колесо"}
      </Button>
      
      {result && (
        <Card className="mt-8 p-6 bg-gray-800 border-amber-500 text-center">
          <h3 className="text-2xl font-bold text-amber-400 mb-2">Поздравляем!</h3>
          <p className="text-xl">Вы выиграли: <span className="font-bold text-white">{result.name}</span></p>
        </Card>
      )}
    </div>
  );
};

export default WheelOfFortune;

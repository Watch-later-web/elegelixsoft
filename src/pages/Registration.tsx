import Sidebar from "@/components/Sidebar";  
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ChevronUp, Users, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSettings } from "@/store/settings";

const Registration = () => {
  const { isCollapsed } = useSettings();

  const [count, setCount] = useState(1);
  const [country, setCountry] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const stats = [
    {
      title: "Активных аккаунтов",
      value: "5,097",
      change: "+33.45%",
      isPositive: true,
      icon: Users
    },
    {
      title: "Выполнено действий",
      value: "47,403",
      change: "-12.45%",
      isPositive: false,
      icon: Clock
    },
    {
      title: "Успешных регистраций",
      value: "25.81%",
      change: "+62.52%",
      isPositive: true,
      icon: CheckCircle2
    },
    {
      title: "Среднее время",
      value: "45.4 мин",
      change: "+4.48%",
      isPositive: true,
      icon: AlertCircle
    }
  ];

  const recentRegistrations = [
    { id: 1, country: "USA", time: "2025-02-22 12:30", account: "Account 1" },
    { id: 2, country: "Canada", time: "2025-02-22 13:00", account: "Account 2" },
    { id: 3, country: "Germany", time: "2025-02-22 13:30", account: "Account 3" },
    { id: 4, country: "Russia", time: "2025-02-22 14:00", account: "Account 4" },
  ];

  const handleSave = () => {
    if (!count || !country) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    setStatusMessage(`Данные успешно сохранены для ${country}`);
  };

  return (
    <div className="min-h-screen bg-[#0F1213]">
      <div className="flex">
        {/* Sidebar не должен ограничивать ширину */}
        <Sidebar />
        <main className={cn(
          "transition-all duration-300",
          isCollapsed ? "pl-20" : "pl-64", // Это работает для ширины основного контента
          "w-full" // Убедитесь, что main растягивается на всю ширину
        )}> 
          <div className="container max-w-full py-8 mx-auto">
            {/* Заголовок */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white">Авторегистрация</h1>
              <p className="mt-2 text-muted-foreground">
                Автоматическая регистрация новых аккаунтов
              </p>
            </div>

            {/* Панели статистики */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl border-none w-full">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#6C7275]">{stat.title}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    </div>
                    <div className={cn(
                      "p-2 rounded-lg",
                      stat.isPositive ? "bg-[#1C2722]/50" : "bg-[#2A2425]/50"
                    )}>
                      <stat.icon className={cn(
                        "w-5 h-5",
                        stat.isPositive ? "text-[#4ADE80]" : "text-[#F87171]"
                      )} />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <ChevronUp className={cn(
                      "w-3 h-3 mr-1",
                      stat.isPositive ? "text-[#4ADE80]" : "text-[#F87171]",
                      !stat.isPositive && "transform rotate-180"
                    )} />
                    <span className={cn(
                      "text-xs font-medium",
                      stat.isPositive ? "text-[#4ADE80]" : "text-[#F87171]"
                    )}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Регистрация и Статус */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {/* Форма регистрации (слева) */}
              <div className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl w-full">
                <h3 className="text-lg font-semibold text-white mb-4">Новая регистрация</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="count" className="text-xs text-[#9DA3A6] mb-1.5">Количество аккаунтов</Label>
                    <input
                      id="count"
                      type="number"
                      min="1"
                      value={count}
                      onChange={(e) => setCount(Number(e.target.value))}
                      placeholder="Введите количество"
                      className="w-full p-3 rounded-lg bg-[#1A1D1F] text-white border border-[#272B30]/50 focus:border-[#00A389] focus:ring-1 focus:ring-[#00A389] text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-xs text-[#9DA3A6] mb-1.5">Страна</Label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full p-3 rounded-lg bg-[#1A1D1F] text-white border border-[#272B30]/50 focus:border-[#00A389] focus:ring-1 focus:ring-[#00A389] text-sm"
                    >
                      <option value="">Выберите страну</option>
                      <option value="USA">США</option>
                      <option value="Canada">Канада</option>
                      <option value="Germany">Германия</option>
                      <option value="Russia">Россия</option>
                      <option value="Australia">Австралия</option>
                    </select>
                  </div>

                  <Button
                    className="w-full px-4 py-2 bg-gradient-to-br from-[#00A389] to-[#007A66] text-white rounded-lg hover:from-[#00B397] hover:to-[#008C74] transition-all duration-300 text-sm"
                    onClick={handleSave}
                  >
                    Начать регистрацию
                  </Button>
                </div>
              </div>

              {/* Статус выполнения (справа) */}
              <div className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl w-full">
                <h3 className="text-lg font-semibold text-white mb-4">Статус выполнения</h3>
                <div className="space-y-6">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-[#00A389]">
                          Процесс регистрации
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-[#00A389]">
                          75%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-[#1A1D1F]">
                      <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#00A389] rounded-full transition-all duration-500"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-[#4ADE80]">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      <span>Подготовка прокси</span>
                    </div>
                    <div className="flex items-center text-sm text-[#4ADE80]">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      <span>Генерация данных</span>
                    </div>
                    <div className="flex items-center text-sm text-white">
                      <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-[#00A389] border-t-transparent"></div>
                      <span>Регистрация аккаунтов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Блок "Последние регистрации" */}
            <div className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl mb-10">
              <h3 className="text-lg font-semibold text-white mb-4">Последние регистрации</h3>
              <div className="space-y-4">
                {recentRegistrations.map((registration, index) => (
                  <div key={index} className="flex justify-between text-white text-sm border-b border-[#272B30] py-2">
                    <span className="font-medium">{registration.account}</span>
                    <span>{registration.country}</span>
                    <span>{registration.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {statusMessage && (
              <div className="bg-[#2A2425] p-4 rounded-lg mt-4 text-sm text-white">
                {statusMessage}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Registration;

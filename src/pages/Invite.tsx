import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const Invite = () => {
  const { isCollapsed } = useSettings();

  return (
    <div className="min-h-screen bg-[#0F1213]">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8 mx-auto space-y-8">
          {/* Заголовок страницы */}
          <div>
            <h1 className="text-3xl font-bold text-white">Инвайт</h1>
            <p className="mt-2 text-muted-foreground">
              Массовое приглашение пользователей
            </p>
          </div>

          {/* Форма настроек инвайта */}
          <div className="max-w-2xl">
            <Card className="bg-[#1A1D1F] border border-[#272B30] rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Настройки инвайта</CardTitle>
                <CardDescription className="text-[#9DA3A6]">
                  Укажите параметры для рассылки приглашений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Ввод ссылки на группу/канал */}
                <div>
                  <Input
                    placeholder="Ссылка на группу/канал"
                    className="bg-[#1A1D1F] text-white border-[#272B30] focus:border-[#00A389] focus:ring-[#00A389] placeholder-[#9DA3A6]"
                  />
                </div>

                {/* Ввод базы пользователей */}
                <div>
                  <Textarea
                    placeholder="База пользователей (каждый с новой строки)"
                    className="bg-[#1A1D1F] text-white border-[#272B30] focus:border-[#00A389] focus:ring-[#00A389] placeholder-[#9DA3A6]"
                  />
                </div>

                {/* Параметры инвайта */}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="number"
                    min="0"
                    placeholder="Задержка (сек)"
                    className="bg-[#1A1D1F] text-white border-[#272B30] focus:border-[#00A389] focus:ring-[#00A389] placeholder-[#9DA3A6]"
                  />
                  <Input
                    type="number"
                    min="1"
                    placeholder="Кол-во аккаунтов"
                    className="bg-[#1A1D1F] text-white border-[#272B30] focus:border-[#00A389] focus:ring-[#00A389] placeholder-[#9DA3A6]"
                  />
                </div>

                {/* Кнопка запуска */}
                <Button 
                  className="w-full bg-gradient-to-br from-[#00A389] to-[#007A66] text-white hover:from-[#00B397] hover:to-[#008C74] transition-all duration-300 rounded-lg"
                >
                  Запустить инвайт
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invite;

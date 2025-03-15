import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSettings } from "@/store/settings";

const Audience = () => {
  const { isCollapsed } = useSettings();

  return (
    <div className="min-h-screen bg-[#0F1213]">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8 mx-auto space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold text-white">Сбор аудитории</h1>
            <p className="mt-2 text-muted-foreground">
              Сбор участников из групп и каналов
            </p>
          </div>

          {/* New Collection Form */}
          <div className="max-w-2xl">
            <Card className="bg-[#1A1D1F] border border-[#272B30] rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Новый сбор</CardTitle>
                <CardDescription className="text-[#9DA3A6]">
                  Укажите источники для сбора аудитории
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Textarea for Group/Channel Links */}
                <div>
                  <Textarea
                    placeholder="Введите ссылки на группы/каналы (каждая с новой строки)"
                    className="bg-[#1A1D1F] text-white border-[#272B30] focus:border-[#00A389] focus:ring-[#00A389] placeholder-[#9DA3A6]"
                  />
                </div>
                
                {/* Input for Parsing Depth */}
                <div>
                  <Input
                    type="number"
                    min="0"
                    placeholder="Глубина парсинга (дней)"
                    className="bg-[#1A1D1F] text-white border-[#272B30] focus:border-[#00A389] focus:ring-[#00A389] placeholder-[#9DA3A6]"
                  />
                </div>
                
                {/* Start Collection Button */}
                <Button 
                  className="w-full bg-gradient-to-br from-[#00A389] to-[#007A66] text-white hover:from-[#00B397] hover:to-[#008C74] transition-all duration-300 rounded-lg"
                >
                  Начать сбор
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Audience;

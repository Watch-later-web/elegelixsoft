
import Sidebar from "@/components/Sidebar";
import { Stats } from "@/components/Stats";
import { Chart } from "@/components/Chart";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { cn } from "@/lib/utils";
import { useSettings } from "@/store/settings";

const Index = () => {
  const { isCollapsed } = useSettings();

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Панель управления</h1>
            <p className="mt-2 text-muted-foreground">
              Обзор аккаунтов Telegram
            </p>
          </div>
          
          <div className="space-y-8">
            <Stats />
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Chart />
              </div>
              <div>
                <Projects />
              </div>
            </div>
            <About />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

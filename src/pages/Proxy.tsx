import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Server } from "lucide-react";
import { useSettings } from "@/store/settings";
import { cn } from "@/lib/utils";

const Proxy = () => {
  const { isCollapsed } = useSettings();
  const proxies = [
    { 
      ip: '192.168.1.1',
      port: '8080',
      type: 'SOCKS5',
      status: 'Активный',
      country: 'RU'
    },
    // Add more proxies here
  ];

  return (
    <div className="min-h-screen bg-[#0F1213]">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8 mx-auto space-y-8 max-w-full">
          {/* Заголовок */}
          <div>
            <h1 className="text-3xl font-bold text-white">Прокси</h1>
            <p className="mt-2 text-muted-foreground">Управление прокси серверами</p>
          </div>

          {/* Блок добавления прокси */}
          <div className="grid gap-8">
            <div className="bg-[#1A1D1F] p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Server className="text-[#00A389]" size={24} />
                <h3 className="text-2xl font-semibold text-white">Добавить прокси</h3>
              </div>
              <Textarea 
                className="bg-[#1A1D1F] text-white min-h-[150px] border border-[#272B30] rounded-2xl focus:ring-2 focus:ring-[#00A389]/50"
                placeholder="ip:port:login:password"
              />
              <Button className="w-full mt-4 bg-gradient-to-br from-[#00A389] to-[#007A66] text-white hover:from-[#00B397] hover:to-[#008C74] transition-all rounded-2xl">
                Добавить прокси
              </Button>
            </div>

            {/* Таблица прокси */}
            <div className="bg-[#1A1D1F] p-8 rounded-2xl shadow-xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left text-[#00A389]">IP</TableHead>
                    <TableHead className="text-left text-[#00A389]">Порт</TableHead>
                    <TableHead className="text-left text-[#00A389]">Тип</TableHead>
                    <TableHead className="text-left text-[#00A389]">Статус</TableHead>
                    <TableHead className="text-left text-[#00A389]">Страна</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {proxies.map((proxy) => (
                    <TableRow key={proxy.ip}>
                      <TableCell className="text-white">{proxy.ip}</TableCell>
                      <TableCell className="text-white">{proxy.port}</TableCell>
                      <TableCell className="text-white">{proxy.type}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-[#4ADE80]">
                          {proxy.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-white">{proxy.country}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Proxy;

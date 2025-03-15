import Sidebar from "@/components/Sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { Mail, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSettings } from "@/store/settings";

const data = [
  { day: "Пн", value: 120 },
  { day: "Вт", value: 180 },
  { day: "Ср", value: 250 },
  { day: "Чт", value: 300 },
  { day: "Пт", value: 270 },
  { day: "Сб", value: 350 },
  { day: "Вс", value: 220 },
];

const accounts = [
  { phone: "+7 999 123-45-67", status: "Активный", lastActive: "2024-02-20", proxy: "Proxy #1", messages: 156 },
  { phone: "+7 999 234-56-78", status: "Активный", lastActive: "2024-02-19", proxy: "Proxy #2", messages: 230 },
  { phone: "+7 999 345-67-89", status: "Заблокирован", lastActive: "2024-02-18", proxy: "Proxy #3", messages: 128 },
  { phone: "+7 999 456-78-90", status: "Активный", lastActive: "2024-02-17", proxy: "Proxy #4", messages: 98 },
  { phone: "+7 999 567-89-01", status: "Заблокирован", lastActive: "2024-02-16", proxy: "Proxy #5", messages: 45 },
  { phone: "+7 999 678-90-12", status: "Активный", lastActive: "2024-02-15", proxy: "Proxy #6", messages: 89 },
  { phone: "+7 999 789-01-23", status: "Заблокирован", lastActive: "2024-02-14", proxy: "Proxy #7", messages: 176 },
  { phone: "+7 999 890-12-34", status: "Активный", lastActive: "2024-02-13", proxy: "Proxy #8", messages: 215 },
  { phone: "+7 999 901-23-45", status: "Заблокирован", lastActive: "2024-02-12", proxy: "Proxy #9", messages: 210 },
  { phone: "+7 999 012-34-56", status: "Активный", lastActive: "2024-02-11", proxy: "Proxy #10", messages: 342 },
  { phone: "+7 999 123-45-68", status: "Заблокирован", lastActive: "2024-02-10", proxy: "Proxy #11", messages: 120 },
  { phone: "+7 999 234-56-79", status: "Активный", lastActive: "2024-02-09", proxy: "Proxy #12", messages: 98 },
];

const Accounts = () => {
  const { isCollapsed } = useSettings();
  
  return (
    <div className="min-h-screen bg-[#0F1213]">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8 mx-auto">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#EFEFEF]">Панель аккаунтов</h1>
            <p className="mt-2 text-[#9DA3A6]">
              Управляйте аккаунтами Telegram с максимальным удобством и эффективностью.
            </p>
          </div>

          {/* Панели статистики */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl border-none">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#9DA3A6] text-sm">Без спамблока</p>
                  <h3 className="text-2xl font-bold text-[#EFEFEF] mt-1">128</h3>
                </div>
                <Shield className="text-[#00A389]" size={24} />
              </div>
            </Card>

            <Card className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl border-none">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#9DA3A6] text-sm">Временный спамблок</p>
                  <h3 className="text-2xl font-bold text-[#EFEFEF] mt-1">86</h3>
                </div>
                <Mail className="text-[#007A66]" size={24} />
              </div>
            </Card>

            <Card className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl border-none">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#9DA3A6] text-sm">Вечный спамблок</p>
                  <h3 className="text-2xl font-bold text-[#EFEFEF] mt-1">42</h3>
                </div>
                <Shield className="text-[#FF0000]" size={24} />
              </div>
            </Card>
          </div>
          
          {/* Основная таблица с аккаунтами */}
          <div className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl transition-all duration-300 ease-in-out max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent mb-10">
            <Table className="text-sm">
              <TableHeader className="text-[#9DA3A6]">
                <TableRow>
                  <TableHead className="px-6 py-3 text-left">Телефон</TableHead>
                  <TableHead className="px-6 py-3 text-left">Статус</TableHead>
                  <TableHead className="px-6 py-3 text-left">Последняя активность</TableHead>
                  <TableHead className="px-6 py-3 text-left">Прокси</TableHead>
                  <TableHead className="px-6 py-3 text-left">Сообщений</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map((account) => (
                  <TableRow key={account.phone} className="hover:bg-[#272B30] transition-all duration-300 ease-in-out">
                    <TableCell className="px-6 py-4">{account.phone}</TableCell>
                    <TableCell className="px-6 py-4">
                      <Badge
                        variant="secondary"
                        className={account.status === "Заблокирован" ? "bg-[#FF0000] text-white shadow-md" : "bg-[#00A389] text-white shadow-md"}
                      >
                        {account.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4">{account.lastActive}</TableCell>
                    <TableCell className="px-6 py-4">{account.proxy}</TableCell>
                    <TableCell className="px-6 py-4">{account.messages}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* График активности */}
          <div className="bg-[#1A1D1F] p-6 rounded-2xl shadow-xl">
            <h3 className="mb-6 text-xl font-semibold text-[#EFEFEF]">Активность аккаунтов</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00A389" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00A389" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fill: "#9DA3A6", dy: 10 }} />
                <YAxis tick={{ fill: "#9DA3A6" }} />
                <Tooltip contentStyle={{ backgroundColor: "#1A1D1F", borderRadius: "8px", color: "#FFFFFF" }} />
                <Area type="monotone" dataKey="value" stroke="#00A389" fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accounts;

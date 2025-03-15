import { Routes, Route } from 'react-router-dom';
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { useSettings } from '@/store/settings';

const DeletedAccounts = () => {
  const accounts = [
    { 
      phone: '+7 999 123-45-67',
      type: 'Невалид',
      date: '2024-02-20',
      reason: 'По запросу'
    },
    // Можно добавить больше аккаунтов
  ];

  const handleCheckValidity = () => {
    alert("Проверка валидности аккаунтов...");
    // Здесь можно добавить реальную логику для проверки
  };

  return (
    <div className="bg-[#1A1D1F] border border-[#272B30] rounded-xl shadow-lg p-6 space-y-4">
      {/* Таблица */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Телефон</TableHead>
            <TableHead className="text-white">Тип</TableHead>
            <TableHead className="text-white">Дата</TableHead>
            <TableHead className="text-white">Причина</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.phone}>
              <TableCell className="text-[#9DA3A6]">{account.phone}</TableCell>
              <TableCell>
                <Badge className="bg-red-500 text-white">{account.type}</Badge>
              </TableCell>
              <TableCell className="text-[#9DA3A6]">{account.date}</TableCell>
              <TableCell className="text-[#9DA3A6]">{account.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Кнопка проверки валидности (теперь внизу) */}
      <Button 
        className="w-full bg-gradient-to-br from-[#00A389] to-[#007A66] text-white hover:from-[#00B397] hover:to-[#008C74] transition-all duration-300 rounded-lg mt-4"
        onClick={handleCheckValidity}
      >
        Проверить валидность
      </Button>
    </div>
  );
};

const Archive = () => {
  const { isCollapsed } = useSettings();

  return (
    <div className="min-h-screen bg-[#0F1213]">
      <Sidebar />
      
      <main className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8 space-y-8">
          
          {/* Заголовок */}
          <div>
            <h1 className="text-3xl font-bold text-white">Удаленные аккаунты</h1>
            <p className="mt-2 text-[#9DA3A6]">Управление удаленными аккаунтами</p>
          </div>

          {/* Таблица с аккаунтами */}
          <Routes>
            <Route path="/" element={<DeletedAccounts />} />
          </Routes>

        </div>
      </main>
    </div>
  );
};

export default Archive;

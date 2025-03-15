import { FC, useState } from 'react';
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Key } from "lucide-react";
import { cn } from '@/lib/utils';
import { useSettings } from '@/store/settings';

export const eel = window.eel;
eel.set_host('ws://localhost:8888');

const SmsApi: FC = () => {
  const { isCollapsed } = useSettings();

  const [smsStatus, setSmsStatus] = useState<string>('Не подключено');
  const [apiKey, setApiKey] = useState<string>('');
  const [recentConnections, setRecentConnections] = useState<string[]>([]);
  const [isApiKeySaved, setIsApiKeySaved] = useState<boolean>(false);
  const [isConnectButtonDisabled, setIsConnectButtonDisabled] = useState<boolean>(false);

  // Подключение к API
  const handleConnect = () => {
    if (!apiKey) {
      alert('Пожалуйста, введите API ключ');
      return;
    }

    setSmsStatus('Подключено');
    setIsConnectButtonDisabled(true);
    setRecentConnections((prev) => [`Подключение: ${new Date().toLocaleString()}`, ...prev]);
  };

  // Отключение от API
  const handleDisconnect = () => {
    setSmsStatus('Не подключено');
    setIsApiKeySaved(false);
    setApiKey('');
    setIsConnectButtonDisabled(false);
  };

  // Обновление API ключа
  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  // Сохранение API ключа
  const handleSaveApiKey = () => {
    if (!apiKey) {
      alert('Введите API ключ');
      return;
    }
    setIsApiKeySaved(true);
    eel.setup(apiKey);
  };

  return (
    <div className="min-h-screen bg-[#0F1213]">
      <Sidebar />

      <main className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <div className="container py-8 mx-auto space-y-8">
          {/* Заголовок */}
          <div>
            <h1 className="text-3xl font-bold text-white">SMS API</h1>
            <p className="mt-2 text-muted-foreground">
              Управляйте подключением к SMS API.
            </p>
          </div>

          {/* Форма подключения API */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#1A1D1F] border border-[#272B30] rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-[#00A389]" size={24} />
                <h3 className="text-xl font-semibold text-white">Добавить API ключ</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-[#9DA3A6] mb-2 block">Сервис</label>
                  <select className="w-full bg-[#1A1D1F] text-white border border-[#272B30] rounded-xl p-2 focus:border-[#00A389] focus:ring-[#00A389]">
                    <option value="5sim">5SIM</option>
                    <option value="sms-activate">SMS Activate</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-[#9DA3A6] mb-2 block">API Ключ</label>
                  <Input
                    className="bg-[#1A1D1F] text-white border border-[#272B30] rounded-xl p-3 focus:border-[#00A389] focus:ring-[#00A389] placeholder-[#9DA3A6]"
                    placeholder="Введите API ключ"
                    value={apiKey}
                    onChange={handleApiKeyChange}
                  />
                </div>

                {!isApiKeySaved ? (
                  <Button
                    className="w-full bg-gradient-to-br from-[#00A389] to-[#007A66] text-white hover:from-[#00B397] hover:to-[#008C74] transition-all duration-300 rounded-lg"
                    onClick={handleSaveApiKey}
                  >
                    Сохранить API ключ
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-gradient-to-br from-[#00A389] to-[#007A66] text-white hover:from-[#00B397] hover:to-[#008C74] transition-all duration-300 rounded-lg"
                    onClick={handleConnect}
                    disabled={isConnectButtonDisabled}
                  >
                    Подключить API
                  </Button>
                )}
              </div>
            </Card>

            {/* Информация о подключении */}
            <Card className="bg-[#1A1D1F] border border-[#272B30] rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Key className="text-[#00A389]" size={24} />
                <h3 className="text-xl font-semibold text-white">Активные ключи</h3>
              </div>
              <p className="text-lg text-[#9DA3A6] mb-4">Статус соединения: {smsStatus}</p>

              {smsStatus === 'Подключено' ? (
                <Button
                  onClick={handleDisconnect}
                  className="w-full bg-red-500 text-white hover:bg-red-400 transition-all duration-300 rounded-lg"
                >
                  Отключить API
                </Button>
              ) : null}
            </Card>
          </div>

          {/* Последние подключения */}
          <div className="bg-[#1A1D1F] border border-[#272B30] rounded-xl shadow-lg p-6 space-y-6">
            <h3 className="text-xl font-semibold text-white">Последние подключения</h3>
            {recentConnections.length > 0 ? (
              <ul className="space-y-2">
                {recentConnections.map((connection, index) => (
                  <li key={index} className="text-[#9DA3A6]">
                    {connection}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#9DA3A6]">Нет подключений.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmsApi;

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSettings } from "@/store/settings";
import {
  Camera, Trash2, UserCog, Lock, Eye, MessageSquare, Settings2, Users, ShieldCheck,
  RefreshCw, UserPlus, Image as ImageIcon
} from "lucide-react";

const Actions = () => {
  const { isCollapsed } = useSettings();

  return (
    <div className="min-h-screen bg-[#0F1213] text-white flex">
      <Sidebar />
      <main className={cn(
        "transition-all duration-300 flex-1 p-8 ml-8",
        isCollapsed ? "pl-20" : "pl-64"
      )}>
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Управление аккаунтами</h1>
          <p className="text-[#9DA3A6] mt-2">Настройки и контроль учетных записей</p>
        </header>

        <div className="space-y-8">
          {sections.map(({ title, icon: Icon, actions }, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-4">
                <Icon className="h-6 w-6 text-[#00A389]" />
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {actions.map(({ label, icon: ActionIcon }, actionIndex) => (
                  <ActionButton key={actionIndex} icon={ActionIcon} label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const ActionButton = ({ icon: Icon, label }) => (
  <Button 
    variant="ghost" 
    className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#1A1D1F] hover:bg-[#272B30] transition-all"
  >
    <Icon className="h-5 w-5 text-[#00A389]" />
    <span className="text-white">{label}</span>
  </Button>
);

const sections = [
  {
    title: "Настройки аккаунта",
    icon: Settings2,
    actions: [
      { label: "Установить фото", icon: Camera },
      { label: "Удалить фото", icon: Trash2 },
      { label: "Обновить фото", icon: RefreshCw },
      { label: "Установить имя", icon: UserCog },
      { label: "Установить юзернейм", icon: UserPlus },
      { label: "Удалить юзернейм", icon: UserPlus },
      { label: "Установить пол", icon: UserPlus },
      { label: "Установить bio", icon: ImageIcon },
      { label: "Удалить bio", icon: UserPlus }
    ]
  },
  {
    title: "Приватность",
    icon: Users,
    actions: [
      { label: "Открыть инвайт", icon: ShieldCheck },
      { label: "Закрыть инвайт", icon: Lock },
      { label: "Открыть номер", icon: Lock },
      { label: "Скрыть номер", icon: Lock },
      { label: "Добавить роль", icon: Lock },
      { label: "Удалить роль", icon: Lock }
    ]
  },
  {
    title: "Безопасность",
    icon: ShieldCheck,
    actions: [
      { label: "Установить 2-FA", icon: Lock },
      { label: "Удалить 2-FA", icon: Lock },
      { label: "Получить код авторизации", icon: Eye },
      { label: "Закрыть сторонние сессии", icon: MessageSquare },
      { label: "Поддерживать онлайн", icon: MessageSquare }
    ]
  },
  {
    title: "Проверка",
    icon: Users,
    actions: [
      { label: "Проверить на бан", icon: ShieldCheck },
      { label: "Проверить на ограничение", icon: Lock }
    ]
  }
];


export default Actions;
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home, Users, UserPlus, Mail, Network, Archive, Settings, UserCog, UserCheck, MessagesSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSettings } from '@/store/settings';
import { Button } from './ui/button';
import SettingsComponent from '@/components/Settings';  // Импортируем компонент настроек

const Sidebar = () => {
  const location = useLocation();
  const { isCollapsed, toggleSidebar } = useSettings();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navigation = [
    { 
      title: 'Основное',
      items: [
        { name: 'Главная', icon: Home, path: '/' },
        { name: 'Панель аккаунтов', icon: Users, path: '/accounts' },
        { name: 'Действие с аккаунтом', icon: UserCog, path: '/actions' },
      ]
    },
    {
      title: 'Управление',
      items: [
        { name: 'Авторегистрация', icon: UserPlus, path: '/registration' },
        { name: 'Сбор аудитории', icon: UserCheck, path: '/audience' },
        { name: 'Инвайт', icon: MessagesSquare, path: '/invite' },
      ]
    },
    {
      title: 'Инструменты',
      items: [
        { name: 'Отправка СМС', icon: Mail, path: '/sms' },
        { name: 'Прокси', icon: Network, path: '/proxy' },
        { name: 'SMS API', icon: Mail, path: '/api' },
        { name: 'Архив', icon: Archive, path: '/archive' },
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen bg-[#1A1D1F] transition-[width,margin] duration-300 ease-in-out w-[260px]">
      {/* Основная часть контейнера */}
      <div className="h-16 bg-[#222527] flex items-center cursor-pointer px-4 relative" onClick={toggleSidebar}>
        {/* Логотип */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A389] to-[#007A66] flex items-center justify-center shadow-[0_0_15px_rgba(0,163,137,0.3)]">
          {/* Логотип */}
        </div>

        <div className="absolute left-16">
          <span className="font-semibold text-[#EFEFEF]">Elegelix SoftWare</span>
        </div>
      </div>

      {/* Блок с элементами навигации */}
      <div className="p-4 space-y-6">
        {navigation.map((group) => (
          <div key={group.title} className="space-y-2">
            <div className="text-xs font-medium text-[#6C7275] uppercase tracking-wider px-2">
              {group.title}
            </div>
            {group.items.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'flex items-center h-10 px-3 rounded-lg group transition-all duration-300 ease-in-out',
                  location.pathname === item.path 
                    ? 'bg-gradient-to-br from-[#00A389] to-[#007A66] text-white shadow-[0_0_15px_rgba(0,163,137,0.3)]' 
                    : 'text-[#9DA3A6] hover:bg-[#272B30] hover:text-white',
                  isCollapsed && location.pathname === item.path ? 'w-[46px]' : 'w-full',
                  'transform translate-x-[-2px]'
                )}
              >
                <item.icon className={cn(
                  'h-5 w-5 flex-shrink-0',
                  'transition-all duration-300 ease-in-out',
                  isCollapsed ? 'mr-0' : 'mr-3',
                  location.pathname === item.path ? 'text-white' : 'text-[#9DA3A6] group-hover:text-white'
                )} />
                <span
                  className={cn(
                    'whitespace-nowrap transition-all duration-300 ease-in-out transform',
                    isCollapsed ? 'opacity-0 -translate-x-6' : 'opacity-100 translate-x-0'
                  )}
                >
                  {item.name}
                </span>
                {!isCollapsed && item.name === 'Инвайт' && (
                  <span className="ml-auto bg-[#272B30] text-[#9DA3A6] text-xs font-medium px-2 py-1 rounded">
                    Новый
                  </span>
                )}
              </Link>
            ))} 
          </div>
        ))}
      </div>

      {/* Блок с кнопкой "Настройки" */}
      <div className="absolute bottom-0 w-full bg-[#1A1D1F] h-16 flex items-center">
        <Button
          className="flex items-center w-full h-full px-3 rounded-none group transition-all duration-300 ease-in-out bg-[#222527] hover:bg-[#3A3F45]"
          onClick={() => setSettingsOpen(true)}
        >
          <Settings className="h-5 w-5 flex-shrink-0 text-[#ffff]" />
          <span className="whitespace-nowrap transform transition-all duration-300 ease-in-out">Настройки</span>
        </Button>
      </div>

      {/* Модальное окно с настройками */}
      <SettingsComponent open={settingsOpen} onOpenChange={setSettingsOpen} />
    </aside>
  );
};

export default Sidebar;

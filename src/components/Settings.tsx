import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Settings: React.FC<SettingsModalProps> = ({ open, onOpenChange }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("ru");
  const [volume, setVolume] = useState(50);
  const [savePath, setSavePath] = useState("C:/Users/Username/Documents");
  const [theme, setTheme] = useState("default");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1A1D1F] border border-[#272B30] rounded-2xl shadow-xl p-6 w-[400px] space-y-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Настройки</DialogTitle>
        </DialogHeader>

        {/* Выбор языка */}
        <div className="space-y-2">
          <Label className="text-gray-300">Язык интерфейса</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="bg-[#272B30] text-white border border-gray-500 border-opacity-30 rounded-xl p-2">
              <SelectValue placeholder="Выберите язык" />
            </SelectTrigger>
            <SelectContent className="bg-[#272B30] text-white border border-gray-500 border-opacity-30 rounded-xl">
              <SelectItem value="ru">Русский</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Путь сохранения файлов */}
        <div className="space-y-2">
          <Label className="text-gray-300">Путь сохранения файлов</Label>
          <Input
            className="bg-[#272B30] text-white border border-gray-500 border-opacity-30 rounded-xl p-3"
            value={savePath}
            onChange={(e) => setSavePath(e.target.value)}
          />
        </div>

        {/* Выбор темы */}
        <div className="space-y-2">
          <Label className="text-gray-300">Тема</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="bg-[#272B30] text-white border border-gray-500 border-opacity-30 rounded-xl p-2">
              <SelectValue placeholder="Выберите тему" />
            </SelectTrigger>
            <SelectContent className="bg-[#272B30] text-white border border-gray-500 border-opacity-30 rounded-xl">
              <SelectItem value="default">Стандартная</SelectItem>
              <SelectItem value="dark">Темная</SelectItem>
              <SelectItem value="light">Светлая</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Уведомления */}
        <div className="flex items-center justify-between pt-4">
          <Label className="text-gray-300">Уведомления</Label>
          <div
            className={cn(
              "relative w-14 h-8 rounded-full cursor-pointer transition-all flex items-center p-1",
              notifications ? "bg-green-500" : "bg-red-500"
            )}
            onClick={() => setNotifications(!notifications)}
          >
            <div
              className={cn(
                "w-6 h-6 bg-white rounded-full shadow-md transform transition-all",
                notifications ? "translate-x-6" : "translate-x-0"
              )}
            />
          </div>
        </div>

        {/* Кнопки управления */}
        <div className="space-y-4">
          <Button
            className={cn(
              "w-full text-[#9DA3A6] bg-[#272B30] hover:bg-[#3A3F45] rounded-xl shadow-lg transition-all",
              "group"
            )}
            onClick={() => {
              setDarkMode(false);
              setNotifications(true);
              setLanguage("ru");
              setVolume(50);
              setSavePath("C:/Users/Username/Documents");
              setTheme("default");
            }}
          >
            Сбросить
          </Button>
          <Button
            className={cn(
              "w-full bg-gradient-to-br from-[#00A389] to-[#007A66] text-white shadow-[0_0_15px_rgba(0,163,137,0.3)] hover:bg-[#007A66] rounded-xl transition-all"
            )}
            onClick={() => onOpenChange(false)}
          >
            Сохранить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
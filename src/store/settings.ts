
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark';
  language: 'ru' | 'en';
  licenseKey: string;
  dataDirectory: string;
  isCollapsed: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'ru' | 'en') => void;
  setLicenseKey: (key: string) => void;
  setDataDirectory: (path: string) => void;
  toggleSidebar: () => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'dark',
      language: 'ru',
      licenseKey: '',
      dataDirectory: '',
      isCollapsed: false,
      setTheme: (theme) => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        set({ theme });
      },
      setLanguage: (language) => {
        document.documentElement.setAttribute('lang', language);
        set({ language });
      },
      setLicenseKey: (licenseKey) => set({ licenseKey }),
      setDataDirectory: (dataDirectory) => set({ dataDirectory }),
      toggleSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
    }),
    {
      name: 'settings-storage',
    }
  )
);
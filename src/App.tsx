
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
// import { useSettings } from "@/store/settings";
import Index from "./pages/Index";
import Accounts from "./pages/Accounts";
import AccountActions from "./pages/AccountActions";
import Registration from "./pages/Registration";
import Audience from "./pages/Audience";
import Invite from "./pages/Invite";
import SMS from "./pages/SMS";
import Proxy from "./pages/Proxy";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";
import SmsApi from "./pages/API";
import Settings from '@/components/Settings';

const queryClient = new QueryClient();

const App = () => {
  // const { theme, language, setTheme, setLanguage } = useSettings();

  // useEffect(() => {
  //   // Initialize theme
  //   document.documentElement.classList.remove('light', 'dark');
  //   document.documentElement.classList.add(theme);
    
  //   // Initialize language
  //   document.documentElement.setAttribute('lang', language);
    
  //   // Apply initial settings
  //   setTheme(theme);
  //   setLanguage(language);
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/actions" element={<AccountActions />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/sms" element={<SMS />} />
            <Route path="/proxy" element={<Proxy />} />
            <Route path="/api" element={<SmsApi />} />
            <Route path="/archive/*" element={<Archive />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
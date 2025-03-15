import { ArrowUpRight } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { label: 'Всего аккаунтов', value: '128', change: '+12%' },
    { label: 'Активные', value: '86', change: '+5%' },
    { label: 'В спаме', value: '23', change: '+8%' },
    { label: 'Заблокированные', value: '19', change: '+2%' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="animate-fadeIn bg-[#1A1D1F] stat-card">
          <div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
          </div>
          <div className="flex items-center gap-1 text-teal-400">
            <ArrowUpRight className="h-4 w-4" />
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};

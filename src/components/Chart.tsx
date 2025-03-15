import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 2000 },
  { month: 'Mar', value: 1500 },
  { month: 'Apr', value: 3000 },
  { month: 'May', value: 2500 },
  { month: 'Jun', value: 4000 },
  { month: 'Jul', value: 1000 },
  { month: 'Aug', value: 2000 },
  { month: 'Sep', value: 1500 },
  { month: 'Oct', value: 3000 },
  { month: 'Nov', value: 2500 },
  { month: 'Dec', value: 4000 },
];

export const Chart = () => {
  return (
    <div className="card h-[300px] bg-[#1A1D1F] text-white">
      <h3 className="mb-6 text-xl font-semibold text-[#EFEFEF]">Зарегистрировано</h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00A389" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00A389" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={true} // Добавление оси
            tickLine={true} // Добавление меток на оси
            tick={{ fill: '#9DA3A6', dy: 10 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            axisLine={true} // Добавление оси
            tickLine={true} // Добавление меток на оси
            tick={{ fill: '#9DA3A6' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A1D1F',
              borderRadius: '8px',
              color: '#FFFFFF',
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00A389"
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

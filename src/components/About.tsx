export const About = () => {
  return (
    <div className="card p-10 rounded-2xl shadow-xl bg-[#1A1D1F] text-white">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-white">О нашем проекте</h3>
        <p className="mt-4 text-lg text-gray-300">
          Мы создаём решения для автоматизации и управления Telegram-аккаунтами, делая процесс простым,
          безопасным и быстрым. В нашем проекте мы фокусируемся на надежности, скорости и безопасности.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-full max-w-3xl grid grid-cols-2 gap-6">
          <div className="bg-[#131718] p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-semibold text-white mb-3">Инновации</h4>
            <p className="text-gray-400">
              Мы постоянно внедряем новейшие технологии для улучшения процессов.
            </p>
          </div>
          <div className="bg-[#131718] p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-semibold text-white mb-3">Безопасность</h4>
            <p className="text-gray-400">
              Надежная защита данных — наш приоритет. Ваши данные всегда под охраной.
            </p>
          </div>
          <div className="bg-[#131718] p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-semibold text-white mb-3">Скорость</h4>
            <p className="text-gray-400">
              Мы стремимся сделать всё быстрее, чтобы вы не теряли время.
            </p>
          </div>
          <div className="bg-[#131718] p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-semibold text-white mb-3">Поддержка</h4>
            <p className="text-gray-400">
              Наши специалисты всегда готовы помочь вам в любое время.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h4 className="text-2xl font-semibold text-gray-100 mb-4">Мы всегда на связи!</h4>
        <p className="text-gray-300 mb-6">Присоединяйтесь к нам в социальных сетях и оставайтесь на связи!</p>
        <div className="flex justify-center gap-8 text-lg">
          <a href="https://vk.com/yourvk" className="text-teal-400 hover:text-teal-500 transition-colors">
            <span className="font-bold">VK</span>
          </a>
          <a href="https://t.me/yourtelegram" className="text-teal-400 hover:text-teal-500 transition-colors">
            <span className="font-bold">Telegram</span>
          </a>
          <a href="https://discord.com/yourdiscord" className="text-teal-400 hover:text-teal-500 transition-colors">
            <span className="font-bold">Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

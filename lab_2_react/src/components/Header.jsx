// Тепер компонент приймає props з App.jsx
const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="max-w-4xl mx-auto mt-12 mb-8 p-10 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-xl text-center md:text-left text-white relative overflow-hidden">
      
      {/* Декоративний елемент фону (світіння) */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-screen filter blur-[50px] opacity-40"></div>
      
      {/* Кнопка перемикання теми (додана сюди, з високим z-index) */}
      <button 
        onClick={toggleTheme}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-2xl md:text-3xl hover:scale-110 transition-all bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm border border-white/5"
        title="Змінити тему"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 pr-12 md:pr-0">
          Vladyslav Dovbniak 💻
        </h1>
        <p className="text-blue-300 font-medium text-lg mb-6 tracking-wide">
          Place of birth: Ukraine <span className="mx-2 text-slate-500">|</span> Nationality: Ukrainian
        </p>
        
        {/* Контакти з використанням Flexbox для адаптивності */}
        <ul className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 text-sm md:text-base text-slate-300 justify-center md:justify-start">
          
          <li className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase">Phone:</span> 
            <span className="hover:text-white transition-colors cursor-default">(+380) 669052102</span>
          </li>
          
          <li className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase">Email:</span> 
            <a href="mailto:vladdyslavvv@gmail.com" className="hover:text-white hover:underline underline-offset-4 transition-all">
              vladdyslavvv@gmail.com
            </a>
          </li>
          
          <li className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase">Telegram:</span> 
            <a href="https://t.me/Vladdyslavvv" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline underline-offset-4 transition-all">
              @Vladdyslavvv
            </a>
          </li>
          
          <li className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase">LinkedIn:</span> 
            <a href="https://www.linkedin.com/in/vladyslav-dovbniak-0b2a6b23a/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline underline-offset-4 transition-all">
              Vladyslav Dovbniak
            </a>
          </li>
          
        </ul>
      </div>
    </header>
  );
};

export default Header;
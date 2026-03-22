const Education = () => {
  return (
    <section 
      id="education" 
      className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-slate-100"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-8 tracking-wide uppercase border-b-4 border-blue-500 inline-block pb-1">
        Education and Training
      </h2>
      
      {/* Контейнер для таймлайну з лінією зліва */}
      <ul className="border-l-2 border-slate-200 ml-3 space-y-8">
        
        {/* Елемент 1 */}
        <li className="relative pl-8 group">
          {/* Крапка на лінії таймлайну */}
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white group-hover:bg-blue-500 transition-colors duration-300"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800">
              CYBERSECURITY BACHELOR'S DEGREE <span className="text-blue-600 font-medium block sm:inline">- Lviv Polytechnic National University</span>
            </h3>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
              01/09/2023 - 30/06/2027
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-2 italic">Lviv, Ukraine</p>
          <p className="text-sm text-slate-600">
            Website: <a href="https://lpnu.ua/" className="text-blue-500 hover:text-blue-700 hover:underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">https://lpnu.ua/</a>
          </p>
        </li>

        {/* Елемент 2 */}
        <li className="relative pl-8 group">
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white group-hover:bg-blue-500 transition-colors duration-300"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800">
              ADVANCING IN CYBERSECURITY <span className="text-blue-600 font-medium block sm:inline">- IBM SkillsBuild</span>
            </h3>
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
              30/04/2025 - CURRENT
            </span>
          </div>
          <p className="text-sm text-slate-600 mt-2 mb-2 leading-relaxed">
            Ongoing advanced training program covering critical cybersecurity concepts including security operations, risk management, ethical hacking fundamentals, endpoint protection, and cloud security.
          </p>
          <p className="text-sm text-slate-600">
            Website: <a href="https://skills.yourlearning.ibm.com/" className="text-blue-500 hover:text-blue-700 hover:underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">IBM SkillsBuild</a>
          </p>
        </li>

        {/* Елемент 3 */}
        <li className="relative pl-8 group">
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white group-hover:bg-blue-500 transition-colors duration-300"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800">
              CYBERSECURITY CAMP <span className="text-blue-600 font-medium block sm:inline">- Binance</span>
            </h3>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
              24/02/2025 - 01/03/2025
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-2 italic">Bukovel, Ukraine</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Intensive in-person training covering OSINT, digital forensics, Web3 security, threat modeling, and cryptoasset protection, guided by experts from Binance and the Ukrainian cybersecurity community.
          </p>
        </li>

        {/* Елемент 4 */}
        <li className="relative pl-8 group">
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white group-hover:bg-blue-500 transition-colors duration-300"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800">
              CYBERSECURITY INTERNSHIP <span className="text-blue-600 font-medium block sm:inline">- SoftServe IT Academy</span>
            </h3>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
              01/07/2024 - 19/08/2024
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-2 italic">Lviv, Ukraine</p>
          <p className="text-sm text-slate-600 mb-2 leading-relaxed">
            Focused on network security, vulnerability analysis, and incident response. Gained hands-on experience with tools like vagrant, volatility3 and Sysinternals in a simulated enterprise environment.
          </p>
          <p className="text-sm text-slate-600">
            Website: <a href="https://softserve.academy/" className="text-blue-500 hover:text-blue-700 hover:underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">https://softserve.academy/</a>
          </p>
        </li>

      </ul>
    </section>
  );
};

export default Education;
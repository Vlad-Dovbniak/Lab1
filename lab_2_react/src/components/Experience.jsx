const Experience = () => {
  return (
    <section 
      id="experience" 
      className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-8 tracking-wide uppercase border-b-4 border-blue-500 inline-block pb-1">
        Experience
      </h2>
      
      <ul className="border-l-2 border-slate-200 ml-3 space-y-8">
        
        {/* Поточна робота в Sombra */}
        <li className="relative pl-8 group">
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white group-hover:bg-blue-500 transition-colors duration-300"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800">
              System Administrator <span className="text-blue-600 font-medium block sm:inline">- Sombra</span>
            </h3>
            {/* Бедж CURRENT залишається */}
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
              [07/2025] - CURRENT
            </span>
          </div>
          
          <p className="text-sm text-slate-500 mb-3 italic">Lviv, Ukraine</p>
          
          {/* Дієслова змінено на теперішній час */}
          <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
            <li>Administer and maintain corporate IT infrastructure, providing comprehensive internal technical support.</li>
            <li>Manage Identity and Access Management (IAM) using <span className="font-semibold">Microsoft Entra ID</span> and <span className="font-semibold">Active Directory</span>.</li>
            <li>Support and maintain cloud environments across <span className="font-semibold">Azure</span> and <span className="font-semibold">AWS</span>, alongside internal monitoring systems.</li>
            <li>Configure and manage corporate networks, including VPNs, firewall rules, and <span className="font-semibold">IPsec tunnels</span> for secure data transmission.</li>
            <li>Provision corporate devices via <span className="font-semibold">MDM</span> solutions and enforce strict security policies using <span className="font-semibold">GPO</span>.</li>
            <li>Perform data backups and automate routine administrative processes to optimize IT workflows.</li>
          </ul>
        </li>

        {/* Досвід у BEST Lviv */}
        <li className="relative pl-8 group">
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white group-hover:bg-blue-500 transition-colors duration-300"></span>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800">
              Event Organizer <span className="text-blue-600 font-medium block sm:inline">- BEST Lviv</span>
            </h3>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
              22/09/2024 - 05/2025
            </span>
          </div>
          
          <p className="text-sm text-slate-500 mb-3 italic">Lviv, Ukraine</p>
          
          <p className="text-slate-600 leading-relaxed">
            Involve in organizing local events. Take part in organizing a student hackathon, collaborating with team members, partners, and participants. Gain valuable experience in public speaking, teamwork, time management, and problem-solving.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
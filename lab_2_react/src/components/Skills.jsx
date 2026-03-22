const Skills = () => {
  return (
    <section 
      id="skills" 
      className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-6 tracking-wide uppercase border-b-4 border-blue-500 inline-block pb-1">
        Core Skills
      </h2>
      
      <ul className="flex flex-wrap gap-3">
        
        {/* Identity & Cloud */}
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Microsoft Entra ID & Active Directory
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Azure & AWS (IAM, S3, EC2)
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Microsoft 365 Administration
        </li>

        {/* Networking & Security */}
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          VPN, IPsec & Firewalls
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          TCP/IP, DNS, DHCP, NAT
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          MDM (Intune) & GPO
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Endpoint Security & Threat Modeling
        </li>

        {/* OS, Virtualization & Automation */}
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Windows Server & Linux (Ubuntu, Kali)
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          PowerShell & Bash Automation
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Virtualization (VMware, Hyper-V)
        </li>
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Data Backup & Recovery
        </li>

        {/* Cybersecurity Tools from your previous CV */}
        <li className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          Wireshark, OSINT, Burp Suite
        </li>
        
      </ul>
    </section>
  );
};

export default Skills;
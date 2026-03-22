const About = () => {
  return (
    <section 
      id="about" 
      className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-wide uppercase border-b-4 border-blue-500 inline-block pb-1">
        Professional Summary
      </h2>
      <p className="text-slate-600 leading-relaxed text-lg">
        Results-driven System Administrator currently managing and securing corporate IT infrastructure. I specialize in Identity and Access Management (Entra ID, Active Directory), cloud environments (Azure, AWS), and network security. With hands-on experience in configuring VPNs, IPsec tunnels, and enforcing security policies via MDM and GPO, I focus on building resilient and optimized IT operations. Alongside my daily administrative tasks, I am deeply passionate about cybersecurity, continuously advancing my expertise through IBM SkillsBuild and practical platforms like TryHackMe and Hack The Box. I combine strong analytical skills with a proactive approach to solve complex technical challenges and ensure robust system security.
      </p>
    </section>
  );
};

export default About;
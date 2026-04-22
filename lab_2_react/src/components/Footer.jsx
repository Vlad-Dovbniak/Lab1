import { useState, useEffect } from 'react';

const Footer = () => {
  const [systemInfo, setSystemInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const osInfo = navigator.platform;
    const browserInfo = navigator.userAgent;

    localStorage.setItem('os', osInfo);
    localStorage.setItem('browser', browserInfo);

    setSystemInfo({
      os: localStorage.getItem('os'),
      browser: localStorage.getItem('browser')
    });
  }, []);

  return (
    <footer className="text-center py-8 mt-12 border-t border-slate-200">
      <p className="text-sm text-slate-500 tracking-wide">
        © 2026 | CV of <span className="font-semibold text-slate-700">Vladyslav Dovbniak</span>
      </p>
  
      <div className="mt-4 text-xs text-slate-400">
        <p><strong>ОС:</strong> {systemInfo.os}</p>
        <p className="mt-1"><strong>Браузер:</strong> {systemInfo.browser}</p>
      </div>
    </footer>
  );
};

export default Footer;
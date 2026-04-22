import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formspreeEndpoint = "xlgaleeo";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []); 

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 relative">
        
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl font-bold transition-colors"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
          Зворотній зв'язок
        </h2>

        <form 
          action={`https://formspree.io/f/${formspreeEndpoint}`} 
          method="POST" 
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Ім'я</label>
            <input type="text" name="name" required className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Номер телефону</label>
            <input type="tel" name="phone" className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Повідомлення</label>
            <textarea name="message" rows="4" required className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
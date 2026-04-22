const Languages = () => {
  return (
    <section 
      id="languages" 
      className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-6 tracking-wide uppercase border-b-4 border-blue-500 inline-block pb-1">
        Language Skills
      </h2>
      
      <div className="space-y-6">
        
        {/* Рідна мова */}
        <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="text-lg font-bold text-slate-800">Ukrainian</span>
            <span className="mt-2 sm:mt-0 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full inline-block w-max">
              Native
            </span>
          </div>
        </div>

        {/* Іноземна мова */}
        <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
            <span className="text-lg font-bold text-slate-800">English</span>
            <span className="mt-2 sm:mt-0 px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full inline-block w-max">
              Intermediate / Upper-Intermediate
            </span>
          </div>
          
          {/* Сітка для рівнів володіння */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded border border-slate-200 text-center shadow-sm">
              <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Understanding</span>
              <span className="text-xl font-bold text-blue-600">B2</span>
            </div>
            
            <div className="bg-white p-3 rounded border border-slate-200 text-center shadow-sm">
              <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Speaking</span>
              <span className="text-xl font-bold text-blue-600">B2</span>
            </div>
            
            <div className="bg-white p-3 rounded border border-slate-200 text-center shadow-sm">
              <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Writing</span>
              <span className="text-xl font-bold text-blue-600">B2</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Languages;
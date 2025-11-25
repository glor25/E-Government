const DashboardHome = ({ userType }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="p-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-black mb-3">Welcome back, {userType === 'citizen' ? 'Citizen' : 'Institution'}!</h2>
        <p className="text-indigo-100 text-lg max-w-xl">Your blockchain identity is active. {userType === 'citizen' ? 'Your documents are secure.' : 'Ready to issue new credentials.'}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4"><FileText size={24}/></div>
        <p className="text-slate-500 text-sm font-bold uppercase">Total Documents</p>
        <p className="text-3xl font-black text-slate-800">12</p>
      </div>
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4"><ShieldCheck size={24}/></div>
        <p className="text-slate-500 text-sm font-bold uppercase">Verified Status</p>
        <p className="text-3xl font-black text-emerald-600">Active</p>
      </div>
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4"><Activity size={24}/></div>
        <p className="text-slate-500 text-sm font-bold uppercase">Transactions</p>
        <p className="text-3xl font-black text-purple-600">24</p>
      </div>
    </div>
  </div>
);
import React from 'react';
import { Search, UserPlus, LogIn } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white px-4">
      {/* Hero Section */}
      <div className="pt-12 pb-8">
        <div className="max-w-md mx-auto text-center">
          <img 
            src="https://www.app.askfortransportkenya.com/find.svg"
            alt="Transport Service"
            className="w-[70%] h-auto object-contain mx-auto mb-8 float-animation"
          />
          
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-[#282828] leading-tight">
              <span className="text-[#c11818]">Arani</span> Mobility
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
              Your reliable partner for seamless transportation solutions across the city.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto space-y-4 pb-12">
        {/* Search Button */}
        <button className="btn-primary w-full flex items-center justify-center gap-3 group">
          <Search size={18} className="group-hover:rotate-12 transition-transform duration-300" />
          Search For Services
        </button>

        {/* Portal Text with Lines */}
        <div className="divider">
          <span>Service Providers Portal</span>
        </div>

        {/* Account Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="btn-secondary flex items-center justify-center gap-3 group">
            <UserPlus size={18} className="group-hover:scale-110 transition-transform duration-300" />
            Sign Up
          </button>
          <button className="btn-primary flex items-center justify-center gap-3 group">
            <LogIn size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
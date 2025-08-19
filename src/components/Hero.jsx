import React from 'react';

const Hero = ({ darkMode }) => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
      }`}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
          darkMode ? 'bg-blue-600/20' : 'bg-blue-400/20'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${
          darkMode ? 'bg-purple-600/20' : 'bg-purple-400/20'
        } blur-3xl animate-pulse delay-1000`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Company Name */}
          <div className="mb-8">
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              DANB Financial
            </h1>
            <p className={`text-xl md:text-2xl font-medium mb-4 ${
              darkMode ? 'text-blue-300' : 'text-blue-600'
            }`}>
              Consultancy Services
            </p>
          </div>

          {/* Main Tagline */}
          <h2 className={`text-2xl md:text-4xl font-bold mb-8 leading-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Your Trusted Partner in
            <span className={`block ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Financial Growth & Success
            </span>
          </h2>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We specialize in business loans, collateral and non-collateral financing, 
            with fast approval processes. Our expert team helps you focus on your core 
            business while we handle your financial needs.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/80'
            } backdrop-blur-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-lg ${
                darkMode ? 'bg-blue-600' : 'bg-blue-500'
              } flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Fast Approval</h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Quick processing and approval for your business needs</p>
            </div>

            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/80'
            } backdrop-blur-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-lg ${
                darkMode ? 'bg-green-600' : 'bg-green-500'
              } flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Flexible Options</h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Collateral and non-collateral financing solutions</p>
            </div>

            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/80'
            } backdrop-blur-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-lg ${
                darkMode ? 'bg-purple-600' : 'bg-purple-500'
              } flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Expert Guidance</h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Professional financial consultancy and support</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#services')}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25'
              }`}
            >
              Explore Services
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 ${
                darkMode 
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              Get Started Today
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-300/30">
            <p className={`text-sm mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Trusted by businesses nationwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>500+</div>
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}>98%</div>
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>24h</div>
            </div>
            <div className="flex justify-center items-center space-x-8 text-xs">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Happy Clients</span>
              <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Success Rate</span>
              <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Approval Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className={`w-6 h-6 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

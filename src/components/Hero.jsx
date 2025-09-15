import React, { useState } from "react";

const Hero = ({ darkMode }) => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [indexwp, setIndexwp] = useState(0);
  const [fade, setFade] = useState(true);

  const nextWallpaper = () => {
    setFade(false); //start fade out when true
    setTimeout(() => {
      setIndexwp((prev) => (prev + 1) % wallpaperScroll.length);
      setFade(true); //fade new image
    }, 200); // match transition duration 500 ms
  };

  const trustIndicators = [
    {
      name: "Happy Clients",
      value: "7k+",
      color: { light: "text-blue-600", dark: "text-blue-400" },
    },
    {
      name: "Success Rate",
      value: "90%",
      color: { light: "text-green-600", dark: "text-green-400" },
    },
    {
      name: "Approval Time",
      value: "7-14 days",
      color: { light: "text-purple-400", dark: "text-white" },
    },
  ];

  const wallpaperScroll = [
    {
      title: "",
      url: "./skycscraper.jpg",
      quote: "D.A.N.B Financial Consultancy Services",
      subQuote: "Your Trusted Partner in  Financial Growth & Success. We are here to help.",
    },
    {
      title: "",
      url: "./officedesk.jpg",
      quote:
        "We specialize in business loans, collateral and non-collateral financing, with fast approval processes.",
      subQuote:
        "Our expert team helps you focus on your core business while we handle your financial needs.",
    },
  ];

  const features = [
    {
      title: "Fast Approval",
      description: "Quick processing and approval for your business needs",
      color: darkMode ? "bg-blue-600" : "bg-blue-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Flexible Options",
      description: "Collateral and non-collateral financing solutions",
      color: darkMode ? "bg-green-600" : "bg-green-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Expert Guidance",
      description: "Professional financial consultancy and support",
      color: darkMode ? "bg-purple-600" : "bg-purple-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-transparent" : "bg-transparent"
        }`}
      ></div>

      {/* Animated Background Elements : Glowing corners at the side of my window : top and bottom */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
            darkMode ? "bg-blue-600/20" : "bg-blue-400/20"
          } blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${
            darkMode ? "bg-purple-600/20" : "bg-purple-400/20"
          } blur-3xl animate-pulse delay-1000`}
        ></div>
      </div> */}

      {/* Wallpaper Scroll */}
      <div
        className="z-1 relative  bg-fixed bg-center bg-cover transition-opacity w-full h-screen duration-200 ease-in-out"
        style={{
          backgroundImage: `url(${wallpaperScroll[indexwp].url})`,
          opacity: fade ? 1 : 0,
        }}
      >
        {/* Quote */}
        <div className="relative z-10 flex items-center justify-center text-center px-4 max-w-8xl mx-auto h-full min-h-screen">
          {/* <div className="absolute inset-0"></div> */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl w-[80%] p-12 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              {wallpaperScroll[indexwp].quote}
            </h1>
            <p className="text-white text-lg md:text-2xl  rounded">
              {wallpaperScroll[indexwp].subQuote}
            </p>
            {/* Next button */}
            <button
              onClick={nextWallpaper}
              className="mt-8 px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-40 text-black rounded transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Overlay */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="max-w-7xl mt-8 mx-auto">
          <div>
            <img src="./danbprmotional.jpg" alt="danb promotional info" />
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-6 max-w-4xl mx-auto">
            {features.map(({ title, description, color, icon }, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800/50" : "bg-white/80"
                } backdrop-blur-sm border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mx-auto mb-4`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon}
                  </svg>
                </div>
                <h3
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("#services")}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? "bg-yellow-600 text-white hover:bg-yellow-700 shadow-lg shadow-blue-600/25"
                  : "bg-yellow-600 text-white hover:bg-yellow-700 shadow-lg shadow-blue-600/25"
              }`}
            >
              Explore Services
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 ${
                darkMode
                  ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                  : "border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
              }`}
            >
              Get Started Today
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-2 mb-12 pt-4">
            <p
              className={`text-sm mb-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Trusted by businesses nationwide
            </p>

            {/* Trust Indicators using mapping in ReactJS */}
            <div className="flex justify-center items-center space-x-12 opacity-60">
              {trustIndicators.map((item, index) => (
                <div>
                  <span
                    key={index}
                    className={`text-2xl font-bold ${
                      darkMode ? item.color.dark : item.color.light
                    }`}
                  >
                    {item.value}
                  </span>
                  <div key={index} className={`text-xs`}>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

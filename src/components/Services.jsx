import React from "react";

const Services = ({ darkMode }) => {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Business Loans",
      description:
        "Comprehensive business financing solutions tailored to your company's growth needs. Fast approval process with competitive rates.",
      features: [
        "Non-collateral for existing businesses",
        "Car Loan",
        "Truck Loan",
        "Real State Mortgage",
        "Startup Business",
      ],
      definition: "",
      color: "blue",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Collateral Financing",
      description:
        "Secure loans backed by valuable assets. Lower interest rates and higher loan amounts with asset-backed security.",
      features: [
        "Real Estate",
        "Equipment",
        "Inventory",
        "Accounts Receivable",
      ],
      color: "green",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Non-Collateral Loans",
      description:
        "Unsecured business loans based on creditworthiness and business performance. No asset requirements needed.",
      features: [
        "Credit-Based",
        "Revenue-Based",
        "Invoice Financing",
        "Merchant Cash Advances",
      ],
      color: "purple",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Business Loan",
      description:
        "Comprehensive business financing solutions tailored to your company's growth needs. Fast approval process with competitive rates.",
      features: ["Non-collateral for existing businesses"],
      color: "yellow",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 13h18l-2-5a2 2 0 00-1.9-1.3H6.9A2 2 0 005 8l-2 5z"
          />
          <circle
            cx="5.5"
            cy="18.5"
            r="2.5"
            strokeWidth={2}
            stroke="currentColor"
          />
          <circle
            cx="18.5"
            cy="18.5"
            r="2.5"
            strokeWidth={2}
            stroke="currentColor"
          />
        </svg>
      ),
      title: "Car Loan",
      description: "",
      features: [
        "Collateral loan for additional funds",
        "Refinance",
        "Loan to get a Brand new Car",
      ],
      color: "red",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7h10v10H3V7zm10 0h4l4 4v6h-8V7zm-7 10a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Truck Loan",
      description: "",
      features: [
        "Collateral loan for additional funds",
        "Refinance",
        "Loan to get a Brand new Truck",
      ],
      color: "indigo",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h6m8-11v10a1 1 0 01-1 1h-6"
          />
        </svg>
      ),
      title: "Real Estate Mortgage",
      description: "",
      features: ["Sangla titulo for additional funds"],
      color: "indigo",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: darkMode ? "bg-blue-600/20" : "bg-blue-50",
        icon: darkMode ? "bg-blue-600" : "bg-blue-500",
        text: darkMode ? "text-blue-400" : "text-blue-600",
        border: darkMode ? "border-blue-600/30" : "border-blue-200",
      },
      green: {
        bg: darkMode ? "bg-green-600/20" : "bg-green-50",
        icon: darkMode ? "bg-green-600" : "bg-green-500",
        text: darkMode ? "text-green-400" : "text-green-600",
        border: darkMode ? "border-green-600/30" : "border-green-200",
      },
      purple: {
        bg: darkMode ? "bg-purple-600/20" : "bg-purple-50",
        icon: darkMode ? "bg-purple-600" : "bg-purple-500",
        text: darkMode ? "text-purple-400" : "text-purple-600",
        border: darkMode ? "border-purple-600/30" : "border-purple-200",
      },
      yellow: {
        bg: darkMode ? "bg-yellow-600/20" : "bg-yellow-50",
        icon: darkMode ? "bg-yellow-600" : "bg-yellow-500",
        text: darkMode ? "text-yellow-400" : "text-yellow-600",
        border: darkMode ? "border-yellow-600/30" : "border-yellow-200",
      },
      red: {
        bg: darkMode ? "bg-red-600/20" : "bg-red-50",
        icon: darkMode ? "bg-red-600" : "bg-red-500",
        text: darkMode ? "text-red-400" : "text-red-600",
        border: darkMode ? "border-red-600/30" : "border-red-200",
      },
      indigo: {
        bg: darkMode ? "bg-indigo-600/20" : "bg-indigo-50",
        icon: darkMode ? "bg-indigo-600" : "bg-indigo-500",
        text: darkMode ? "text-indigo-400" : "text-indigo-600",
        border: darkMode ? "border-indigo-600/30" : "border-indigo-200",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="services"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Financial Services
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Comprehensive financial solutions designed to fuel your business
            growth and success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  darkMode ? "bg-gray-800/50" : "bg-white"
                } ${colors.border}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Content */}
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full ${colors.icon} mr-3`}
                      ></div>
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button
                  className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center p-8 rounded-2xl ${
            darkMode ? "bg-gray-800/50" : "bg-white"
          } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to Get Started?
          </h3>
          <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Contact our team today to discuss your financial needs and discover
            the best solutions for your business.
          </p>
          <button
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

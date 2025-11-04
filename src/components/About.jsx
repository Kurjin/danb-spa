import React from "react";

const About = ({ darkMode }) => {
  const stats = [
    { number: "7k+", label: "Happy Clients", icon: "👥" },
    { number: "90%", label: "Success Rate", icon: "📈" },
    { number: "7-14 days", label: "Approval Time", icon: "⚡" },
    { number: "17", label: "Years Experience", icon: "🏆" },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We act with honesty, transparency, and fairness in all that we do. We stay true to our principles, make ethical decisions, and do the right thing.",
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
    },
    {
      title: "Professionalism",
      description:
        "We uphold the highest standards of conduct, integrity, and accountability in every action. Our commitment to excellence ensures that we deliver quality work, treat others with respect, and represent the company with pride and competence.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Confidentiality",
      description:
        "We protect the trust placed in us by safeguarding all sensitive information. We ensure that data, client details, and company matters remain secure and are handled with discretion and responsibility.",
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
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About DANB Financial
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Your trusted partner in financial growth and business success
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our Story
            </h3>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>
                Founded with a vision to democratize access to quality financial
                services, DANB Financial Consultancy Services has been at the
                forefront of business financing solutions for over a decade.
              </p>
              <p>
                We understand that every business has unique financial needs,
                which is why we offer personalized solutions ranging from
                collateral and non-collateral loans to comprehensive financial
                planning and advisory services.
              </p>
              <p>
                Our commitment to fast approval processes, competitive rates,
                and exceptional customer service has made us a trusted partner
                for hundreds of businesses nationwide.
              </p>
            </div>
          </div>
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-700/50" : "bg-gray-50"
            }`}
          >
            <img
              src="/DANB.png"
              alt="DANB Financial Logo"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-4xl mb-2 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {stat.icon}
              </div>
              <div
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CEO Section */}
        {/* <div className={`p-8 rounded-2xl mb-20 ${
          darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Meet Our CEO
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A remarkable leader with decades of experience in financial services and 
                business development.
              </p>
              <div className={`space-y-4 text-base ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>
                  Our CEO brings unparalleled expertise in financial markets, risk management, 
                  and business strategy. With a proven track record of helping businesses 
                  achieve their financial goals, they lead our team with vision and dedication.
                </p>
                <p>
                  Under their leadership, DANB Financial has grown from a local consultancy 
                  to a nationally recognized financial services provider, earning numerous 
                  industry awards and accolades.
                </p>
                <p>
                  Their commitment to innovation, integrity, and client success continues to 
                  drive our company's mission of empowering businesses through accessible 
                  and reliable financial solutions.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className={`w-48 h-48 rounded-full mx-auto mb-6 ${
                darkMode ? 'bg-gray-600' : 'bg-gray-300'
              } flex items-center justify-center`}>
                <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8c0 2.208-1.79 4-3.998 4-2.208 0-3.998-1.792-3.998-4s1.79-4 3.998-4c2.208 0 3.998 1.792 3.998 4z" />
                </svg>
              </div>
              <h4 className={`text-xl font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                CEO & Founder
              </h4>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                DANB Financial Consultancy Services
              </p>
            </div>
          </div>
        </div> */}

        <hr className="mb-12 text-gray-300 dark:text-white" />
        {/* Company Values */}
        <div>
          <h3
            className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-xl ${
                    darkMode ? "bg-blue-600" : "bg-blue-500"
                  } flex items-center justify-center mx-auto mb-4`}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h4
                  className={`text-xl font-semibold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {value.title}
                </h4>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

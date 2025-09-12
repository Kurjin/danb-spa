import React from 'react';

const Achievements = ({ darkMode }) => {
  const achievements = [
    // {
    //   year: "2024",
    //   title: "Best Financial Consultancy",
    //   organization: "Business Excellence Awards",
    //   description: "Recognized for outstanding service quality and client satisfaction in financial consultancy services.",
    //   icon: "🏆"
    // },
    // {
    //   year: "2024",
    //   title: "Fastest Growing Company",
    //   organization: "Financial Services Association",
    //   description: "Awarded for exceptional growth and expansion in the financial services sector.",
    //   icon: "📈"
    // },
    // {
    //   year: "2023",
    //   title: "Excellence in Customer Service",
    //   organization: "Customer Choice Awards",
    //   description: "Honored for providing exceptional customer service and support to business clients.",
    //   icon: "⭐"
    // },
    // {
    //   year: "2023",
    //   title: "Innovation in Financial Technology",
    //   organization: "FinTech Innovation Summit",
    //   description: "Recognized for innovative approaches to business financing and digital solutions.",
    //   icon: "💡"
    // },
    // {
    //   year: "2023",
    //   title: "Top 10 Financial Advisors",
    //   organization: "Financial Advisor Magazine",
    //   description: "Featured among the top 10 financial advisory firms for business growth and development.",
    //   icon: "🎯"
    // },
    // {
    //   year: "2022",
    //   title: "Community Impact Award",
    //   organization: "Local Business Association",
    //   description: "Acknowledged for significant contributions to local business development and community growth.",
    //   icon: "🤝"
    // }
  ];

  const milestones = [
    {
      number: "7k+",
      label: "Businesses Funded",
      description: "Successfully provided financing to over 500 businesses across various industries."
    },
    {
      number: "₱10.7B",
      label: "Total Funding Provided",
      description: "Facilitated over ₱10.7 billion in business loans and financial solutions."
    },
    {
      number: "90%",
      label: "Client Satisfaction",
      description: "Maintained an exceptional 90% client satisfaction rate across all services."
    },
    {
      number: "7 Days",
      label: "Average Approval Time",
      description: "Achieved industry-leading 7-days average approval time and for qualified applications/clients will take only for 3-days."
    }
  ];

  return (
    <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Awards & Achievements
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Recognized for excellence in financial services and commitment to client success
          </p>
        </div>

        {/* Key Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {milestones.map((milestone, index) => (
            <div key={index} className={`text-center p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {milestone.number}
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {milestone.label}
              </h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800/50' : 'bg-white'
              } ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              {/* Achievement Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{achievement.icon}</div>
                <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {achievement.year}
                </div>
              </div>

              {/* Achievement Content */}
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {achievement.title}
              </h3>
              <p className={`text-sm font-medium mb-4 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {achievement.organization}
              </p>
              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {achievement.description}
              </p>

              {/* Achievement Badge */}
              <div className="mt-6 pt-4 border-t border-gray-300/30">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  darkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Award Winner
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Banner */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${
          darkMode ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'
        } border ${darkMode ? 'border-blue-600/30' : 'border-blue-200'}`}>
          <div className="text-6xl mb-4">🎉</div>
          <h3 className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Celebrating Success Together
          </h3>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            These achievements reflect our commitment to excellence and the trust our clients 
            place in us. We're proud to be recognized for our innovative financial solutions 
            and exceptional service delivery.
          </p>
        </div>

        {/* Industry Recognition */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Industry Recognition
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60">
            <div className={`p-4 rounded-lg text-center ${
              darkMode ? 'bg-gray-800/50' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-2xl mb-2">🏢</div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Business Excellence
              </div>
            </div>
            <div className={`p-4 rounded-lg text-center ${
              darkMode ? 'bg-gray-800/50' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-2xl mb-2">💼</div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Financial Services
              </div>
            </div>
            <div className={`p-4 rounded-lg text-center ${
              darkMode ? 'bg-gray-800/50' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-2xl mb-2">🚀</div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Innovation
              </div>
            </div>
            <div className={`p-4 rounded-lg text-center ${
              darkMode ? 'bg-gray-800/50' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-2xl mb-2">🤝</div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Community Impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

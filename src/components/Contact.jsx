import React from "react";

const Contact = ({ darkMode }) => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   company: '',
  //   service: '',
  //   message: ''
  // });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     alert('Thank you for your message! We will get back to you soon.');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       company: '',
  //       service: '',
  //       message: ''
  //     });
  //   }, 2000);
  // };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      details: ["0916-680-9096", "0917-160-2864"],
      action: "Call Now",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      details: ["danbfinancialconsultancy@gmail.com"],
      action: "Send Email",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Office",
      details: [
        "LG-07 Cityland Shaw Tower, Shaw Blvd., Mandaluyong City, Mandaluyong, Philippines",
      ],
      action: "Get Directions",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to take your business to the next level? Contact us today for
            a free consultation
          </p>
        </div>

        <div>
          {/* Contact Information */}
          <div className="space-y-8 ">
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl ${
                      darkMode ? "bg-gray-700/50" : "bg-gray-50"
                    } border ${
                      darkMode ? "border-gray-600" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${
                          darkMode ? "bg-blue-600" : "bg-blue-500"
                        } flex items-center justify-center flex-shrink-0`}
                      >
                        <div className="text-white">{info.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`text-lg font-semibold mb-2 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className={`text-sm ${
                                darkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                        <button
                          className={`mt-3 text-sm font-medium ${
                            darkMode
                              ? "text-blue-400 hover:text-blue-300"
                              : "text-blue-600 hover:text-blue-500"
                          } transition-colors duration-200`}
                        >
                          {info.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div
              className={`p-6 rounded-xl ${
                darkMode ? "bg-gray-700/50" : "bg-gray-50"
              } border ${darkMode ? "border-gray-600" : "border-gray-200"}`}
            >
              <h4
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Business Hours
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Monday - Friday
                  </span>
                  <span className={darkMode ? "text-white" : "text-gray-900"}>
                    9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Saturday
                  </span>
                  <span className={darkMode ? "text-white" : "text-gray-900"}>
                    Closed
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Sunday
                  </span>
                  <span className={darkMode ? "text-white" : "text-gray-900"}>
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            {/* <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-red-600/20' : 'bg-red-50'
            } border ${darkMode ? 'border-red-600/30' : 'border-red-200'}`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Emergency Support
              </h4>
              <p className={`text-sm mb-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Need immediate assistance? Contact our 24/7 support line.
              </p>
              <div className={`text-lg font-bold ${
                darkMode ? 'text-red-400' : 'text-red-600'
              }`}>
                +1 (555) 911-0000
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

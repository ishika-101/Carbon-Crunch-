import React from 'react';

const AboutUs = () => {
    const features = [
      {
        title: "Regulatory Compliance and Reporting",
        description:
          "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.",
      },
      {
        title: "Meeting Sustainability Goals and Net-Zero Targets",
        description:
          "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.",
      },
      {
        title: "Cost Savings and Operational Efficiency",
        description:
          "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.",
      },
      {
        title: "Investor and Consumer Expectations",
        description:
          "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.",
      },
      {
        title: "Climate Risk Management",
        description:
          "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.",
      },
      {
        title: "Strengthening Brand Reputation and Market Leadership",
        description:
          "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.",
      },
    ];
  
    return (
      <section id='about-us' className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
            Why Carboncrunch
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            Leading Sustainability with Carboncrunch
          </h2>
          <p className="text-gray-600 mt-2">
            GHG (Greenhouse Gas) Accounting is a framework used to measure and
            report greenhouse gas emissions.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <span className="bg-green-100 text-green-500 p-2 rounded-full">
                  📦
                </span>
                <h3 className="text-green-600 font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  
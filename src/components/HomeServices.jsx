const HomeServices = () => {
  const services = [
    {
      title: "IT Services",
      description:
        "Cloud Computing, Full Stack Development, Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
    },
    {
      title: "GIS Services",
      description:
        "GIS Mapping and Digitization, Data Base Development, Terrain Modelling, Digital Elevation Model, Web GIS Application.",
    },
    {
      title: "Digital Marketing and Designing",
      description:
        "Social Media Marketing, SMS Marketing, Email Marketing, Google Ads, Creative and Concept Designing.",
    },
  ];

  const services_below = [
    [
      "Utilities",
      "Energy Transmission",
      "Natural Resources",
      "Oil, Gas and Minerals",
      "Water Resources",
      "Infrastructure",
    ],
    [
      "Ports and Harbors",
      "Market Research",
      "Finance & Accounts",
      "Education",
      "Govt. Sector",
      "Health & Medical",
    ],
    [
      "Real Estates",
      "Hospitality",
      "Retail Industry",
      "Manufacturing",
      "Entertainment",
      "",
    ],
  ];

  return (
    <div className="p-12 pb-0 flex flex-col gap-12 bg-black">
      <h1 className="text-3xl md:text-5xl font-semibold mb-8 text-center text-white animate-fade-in">
        Services & Domains
      </h1>
      <div className="mt-12 mx-auto grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8">
        {/* IT Card */}
        {services.map((service) => (
          <div className="bg-gray-900 flex flex-col text-center gap-4 text-white rounded-xl border border-white shadow-lg p-6 py-12 hover:shadow-xl transform transition duration-300">
            <div className="bg-white w-24 h-24 mx-auto"></div>
            <h3 className="text-xl font-bold whitespace-nowrap text-red-700">
              {service.title}
            </h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
        {/* Below Card */}
        {services_below.map((services) => (
          <div className="bg-gray-900 w-full flex flex-col text-left gap-4 text-white rounded-xl border border-white shadow-lg p-6 py-12 hover:shadow-xl transform transition duration-300">
            {services.map((service) => <h6 className="text-sm text-gray-300 flex gap-2 whitespace-nowrap h-[297.6]"><div>→</div> {service}</h6>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;

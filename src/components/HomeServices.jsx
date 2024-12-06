const HomeServices = () => {
  const services = [
    {
      title: "IT Services",
      description: "Cloud Computing, Full Stack Development, Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
      image: "/assets/For_Developing/Service & Domain  Section/software-application.png"
    },
    {
      title: "GIS Services",
      description: "GIS Mapping and Digitization, Data Base Development, Terrain Modelling, Digital Elevation Model, Web GIS Application.",
      image: "/assets/For_Developing/Service & Domain  Section/geospatial-technology.png"
    },
    {
      title: "Digital Marketing and Designing",
      description: "Social Media Marketing, SMS Marketing, Email Marketing, Google Ads, Creative and Concept Designing.",
      image: "/assets/For_Developing/Service & Domain  Section/social-media.png"
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
    <div className="py-12 pb-0 flex flex-col gap-12 px-4 md:px-12">
      <h1 className="text-5xl font-semibold mb-8 text-center text-white animate-fade-in">
        Services & Domains
      </h1>
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
        {/* IT Card */}
        {services.map((service, index) => (
          <div key={index} className="flex flex-col text-center gap-4 h-full text-white rounded-xl border border-white shadow-lg px-2 py-12 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="w-24 h-24 mx-auto">
              <img src={service.image} alt="" className="filter invert" />
            </div>
            <h3 className="text-xl font-bold text-red-700">
              {service.title}
            </h3>
            <p className="text-sm text-gray-300 px-4">{service.description}</p>
          </div>
        ))}
        {/* Below Card */}
        {services_below.map((services) => (
          <div className="w-full h-full flex flex-col text-left gap-4 text-white rounded-xl border border-white shadow-lg p-6 py-12 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            {services.map((service) => <h6 className="text-sm text-gray-300 flex gap-2 whitespace-nowrap h-[297.6] justify-center"><div className={service == ""? 'hidden' : 'inline'}>→</div> {service}</h6>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;

const HomeServices = () => {
  const services = [
    {
      title: "IT Services",
      description: "Cloud Computing, Full Stack Development, \n Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
      image: "/assets/For_Developing/Service & Domain  Section/software-application.png"
    },
    {
      title: "GIS Services",
      description: "GIS Mapping and Digitization, Data Base \n Development, Terrain Modelling,\n Digital Elevation Model, Web GIS Application.",
      image: "/assets/For_Developing/Service & Domain  Section/geospatial-technology.png"
    },
    {
      title: "Digital Marketing and Designing",
      description: "Social Media Marketing, SMS Marketing, \n Email Marketing, Google Ads,\n Creative and Concept Designing.",
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
    <div className="pt-12 pb-0 flex flex-col gap-12">
      <h1 className="text-5xl font-semibold mb-8 text-center animate-fade-in">
        Services & Domains
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12">
        {/* IT Card */}
        {services.map((service, index) => (
          <div key={index} className="flex flex-col text-center gap-4 h-full w-full rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-20 shadow-lg py-12 px-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="w-24 h-24 mx-auto">
              <img src={service.image} alt="" className="filter invert" />
            </div>
            <h3 className="text-2xl px-1 font-bold text-red-600">
              {service.title}
            </h3>
            <p className="text-md px-6 whitespace-pre-line ">{service.description}</p>
          </div>
        ))}
        {/* Below Card */}
        {services_below.map((services) => (
          <div className="w-full h-full flex flex-col text-left gap-4 rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-20 shadow-lg space-y-3 p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            {services.map((service) => <h6 className="text-md flex gap-2 items-center whitespace-nowrap h-[297.6]"><div className={service == ""? 'hidden' : 'inline'}><img src="/assets/For_Developing/Arrow/next.png" alt="" className="w-3 h-3 invert" /></div> {service}</h6>)}
          </div> 
        ))}
      </div>
    </div>
  );
};

export default HomeServices;

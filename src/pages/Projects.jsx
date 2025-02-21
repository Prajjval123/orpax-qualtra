import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  [
    {
      title:
        "High Speed Railway Corridor, Howrah-Haldia : Client – INECO SPAIN Health Monitoring System in the District of Agra - A GIS based Health Monitoring System : Client - FUTURE GROUP",
      points: [
        "Geo referencing of toposheets.",
        "Geo referencing of Satellite Imagery",
        "Mosaicing of satellite Imageries and Toposheets",
        "Marking of the alignment on satellite Imagery",
        "Land use and Land Cover Map preparation at 1: 2500 or higher in PDF & JPEG ormat.",
        "All digital layers in soft copy.",
      ],
      image: "/assets/projects/project-1.jpg",
      description: "",
    },
    {
      points: [
        "Calculation of the land use areas Working of Satellite Imageries of required area.",
        "Integration of total station data Contour Generation/ DEM",
      ],
      image: "/assets/projects/project-2.jpg",
    },
  ],
  [
    {
      title: "Master Plan – Darjeeling : Client - RITES LTD.",
      points: [
        "Geo referencing of toposheets.",
        "Geo referencing of Satellite Imagery",
        "Mosaicing of satellite Imageries and Toposheets",
        "Marking of the alignment on satellite Imagery",
        "Land use and Land Cover Map preparation at 1: 2500 or higher in PDF & JPEG format.",
        "All digital layers in soft copy.",
      ],
      image: "/assets/projects/project-3.jpg",
      description: "",
    },
    {
      points: [
        "Calculation of the land use areas Working of Satellite Imageries of required area.",
        "Integration of total station data Contour Generation/ DEM",
      ],
      image: "/assets/projects/project-4.jpg",
    },
  ],
  [
    {
      title: "Land use and Land cover map preparation : Client – AHT Germany.",
      points: [
        "Geo referencing of toposheets.",
        "Geo referencing of Satellite Imagery",
        "Mosaicing of satellite Imageries and Toposheets",
        "Marking of the alignment on satellite Imagery",
        "Land use and Land Cover Map preparation at 1: 2500 or higher in PDF & JPEG format.",
        "All digital layers in soft copy.",
      ],
      image: "/assets/projects/project-5.jpg",
      description: "",
    },
    {
      points: [
        "Calculation of the land use areas Working of Satellite Imageries of required area.",
        "Integration of total station data Contour Generation/ DEM",
      ],
      image: "/assets/projects/project-6.jpg",
    },
  ],
  [
    {
      title:
        "Topographic Survey and Creation of DEM : Client – Gulf Petrochem.",
      points: [
        "Working out Elevation Value at an interval of 30 Mtrs.",
        "Collection of existing features with in the boundary.",
        "Map Preparation with existing features Scales 1:5000 in Auto Cad.",
      ],
      image: "/assets/projects/project-7.jpg",
      description: "",
    },
    {
      points: [
        "Working out Elevation Value at an interval of 30 Mtrs.",
        "Collection of existing features with in the boundary.",
        "Map Preparation with existing features Scales 1:5000 in Auto Cad.",
      ],
      image: "/assets/projects/project-8.jpg",
    },
  ],
  [
    {
      title:
        "Innovative approach to State wise HIV Survey : Client - NIELSEN INDIA",
      points: [
        "Crosstab provides an user-friendly analysis software to view and query the Survey data",
        "Capability to generate crosstabular analysis on multiple variables",
        "Capability of setting filters and conditions",
      ],
      image: "/assets/projects/project-9.jpg",
      description:
        "The custom application has been designed to provide mapping of population vulnerable to HIV/AIDS in the state of Orissa. The different target groups have been identified by specific symbols.",
    },
    {
      points: [
        "Planning tool for decision makers on HIV AIDS vulnerable zones w.r.t Health Center coverage",
        "NGO Presence",
        "Condom Availability etc",
        "Capability of adding new sites on future conducted surveys",
      ],
      image: "/assets/projects/project-10.jpg",
    },
  ],
  [
    {
      title:
        "Crosstab Analysis Software for All India Pension Survey : Client - NIELSEN INDIA",
      points: [
        "Crosstab provides an user-friendly analysis software to view and query the Survey data",
        "Capability to generate crosstabular analysis on multiple variables",
        "Capability of setting filters and conditions",
      ],
      image: "/assets/projects/project-11.jpg",
      description:
        "This was a prestigious job (a project of the Government of India) that (the software part) we undertook on behalf of AC Nielsen (the Indian wing of the transnational stalwart in market research); Reduction in vulnerability in old age for the 86% of workers located in the gigantic unorganized sector of India was the objective of the government. The sample size was no less than a whopping 40,000! Simply speaking, this software can be used to compare between two questionnaires and also compare the frequencies. It turned out to be, out-and-out, a huge success.",
    },
    {
      points: [
        "Both graphical and tabular display",
        "GUI based design allows end-users flexibility and ease to view and generate queries intuitively",
        "The application could be designed as a web-based solution for data sharing across different organizations and countries.",
      ],
      image: "/assets/projects/project-12.jpg",
    },
  ],
  [
    {
      title:
        "Fact Finder 1.0, Invest India Income and Saving Survey 2006-2007 - GUI based Data Analysis Tool",
      points: [
        "Completely userfriendly with intuitive graphical interface",
        "Can be used by endusers having no background of using statistical analysis packages",
        "Fast, Powerful and stunning graphics",
        "Can be used as a presentation tool",
        "Compatible with Microsoft Office platforms and data can be exported to Excel, Powerpoint and MS Word",
      ],
      image: "/assets/projects/project-13.jpg",
      description:
        "Indian Incomes and Savings Survey (IISS) 2006 is Invest India's national syndicated survey of Indians with cash incomes. This will be repeated biannually to produce the first nationally representative and scalable time series of retail investor behavior in India. We designed and developed a tailor-made data analysis tool for this survey. This survey is the brainchild of Invest India Market Solution Pvt Ltd. ACNielsen conducted the survey per se. IISS 2006 has created a unique and integrated database that directly links the incomes, savings, insurance positions, credit portfolios and practices, investment outlook, labor market characteristics and demography of the Indian paid workforce. Our unique software, mentioned above, can not only generate simple user defined queries but dig deep within the data and generate graphs and reports that can be used for reports, presentations and further analysis.",
    },
    {
      points: [
        "Can be distributed via CDROM with Hard Copy Reports providing an added benefit to endusers",
        "Capability of viewing reports in geographical maps opening a new dimension in report analysis and data interpretation",
        "Can be customized to import any and all kinds of tabular data generated through survey3",
      ],
      image: "/assets/projects/project-14.jpg",
    },
  ],
  [
    {
      title:
        "Health Monitoring System in the District of Agra - A GIS based Health Monitoring System : Client - FUTURE GROUP.",
      points: [
        "Health Monitoring System (HMS) is a cost effective comprehensive GIS based decision making system for Urban and Rural Health scenario.",
      ],
      image: "/assets/projects/project-15.jpg",
      description:
        "The advantage of this system is the evolution of an ever growing system to collate and dispense painstakingly gathered and at the same time extremely useful health data to appropriate partners and agencies for the ultimate stakeholders, beneficiaries and the community at large.",
    },
    {
      points: [
        "A key goal of this effort is to ensure that the growing collection of high quality health data can be easily integrated into a central health GIS, allowing agencies and donor organizations to derive added value from the synthesis of their own health data with the spatial and health data developed by others.",
      ],
      image: "/assets/projects/project-16.jpg",
    },
  ],
  [
    {
      title: "Highway 3D Simulation : Client- Lea Associates, INDIA",
      points: [
        "One of our most prestigious and flagship project undertaken was developing a 15 minutes video strip on the proposed Gurgaon - Jaipur Expressway (where the total drive length of the road is approximately 60 km), along with the complete 3D simulation package.",
      ],
      image: "/assets/projects/project-17.jpg",
      description:
        "3D animated perspective (3D Drive Through Vision) for 6 lining of the Gurgaon - Jaipur Section from km 42.700 to km 107.00 of NH8 in the state of Haryana on DBFO pattern under NHDP phase V.",
    },
    {
      points: [
        "Stakeholders in this flagship project are NHAI (who were responsible for floating this project), Pink City (the concessionaire), LASA (one of the consultants of the project).",
      ],
      image: "/assets/projects/project-18.jpg",
    },
  ],
  [
    {
      title: "Web Design and Development, Internet or Web Television",
      points: [
        "A key goal of this effort is to provide latest news mainly concentrating on American and South Asian news. Through fosaac.Tv viewer can get news on politics, business, entertainment, sports, health, sci-tech, living etc. We also provide forums where viewrs can exchange their views and knowledge.",
      ],
      image: "/assets/projects/project-19.jpg",
      description:
        "Web Tv is a web based television that provides consumers a 24 x 7 non-stop updation of the nation wide news as well as world wide news.",
    },
    {
      points: [
        "A key goal of this effort is to provide latest news mainly concentrating on American and South Asian news. Through fosaac.Tv viewer can get news on politics, business, entertainment, sports, health, sci-tech, living etc. We also provide forums where viewrs can exchange their views and knowledge.",
      ],
      image: "/assets/projects/project-20.jpg",
    },
    {
      points: [
        "Founded in 2001, AIT Solutions and Services is an upcoming Software Development and Consultation company, providing Customized (Bespoke) Information Technology solutions and services in various domains.",
      ],
      image: "/assets/projects/project-21.jpg",
    },
    {
      points: [
        "US-INDIA is an organization for providing an ideal platform for nurturing and encouraging upcoming talents (particularly those, who are gifted but lacking availability of adequate resource) in innovative and truly intriguing artistic and cultural ventures.",
      ],
      image: "/assets/projects/project-22.jpg",
    },
  ],
];

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const underlineRef = React.useRef(null);

  const handleMouseEnter = () => {
    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "center",
        duration: 1.5,
        ease: "power2.out",
      }
    );
    
  };

  const handleMouseLeave = () => {
    gsap.to(underlineRef.current,{ scaleX: 1 }, {
      scaleX: 0,
      transformOrigin: "center",
      duration: 2,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: (index + 2) * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
    handleMouseEnter()
  }, []);
  return (
    <div className="p-4 lg:p-16 min-h-screen pb-0">
      <h1
        ref={headingRef}
        onMouseLeave={handleMouseLeave}
        className="text-4xl md:text-5xl font-semibold mb-10 text-center p-4 animate-fade-in"
      >
        Projects
        <div
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-red-500 w-full scale-x-0 transform origin-center"
        ></div>
      </h1>
      
      {projects.map((projectArr, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="mb-24 px-10 "
        >
          <h1 className="text-xl lg:text-2xl font-medium px-4 py-2 rounded-xl text-center my-4 md:my-12">
            {projectArr[0].title}
          </h1>

          <div className="flex flex-col mb-4 lg:h-[700px]">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative h-full">
              <div className="w-full flex flex-col h-full gap-4 lg:p-2 pb-4 rounded-xl border border-white backdrop-blur-lg shadow-lg transform transition-transform duration-300 hover:scale-x-100 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
                <div className="lg:p-4 rounded-xl">
                  <img
                    src={projectArr[0].image}
                    alt="Project"
                    className="rounded-xl w-full border border-white"
                  />
                </div>
                <div>
                  <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                    {projectArr[0].points.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 lg:text-xl">
                        <img
                          src="/assets/For_Developing/Arrow/next.png"
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 invert mt-2"
                        />{" "}
                        {desc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <img
                src="assets/For developer/Red_Dot.png"
                className="absolute top-[200px] right-[200px] opacity-40"
              />
              <div
                key={index}
                className=" w-full flex flex-col h-full gap-4 lg:p-2 pb-4 rounded-xl border border-white backdrop-blur-lg shadow-lg transform transition-transform duration-500 hover:scale-x-100 hover:shadow-2xl hover:shadow-red-700 cursor-pointer"
              >
                <div className="lg:p-4 rounded-xl">
                  <img
                    src={projectArr[1].image}
                    alt="Project"
                    className=" rounded-xl w-full border border-white"
                  />
                </div>
                <div>
                  <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                    {projectArr[1].points.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 lg:text-xl">
                        <img
                          src="/assets/For_Developing/Arrow/next.png"
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 invert mt-2"
                        />{" "}
                        {desc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Projects;

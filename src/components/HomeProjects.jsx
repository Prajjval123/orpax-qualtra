import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title:
      "Health Monitoring System in the District of Agra - A GIS based Health Monitoring System : Client - FUTURE GROUP",
    description: [
      "Health Monitoring System (HMS) is a cost-effective comprehensive GIS-based decision-making system for Urban and Rural Health scenarios.",
      "A key goal of this effort is to ensure that the growing collection of high-quality health data can be easily integrated into a central health GIS, allowing agencies and donor organizations to derive added value from the synthesis of their own health data with the spatial and health data developed by others.",
    ],
    image: "/assets/For_Developing/Projects_Section/monitor.png",
  },
  {
    title:
      "Crosstab Analysis Software for All India Pension Survey : Client - NIELSEN INDIA",
    description: [
      "Crosstab provides user-friendly analysis software to view and query the survey data.",
      "Capability to generate crosstabular analysis on multiple variables.",
      "Capability of setting filters and conditions.",
      "Both graphical and tabular display.",
      "GUI-based design allows end-users flexibility and ease to view and generate queries intuitively.",
      "The application could be designed as a web-based solution for data sharing across different organizations and countries.",
    ],
    image: "/assets/For_Developing/Projects_Section/pension survey.png",
  },
  {
    title:
      "High Speed Railway Corridor : Howrah-Haldia, Client - INECO, PROINTEC",
    description: [
      "Geo-referencing of toposheets.",
      "Geo-referencing of satellite imagery.",
      "Mosaicking of satellite imagery and toposheets.",
      "Marking of the alignment on satellite imagery.",
      "All digital layers in soft copy.",
      "Calculation of the land-use areas.",
      "Contour generation/ DEM.",
    ],
    image: "/assets/For_Developing/Projects_Section/high speed.png",
  },
];

const HomeProjects = () => {
  return (
    <div className="py-12 pb-0 flex flex-col gap-6 min-h-screen px-4 md:px-12">
      <h1 className="text-5xl font-semibold mb-8 text-center text-white animate-fade-in">
        Projects
      </h1>
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
        {/* IT Card */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 w-full flex flex-col h-full gap-4 p-2 pb-4 text-white rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={project.image}
              alt="Project"
              className="mb-4 h-[300px] rounded-md object-cover w-full"
            />
            <div>
              <div >
                <h1 className="text-lg font-semibold px-4 text-gray-300 mb-4">
                  {project.title}
                </h1>
              </div>
              <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex gap-2">
                    <div>→</div> {desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Link to="/projects"><button className="bg-red-800 text-white text-sm w-24 rounded hover:bg-red-600">
          Know More
        </button></Link>
      </div>
    </div>
  );
};

export default HomeProjects;

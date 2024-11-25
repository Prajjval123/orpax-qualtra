import React from "react";

const projects = [
  {
    title:
      "Health Monitoring System in the District of Agra - A GIS based Health Monitoring System : Client - FUTURE GROUP",
    description: [
      "Health Monitoring System (HMS) is a cost effective comprehensive GIS based decision making system for Urban and Rural Health scenario.",
      "A key goal of this effort is to ensure that the growing collection of high quality health data can be easily integrated into a central health GIS, allowing agencies and donor organizations to derive added value from the synthesis of their own health data with the spatial and health data developed by others.",
    ],
    image: "/public/assets/projects/project1.jpg",
  },
  {
    title:
      "Crosstab Analysis Software for All India Pension Survey : Client - NIELSEN INDIA",
    description: [
      "Crosstab provides an user-friendly analysis software to view and query the Survey data.",
      "Capability to generate crosstabular analysis on multiple variables.",
      "Capability of setting filters and conditions.",
      "Both graphical and tabular display.",
      "GUI based design allows end-users flexibility and ease to view and generate queries intuitively.",
      "The application could be designed as a web-based solution for data sharing across different organizations and countries.",
    ],
    image: "/public/assets/projects/project2.jpg",
  },
  {
    title:
      "High Speed Railway Corridor : Howrah-Haldia, Client - INECO, PROINTEC",
    description: [
      "Geo referencing of toposheets",
      "Geo referencing of Satellite Imagery.",
      "Mosaicing of satellite Imageries and Toposheets.",
      "Marking of the alignment on satellite Imagery.",
      "All digital layers in soft copy.",
      "Calculation of the land use areas.",
      "Contour Generation/ DEM.",
    ],
    image: "/public/assets/projects/project3.jpg",
  },
];

const HomeProjects = () => {
  return (
    <div className="p-24 min-h-screen bg-black pb-0">
      <h1 className="text-4xl font-semibold mb-10 text-center text-white animate-fade-in">
        Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white w-full p-4 rounded-lg shadow-lg flex flex-col items-center justify-start transform transition-transform duration-300 hover:scale-105 animate-slide-up"
          >
            <img src={project.image} alt="Project" className=" mb-4" />
            <h1 className=" text-gray-300 mb-4">{project.title}</h1>
            <ol className="text-sm text-gray-400 space-y-2">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;

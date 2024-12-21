import { useParams } from "react-router-dom";
import { mainServices } from "../constants/utils";
import HomeServices from "../components/HomeServices";
import HomeClients from "../components/HomeClients";

const ServicePage = () => {
  const { serviceName } = useParams();

  // Find the service details from the `services` object
  const allServices = [
    ...mainServices.IT_Services[0].value,
    ...mainServices.GIS_Services[0].value1,
    ...mainServices.GIS_Services[0].value2,
    ...mainServices.GIS_Services[0].value3,
  ];

  const service = allServices.find((item) => item.route.includes(serviceName));

  console.log(service.points[0].points)

  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <>
      <div className="flex flex-col gap-24">
        <div className=" text-gray-100 p-6 lg:p-12 min-h-screen">
          {/* Breadcrumb */}
          <nav className="text-lg text-gray-400 mb-8">
            <span>Services</span> / <span>IT Services</span> /{" "}
            <span className="text-red-500">{service.name}</span>
          </nav>

          <div className="lg:mx-8 bg-gray-900 backdrop-blur-xl bg-opacity-40 p-12 ">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-24 text-center pb-2 ">
              {service.name}
            </h1>

            {/* Image and Bullet Points */}
            {
              <div
                className={`  flex flex-col items-center ${service.points[0].points.length == [] ? 'lg:flex-col' : ''} lg:flex-row lg:items-start lg:justify-center gap-12 mb-12 `}
              >
                {/* Image */}
                <div className={`w-full max-w-md md:max-w-lg lg:max-w-screen-xl ${service.points[0].points.length == [] ? 'flex justify-center border-none' : ''} border-2 rounded-lg shadow-md border-white`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`rounded-lg shadow-md w-full  ${service.points[0].points.length == [] ? 'w-3/5 mx-auto' : ''} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
                  />
                </div>

                {/* Bullet Points */}
                <div
                  className={`flex flex-col gap-8 items-center lg:items-start w-full`}
                  
                >
                  {service.points[0].title && (
                    <h1 className="text-center lg:text-left font-bold text-3xl">
                      {service.points[0].title}
                    </h1>
                  )}
                  <div >
                    <ul className="text-justify lg:text-left text-gray-400 text-xl leading-relaxed pl-8 space-y-2">
                      {service.points[0].points.map((point) => (
                        <li className="list-disc transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            }

            {/* Description */}
            <div className="text-gray-300 text-lg leading-relaxed text-center lg:text-left pb-16">
              <h1 className="text-4xl font-bold pb-8 text-center">
                Description
              </h1>
              <p className="whitespace-pre-line text-justify">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 py-6">
                {service.descriptionpoints.map((descriptionpoint) => (
                  <div className="flex flex-col gap-1">
                    <h2 className="text-red-500 text-2xl text-justify whitespace-pre-line">{descriptionpoint.title}</h2>
                    <ul className={`${descriptionpoint.title=='' ? 'pl-5': ''}`}>{descriptionpoint.points.map(point => <li className={` ${descriptionpoint.title=='' ? 'list-disc': 'list-none'} whitespace-pre-line text-justify`}>{point}</li>)}</ul>
                  </div>
                ))}
              </div>
              <p className="whitespace-pre-line text-justify">
                {service.descriptionend}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16">
            <p className="text-center text-gray-400 text-sm">
              For more information, contact us today and explore the
              possibilities of the {service.name}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;

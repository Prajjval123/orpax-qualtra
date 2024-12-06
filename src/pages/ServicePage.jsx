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

  console.log(service);

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

          <div className="lg:mx-8 bg-black p-12 pb-0">
            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-100 mb-24 text-center border-b-4 pb-2  border-red-600">
              {service.name}
            </h1>

            {/* Image and Bullet Points */}
            <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 mb-12 `}>
              {/* Image */}
              <div className="flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg border-2 rounded-lg shadow-md border-red-600">
                <img
                  src={service.image}
                  alt={service.name}
                  className="rounded-lg shadow-md w-full h-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </div>

              {/* Bullet Points */}
              <div className={`flex flex-col gap-8 py-16 items-center lg:items-start w-full`}>
                {service.points[0].title && (
                  <h1 className=" text-white text-center lg:text-left font-bold text-3xl">
                    {service.points[0].title}
                  </h1>
                )}
                <div>
                  <ul className="text-center lg:text-left text-gray-400 text-xl leading-relaxed pl-8 space-y-2">
                    {service.points[0].points.map((point) => (
                      <li className="list-none lg:list-disc transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-300 text-lg leading-relaxed text-center lg:text-left">
              <h1 className="text-3xl text-white font-bold pb-8 text-center">
                Description
              </h1>
              <p>{service.description}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16">
            <p className="text-center text-gray-400 text-sm">
              For more information, contact us today and explore the
              possibilities of the cloud.
            </p>
          </div>
        </div>
        <HomeServices />
        <HomeClients />
      </div>
    </>
  );
};

export default ServicePage;

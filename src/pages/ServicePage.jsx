import { useParams } from "react-router-dom";
import { mainServices } from "../constants/utils";
import HomeServices from "../components/HomeServices";
import Clients from "./Clients";

const ServicePage = () => {
  const { serviceName } = useParams();

  // Find the service details from the `services` object
  const allServices = [
    ...mainServices.IT_Services[0].value,
    ...mainServices.GIS_Services[0].value,
  ];

  const service = allServices.find((item) => item.route.includes(serviceName));

  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <>
      <div className="bg-gray-900 text-gray-100 p-6 lg:p-12 min-h-screen">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <span>Services</span> / <span>IT Services</span> /{" "}
          <span className="text-red-500">{service.name}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center">
          {service.name}
        </h1>

        {/* Image and Bullet Points */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Image */}
          <div className="flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/assets/services/cloud-computing.jpg"
              alt="Cloud Computing"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          {/* Bullet Points */}
          <div className="flex-1">
            <ul className="list-disc pl-6 text-gray-300 text-lg leading-relaxed">
              {service.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
          <p>{service.description}</p>
        </div>

        {/* Footer */}
        <div className="mt-16">
          <p className="text-center text-gray-400 text-sm">
            For more information, contact us today and explore the possibilities
            of the cloud.
          </p>
        </div>
      </div>
      <HomeServices />
      <Clients />
    </>
  );
};

export default ServicePage;

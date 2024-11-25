import { useNavigate } from "react-router-dom";
import { mainServices } from "../constants/utils";

function ServicesDropdown({ isServiceDropdownOpen }) {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };
  return (
    <div className="relative">
      {isServiceDropdownOpen && (
        <div className="absolute bg-gray-900 border border-gray-900 mt-2 rounded shadow-lg w-96 z-10">
          <div className="grid grid-cols-2 p-4 gap-4">
            {mainServices.IT_Services.map((service) => (
              <div>
                <h4 className="font-semibold text-gray-600 border-b pb-2 mb-2">
                  {service.name}
                </h4>
                <ul className="space-y-1 text-gray-500">
                  {service.value.map((value) => (
                    <li
                      key={value.name}
                      className="hover:text-gray-400 cursor-pointer"
                      onClick={() => handleServiceClick(value.route)}
                    >
                      {value.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {mainServices.GIS_Services.map((service) => (
              <div>
                <h4 className="font-semibold text-gray-600 border-b pb-2 mb-2">
                  {service.name}
                </h4>
                <ul className="space-y-1 text-gray-500">
                  {service.value.map((value) => (
                    <li
                      key={value.name}
                      className="hover:text-gray-400 cursor-pointer"
                      onClick={() => handleServiceClick(value.route)}
                    >
                      {value.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;

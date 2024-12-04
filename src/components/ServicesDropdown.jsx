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
        <div className="absolute border border-white bg-black mt-2 rounded shadow-lg w-96 z-10050 hover:bg-black">
          <div className="grid grid-cols-2 p-4 gap-4"> 
            {mainServices.IT_Services.map((service) => (
              <div>
                <h4 className="font-semibold text-white border-b pb-2 mb-2">
                  {service.name}
                </h4>
                <ul className="space-y-1">
                  {service.value.map((value) => (
                    <li
                      key={value.name}
                      className=" hover:text-red-500 cursor-pointer"
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
                <h4 className="font-semibold text-white border-b pb-2 mb-2">
                  {service.name}
                </h4>
                <ul className="space-y-1 text-white">
                  {service.value.map((value) => (
                    <li
                      key={value.name}
                      className="hover:hover:text-red-500 cursor-pointer"
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

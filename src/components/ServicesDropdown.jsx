import { useNavigate } from "react-router-dom";
import { mainServices } from "../constants/utils";

function ServicesDropdown({ isServiceDropdownOpen, handleServiceDropdown }) {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="relative">
      {isServiceDropdownOpen && (
        <div className="absolute border border-white bg-black mt-2 rounded shadow-lg w-[1000px] z-50 p-4 animate-popup" onClick={handleServiceDropdown}>
          <div className="grid grid-cols-4 gap-4">
            {/* IT Services */}
            <div className="grid-col-1">
              {mainServices.IT_Services.map((service) => (
                <div key={service.name}>
                  <h4 className="font-semibold text-white border-b pb-2 mb-2">
                    {service.name}
                  </h4>
                  <ul className="space-y-1">
                    {service.value.map((value) => (
                      <li
                        key={value.name}
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => handleServiceClick(value.route)}
                      >
                        {value.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* GIS Services */}
            <div className="flex">
              <div className=" whitespace-nowrap">
                {mainServices.GIS_Services.map((service) => (
                  <div key={service.name}>
                    <h4 className="font-semibold  text-white border-b pb-2 mb-2">
                      {service.name}
                    </h4>
                    <div className="flex gap-4">
                    <ul className="flex gap-2 w-full max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <li className="space-y-1">
                        {service.value1.map((value) => (
                          <li
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </li>
                        ))}
                      </li>
                    </ul>
                    <ul className="flex gap-2 w-full">
                      <li className="space-y-1">
                        {service.value2.map((value) => (
                          <li
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </li>
                        ))}
                      </li>
                    </ul>
                    <ul className="flex gap-2 w-full">
                      <li className="space-y-1">
                        {service.value3.map((value) => (
                          <li
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </li>
                        ))}
                      </li>
                    </ul>
                    </div>
                    
                  </div>
                ))}
              </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;

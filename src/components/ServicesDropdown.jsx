function ServicesDropdown({ isServiceDropdownOpen }) {
  return (
    <div className="relative">
      {isServiceDropdownOpen && (
        <div className="absolute bg-gray-900 border border-gray-900 mt-2 rounded shadow-lg w-96 z-10">
          <div className="grid grid-cols-2 p-4 gap-4">
            <div>
              <h4 className="font-semibold text-gray-600 border-b pb-2 mb-2">
                IT Services
              </h4>
              <ul className="space-y-1 text-gray-500">
                <li className="hover:text-gray-400 cursor-pointer">
                  Cloud Computing
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Full Stack Development
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Smart City Applications
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Mobile App Development
                </li>
                <li className="hover:text-gray-400 cursor-pointer">AI Bots</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-600 border-b pb-2 mb-2">
                GIS Services
              </h4>
              <ul className="space-y-1 text-gray-500">
                <li className="hover:text-gray-400 cursor-pointer">
                  GIS Mapping
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Digitization
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Land Use Map Preparation
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Watershed Analysis
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Remote Sensing
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;

const ServicePage = () => {
  return (
    <div className="bg-gray-100 p-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <span>Services</span> / <span>IT Services</span> /{" "}
        <span className="text-red-500">Cloud Computing</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Cloud Computing Services
      </h1>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <img
          src="your-image-path.jpg"
          alt="Cloud Computing"
          className="rounded-lg shadow-lg"
        />

        {/* Text */}
        <div>
          <ul className="list-disc pl-5 mb-4">
            <li>Expertise on AWS, Azure, and Google Cloud Platform.</li>
            <li>Leverage the latest cloud computing solutions.</li>
            <li>End-to-end solutions for cloud computing needs.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Want to deploy cloud computing services but unsure where to start?
            Let us help...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

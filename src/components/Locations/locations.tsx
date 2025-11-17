import { FaMapMarkerAlt, FaCity, FaBuilding, FaExternalLinkAlt, FaPhoneAlt } from 'react-icons/fa';

const OfficeLocations = () => {
  // Fixed gradient classes for each color
  const colorMap = {
    amber: {
      gradient: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
      text: 'text-amber-500',
    },
    emerald: {
      gradient: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      text: 'text-emerald-500',
    },
    blue: {
      gradient: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      text: 'text-blue-500',
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      text: 'text-purple-500',
    },
  };

  const offices = [
    {
      city: 'Jaipur',
      address: 'D-8, Near World Trade Park, D-Block, Malviya Nagar',
      landmark: 'World Trade Park',
      state: 'Rajasthan 302017',
      iconColor: 'bg-amber-500',
      colorName: 'amber',
      mapLink: 'https://maps.google.com/?q=D-8, Near World Trade Park, D-Block, Malviya Nagar, Jaipur',
      phone: '+91 9876543210',
    },
    {
      city: 'Indore',
      address: '401, 4th Floor, Near Sky Corporate Tower, Scheme No 78, AB Road',
      landmark: 'Vijay Nagar',
      state: 'Madhya Pradesh',
      iconColor: 'bg-emerald-500',
      colorName: 'emerald',
      mapLink: 'https://maps.google.com/?q=401, 4th Floor, Near Sky Corporate Tower, Scheme No 78, AB Road, Indore',
      phone: '+91 9123456789',
    },
    {
      city: 'Jodhpur',
      address: 'B-13, Shastri Nagar, Near Shastri Circle',
      landmark: 'Shastri Circle',
      state: 'Rajasthan',
      iconColor: 'bg-blue-500',
      colorName: 'blue',
      mapLink: 'https://maps.google.com/?q=B-13, Shastri Nagar, Near Shastri Circle, Jodhpur',
      phone: '+91 9988776655',
    },
    {
      city: 'Udaipur',
      address: '45, Moti Magri Scheme, Zinc Park',
      landmark: 'Moti Magri',
      state: 'Rajasthan 313001',
      iconColor: 'bg-purple-500',
      colorName: 'purple',
      mapLink: 'https://maps.google.com/?q=45, Moti Magri Scheme, Zinc Park, Udaipur',
      phone: '+91 9876501234',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-purple-600">
              Our Offices
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our conveniently located offices across Rajasthan and Madhya Pradesh
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => {
            const colors = colorMap[office.colorName];
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-2 relative flex flex-col justify-between"
              >
                {/* Top Decorative Line */}
                <div className={`${office.iconColor} h-2 w-full`}></div>

                {/* Card Content */}
                <div className="p-6 flex-1">
                  <div className="flex items-center mb-4">
                    <div
                      className={`${office.iconColor} p-3 rounded-full text-white mr-4 shadow-md group-hover:scale-105 transition-transform duration-200`}
                    >
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                      {office.city}
                    </h3>
                  </div>

                  {/* Address & Landmark */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <FaBuilding className={`mt-1 mr-3 ${colors.text}`} />
                      <p className="text-gray-700">{office.address}</p>
                    </div>

                    <div className="flex items-start">
                      <FaCity className={`mt-1 mr-3 ${colors.text}`} />
                      <div>
                        <p className="text-gray-700 font-medium">{office.landmark}</p>
                        <p className="text-gray-500">{office.state}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="p-6 pt-0">
                  <div className="flex gap-3">
                    {/* Get Directions Button */}
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 bg-gradient-to-r ${colors.gradient} text-white`}
                    >
                      <FaExternalLinkAlt size={14} /> Directions
                    </a>

                    {/* Contact Button */}
                    <a
                      href={`tel:${office.phone}`}
                      className="flex-1 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 text-gray-800"
                    >
                      <FaPhoneAlt size={14} /> Contact
                    </a>
                  </div>
                </div>

                {/* Decorative Top-Right Circle */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 opacity-10 ${office.iconColor} rounded-bl-full`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;

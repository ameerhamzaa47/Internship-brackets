import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>

      {/* About Us Description */}
      <div className="text-center text-lg text-gray-600 mb-8">
        <p>
          Welcome to our website! We are a passionate team dedicated to
          bringing you the best services and experiences. Our mission is to
          provide high-quality products and services that meet the needs of our
          customers, and we pride ourselves on creating a positive impact in our
          community.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-indigo-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Integrity</h2>
          <p className="text-gray-600">
            We believe in honesty, transparency, and ethical practices in all
            aspects of our business. Integrity is at the core of everything we
            do.
          </p>
        </div>
        <div className="p-6 bg-green-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Innovation</h2>
          <p className="text-gray-600">
            We embrace creativity and new ideas to improve our products and
            services. We strive to stay ahead of the curve and constantly evolve
            to meet the changing needs of our customers.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Customer Focus</h2>
          <p className="text-gray-600">
            Our customers are at the heart of everything we do. We listen to
            their feedback and work hard to exceed their expectations every
            time.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Our journey began with a small group of passionate individuals who
          wanted to make a difference in the industry. Since then, we have
          grown into a team of talented professionals who share a common
          vision of creating innovative solutions that improve the lives of our
          customers. We are proud of what we’ve achieved so far, but we are
          even more excited about the future.
        </p>
      </div>

      {/* Contact Us Button (Optional) */}
      <div className="mt-12 text-center">
        <a href="/contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300">Get In Touch</a>
      </div>
    </div>
  );
};

export default AboutUs;

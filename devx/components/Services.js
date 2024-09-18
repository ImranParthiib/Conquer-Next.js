// components/Services.js

import React from "react";

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p>
              We build responsive and scalable web applications using the latest
              technologies.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
            <p>
              Our team creates mobile applications that provide a seamless user
              experience.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p>
              We design user interfaces that are both visually appealing and
              easy to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

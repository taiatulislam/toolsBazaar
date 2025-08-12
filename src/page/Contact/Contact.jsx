import React from "react";
import messageImg1 from "../../assets/png/contact.png";

const Contact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-10 px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Visit Our{" "}
            <span className="bg-red-600 text-white px-3 rounded">Main</span>{" "}
            Office
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Bashundhara Rd, Dhaka 1229
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="container mx-auto h-[500px] rounded-lg colspan-1 lg:col-span-2">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.660451257071!2d90.42549751538485!3d23.762873394094117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a39e0e4fc1%3A0x2fc04b0a4f841063!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1722257501000!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          <div className="mx-auto rounded-lg">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
              <p className="mt-1 text-gray-600">
                {" "}
                Basundhara Residential Area, Dhaka - 1229
              </p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Hours</h3>
              <p className="mt-1 text-gray-600">
                Sunday - Wednesday: 9am - 5pm
              </p>
              <p className="mt-1 text-gray-600">Saturday: 10am - 1pm</p>
              <p className="mt-1 text-gray-600">Friday: Closed</p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Contact</h3>
              <p className="mt-1 text-gray-600">Email: info@example.com</p>
              <p className="mt-1 text-gray-600">Phone: +880 123 456 789</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row items-center lg:items-end justify-center gap-7 mx-auto container py-15 bg-white px-5">
        <img
          src={messageImg1}
          alt="Conatct"
          className="h-[250px] lg:h-[450px] block"
        />
        <div>
          <h1 className="text-3xl text-[#333] font-extrabold text-center">
            Leave a message
          </h1>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-yellow-600 resize-none"
            ></textarea>
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-400 font-semibold rounded-md text-sm px-4 py-3 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

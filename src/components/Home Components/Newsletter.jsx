const Newsletter = () => {
  return (
    <div className="bg-[url('https://as2.ftcdn.net/v2/jpg/04/65/81/67/1000_F_465816712_bJPZ9ahoO71J0H2SLxBCWHN3LxyHMwIf.jpg')] bg-[#000000c2] bg-blend-overlay">
      <div className="container mx-auto py-16">
        <div className="px-8">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Stay Updated with Our{" "}
              <span className="text-yellow-400">Newsletter</span>
            </h2>
            <p className="mt-4 text-sm md:text-base lg:text-xl text-gray-300 w-2/3 lg:w-1/2 mx-auto pb-3">
              Subscribe to our newsletter and get the latest news, updates, and
              insights in the world of hardware tech.
            </p>
          </div>

          <form className="flex items-center justify-center mt-5 w-full">
            <input
              type="email"
              name="userEmail"
              className="p-4 rounded-lg w-1/2 bg-white focus:outline-none focus:ring-0 focus:border-none"
              placeholder="Enter your email"
            />
            <div>
              <button
                type="submit"
                className="bg-yellow-400 font-semibold px-4 py-4 -ml-3 rounded-tr-lg rounded-br-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

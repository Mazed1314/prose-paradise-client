import { NavLink } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="my-auto w-full">
        <div className="w-8/12 mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium">
            Subscribe to our monthly newsletter
          </h2>
          <p className="py-6 text-gray-500">
            Stay up-to-date about latest tech and new world. Unsubscribe at
            anytime!
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto flex flex-col gap-5 my-10 w-7/12">
          <input
            className="w-full border pl-3 py-2"
            placeholder="full name"
            type="text"
          />
          <input
            className="w-full border pl-3 py-2"
            placeholder="your email address"
            type="text"
          />
          <NavLink
            to={"/"}
            className="w-full text-lg border py-2 rounded-0 text-center hover:bg-black hover:text-white"
          >
            Subscribe
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

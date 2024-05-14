import { LuTimer } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { NavLink } from "react-router-dom";

const PostOfTheMonth = () => {
  return (
    <div
      className="hero lg:h-[500px]"
      style={{
        backgroundImage: "url(/images/post-of-the-month.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>

      <div className=" hero-content text-center text-neutral-content flex flex-col">
        <div className=" lg:-mt-10">
          <NavLink className="px-2 py-1 font-medium bg-white text-xl text-black hover:bg-black hover:text-white">
            Blog of the month
          </NavLink>
        </div>
        <div className="">
          <div className=" text-center">
            <span className="flex gap-2 justify-center">
              <span className="flex">
                <MdDateRange className="pt-1 text-2xl" />
                28th Apr, 2024
              </span>{" "}
              •{" "}
              <span className="flex">
                <LuTimer className="pt-1 text-2xl" />
                02 min read{" "}
              </span>
            </span>
          </div>
          <h2 className="my-4 font-medium text-2xl md:text-3xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            The nine-to-five Is Dead. Here’s What to Replace It With
          </h2>
          by
          <div className="flex justify-center gap-2">
            <img
              src="/images/Jess-Cathell-Fashion-Lifestyle-Blogger-Influencer-Rocking-Instagram.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <span className="text-lg pt-2">Alexander Hipp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOfTheMonth;

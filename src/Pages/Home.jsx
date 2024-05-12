import { FaStarOfLife } from "react-icons/fa";
import Banner from "../Components/Banner";
import Newsletter from "../Components/Newsletter";
import RecentBlog from "../Components/RecentBlog";
import { NavLink } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";

const Home = () => {
  return (
    <div>
      {/* banner sction */}
      <div className="">
        <Banner></Banner>
      </div>
      {/* recent blog sction */}
      <div className="">
        <div className="flex justify-between">
          <span className="flex">
            <FaStarOfLife />
            <span className="text-3xl">Recent Blolg</span>
          </span>
          <NavLink
            className={
              "flex border border-black px-2 pt-1 hover:bg-black hover:text-white"
            }
            to={"/all-blogs"}
          >
            All blog <CgArrowTopRight />
          </NavLink>
        </div>
        <RecentBlog></RecentBlog>
      </div>
      {/* newsletter sction */}
      <div className="my-10">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;

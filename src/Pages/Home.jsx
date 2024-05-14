import { FaStarOfLife } from "react-icons/fa";
import Banner from "../Components/Banner";
import Newsletter from "../Components/Newsletter";
import RecentBlog from "../Components/RecentBlog";
import { NavLink } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import PostOfTheMonth from "../Components/PostOfTheMonth";
import TopAuthors from "../Components/TopAuthors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ProseParadise</title>
      </Helmet>
      {/* banner sction */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.9, delay: 0.25 }}
      >
        <Banner></Banner>
      </motion.div>
      {/* recent blog sction */}
      <div className="">
        <div className="flex justify-between">
          <span className="flex gap-2">
            <FaStarOfLife className="mt-3 text-xl text-blue-700 " />
            <span className="text-3xl font-semibold">
              Recent <span className="text-blue-700">Blog</span>
            </span>
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
      {/* top authors */}
      <div className="mb-10">
        <div className="flex justify-between">
          <span className="flex gap-2">
            <FaStarOfLife className="mt-3 text-xl text-blue-700 " />
            <span className="text-3xl font-semibold">Top Authors</span>
          </span>
          <NavLink
            className={
              "flex border border-black px-2 pt-1 hover:bg-black hover:text-white"
            }
            to={""}
          >
            All Author <CgArrowTopRight />
          </NavLink>
        </div>
        <TopAuthors></TopAuthors>
      </div>
      {/* post of the month */}
      <div className="">
        <PostOfTheMonth></PostOfTheMonth>
      </div>
      {/* newsletter sction */}{" "}
      <div className="my-10">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;

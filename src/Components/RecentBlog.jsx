import BlogCard from "./BlogCard";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RecentBlog = () => {
  const { data: getBlog = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["blog"],
  });
  const getData = async () => {
    const { data } = await axios(
      `https://prose-paradise-server.vercel.app/blog`
    );
    return data;
  };
  // console.log(getBlog);

  return (
    <div className="bg-no-repeat bg-cover p-2">
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 py-8 md:py-20">
        {getBlog.slice(0, 6).map((Blog) => (
          <>
            <BlogCard key={Blog._id} Blog={Blog}></BlogCard>
          </>
        ))}
      </div>
    </div>
  );
};

RecentBlog.propTypes = {
  Blog: PropTypes.object,
};

export default RecentBlog;

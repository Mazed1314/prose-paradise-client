import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const RecentBlog = () => {
  const getBlog = useLoaderData();
  console.log(getBlog);

  return (
    <div className="bg-no-repeat bg-cover min-h-screen p-2">
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

export default RecentBlog;

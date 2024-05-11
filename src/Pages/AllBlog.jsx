import { useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const AllBlog = () => {
  const getBlog = useLoaderData();
  console.log(getBlog);
  return (
    <div className=" min-h-screen p-2">
      <div className="flex gap-2 md:w-7/12">
        <label className="form-control w-4/12">
          <div className="label">
            <span className="label-text">Filtered by category</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              All
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Search blogs by blog title</span>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type here "
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="search"
              className="btn btn-md border text-white bg-black text-lg font-bold"
            />
          </div>
        </label>
      </div>
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 py-8 md:py-20">
        {getBlog.map((Blog) => (
          <>
            <BlogCard key={Blog._id} Blog={Blog}></BlogCard>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;

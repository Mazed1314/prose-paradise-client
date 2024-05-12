import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FeaturedBlog = () => {
  const [getData, setData] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await axios(
        `https://prose-paradise-server.vercel.app/api/top-posts`
      );
      setData(data);
    };
    getBlog();
  }, []);
  console.log(getData);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-200 my-6">
        <thead>
          <tr className="bg-black text-white">
            <th className="py-4 px-6 text-lg text-center">SI</th>
            <th className="py-4 px-6 text-lg text-center">Title</th>
            <th className="py-4 px-6 text-lg text-center">Blog Owner</th>
            <th className="py-4 px-6 text-lg text-center">Owner Photo</th>
            <th className="py-4 px-6 text-lg text-center">Action</th>
          </tr>
        </thead>
        {getData.map((blog, index) => (
          <>
            <tr className="hover:bg-gray-50 border-b py-1">
              <td className="px-3 text-center">{index + 1}</td>
              <td className="px-3 text-lg font-medium text-center">
                {blog.title}
              </td>
              <td className="px-3 text-center">{blog.user_name}</td>
              <td className="px-3 flex justify-center py-2">
                <img
                  src={blog.user_image}
                  alt="blog owner"
                  className="h-14 w-14 border shadow-md object-cover rounded-full"
                />
              </td>
              <td className="px-3 text-lg font-medium text-center">
                <NavLink
                  to={`/view-details/${blog._id}`}
                  className="btn btn-sm mt-2 rounded text-black border-black bg-transparent hover:bg-black hover:text-white"
                >
                  <FaRegEye />
                </NavLink>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};
export default FeaturedBlog;

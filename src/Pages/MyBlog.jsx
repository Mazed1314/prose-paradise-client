import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import MyBlogCard from "../Components/MyBlogCard";
import { useQuery } from "@tanstack/react-query";

const MyBlog = () => {
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { data: item = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["my-blog"],
  });
  const getData = async () => {
    const { data } = await axios(
      `https://prose-paradise-server.vercel.app/my-blog/${user?.email}`
    );
    return data;
  };

  return (
    <div>
      <Helmet>
        <title>ProseParadise | My Blogs</title>
      </Helmet>
      {item < 1 ? (
        <div className=" h-96 flex flex-col justify-center">
          <h2 className="text-center mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Oops
          </h2>
          <h2 className="text-center text-3xl">You have no Blog Now !</h2>
          <p className="mt-4 text-gray-500 text-center mb-2">For Add Blog</p>
          <div className="flex justify-center">
            <button
              className="bg-white btn btn-sm text-black border border-black px-2 rounded-lg"
              onClick={() => Navigate("/add-blog")}
            >
              Add Blog
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-[90%] shadow-md border mx-auto border-gray-200 my-6">
              <thead>
                <tr className="bg-black text-white">
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Image
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Title
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Short Description
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Category
                  </th>
                  <th className="py-4 px-6 text-lg border-b text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {item.map((card) => (
                  <>
                    <MyBlogCard card={card}></MyBlogCard>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBlog;

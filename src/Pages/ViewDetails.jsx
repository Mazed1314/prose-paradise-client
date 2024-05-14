import { useContext } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Comment from "../Components/Comment";
import { MdDateRange } from "react-icons/md";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const cards = useLoaderData();
  const { _id } = useParams();
  // console.log(_id);
  const card = cards.find((blog) => blog._id == _id);
  const {
    title,
    category,
    long_description,
    short_description,
    image,
    email,
    blogger_name,
    blogger_image,
    publishDate,
  } = card;
  const blogOwner = email;
  const currentUserEmail = user.email;
  const currentUserName = user.displayName;
  const currentUserImage = user.photoURL;
  const info = {
    blogOwner,
    currentUserEmail,
    currentUserName,
    currentUserImage,
    _id,
  };
  return (
    <div className="">
      <div className="mx-2 md:mx-20 bg-transparent">
        <Helmet>
          <title>ProseParadise | blog-details : {_id}</title>
        </Helmet>

        <h2 className="text-center font-bold text-2xl my-6 pt-4 rounded-t-md">
          {title}
        </h2>

        <div className="flex gap-2">
          <img
            src={blogger_image}
            alt=""
            className="w-12 h-12 border rounded-full"
          />
          <div className="mb-2 flex gap-1 text-gray-600">
            <span className="font-medium text-lg">{blogger_name} </span>|
            <span className="flex">
              <MdDateRange className="mt-1" />
              {publishDate}
            </span>{" "}
            |
            <span className="text-gray-600 text-md font-medium">
              {category}
            </span>
          </div>
        </div>

        <div className="px-2 md:px-8">
          <p className="py-4 md:py-8 text-lg text-gray-500">
            {short_description}
          </p>
        </div>
        <div className="px-2 ">
          <div className="w-full mx-4">
            <img src={image} alt="" className="w-full h-[200px] lg:h-[400px]" />
          </div>
        </div>

        <div className="px-2 md:px-8">
          <div className="py-4 md:py-8 text-lg text-gray-500">
            {long_description}
          </div>
        </div>
        <div className="mb-10">
          {blogOwner === currentUserEmail && (
            <div className="flex justify-center">
              <NavLink
                to={`/edit-blog/${_id}`}
                className="btn btn-sm mt-2 rounded text-black border-black bg-transparent hover:bg-black hover:text-white"
              >
                Update blog
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* comment section */}

      <Comment info={info}></Comment>
    </div>
  );
};

export default ViewDetails;

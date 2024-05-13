import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ Blog }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    category,
    short_description,
    long_description,
    image,
    blogger_name,
    publishDate,
  } = Blog;

  const name = user?.displayName;
  const email = user?.email;
  const b_id = _id;
  const handleWishList = () => {
    const addNewBlog = {
      title,
      category,
      short_description,
      long_description,
      image,
      name,
      b_id,
      email,
      blogger_name,
      publishDate,
    };
    const url = "https://prose-paradise-server.vercel.app/wishList";
    {
      user
        ? // send data to the server
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addNewBlog),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: " Successfully Added to Wish list",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            })
        : Swal.fire({
            title: "Warning!",
            text: "sorry you can't add to wish list, At first sign in.",
            icon: "warning",
            confirmButtonText: "ok",
          });
    }
  };

  return (
    <div>
      <div className="">
        <div className="rounded border shadow-xl">
          <figure>
            <img src={image} alt="image" className="w-full h-[200px]" />
          </figure>
          <div className="px-4 py-2 h-auto flex flex-col justify-between">
            <h2 className="card-title pb-2">{title}</h2>
            <div className="flex justify-between">
              <div className="mb-2 text-gray-600">
                By <span className="font-medium">{blogger_name}</span>{" "}
                <span className="flex">
                  <MdDateRange className="mt-1" />
                  {publishDate}
                </span>
              </div>
              <div className="">
                <span className="font-medium rounded-full py-1 px-2 bg-gray-200">
                  {category}
                </span>
              </div>
            </div>

            <p>{short_description.slice(0, 100)}...</p>

            <div className="flex justify-around gap-4 my-3">
              <NavLink
                to={`/view-details/${_id}`}
                className="px-1 text-center font-semibold rounded border border-black bg-transparent hover:bg-black hover:text-white"
              >
                View Details
              </NavLink>
              <NavLink
                onClick={handleWishList}
                className="px-1 text-center font-semibold rounded text-blue-700 border border-blue-700 bg-transparent hover:bg-blue-700 hover:text-white"
              >
                Add WishList
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  Blog: PropTypes.object,
};

export default BlogCard;

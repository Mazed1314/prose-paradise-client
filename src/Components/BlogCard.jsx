import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const BlogCard = ({ Blog }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, category, short_description, long_description, image } =
    Blog;

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
          <div className="p-4 h-[250px] flex flex-col justify-between">
            <div className="px-0 flex justify-between">
              <h2 className="card-title">{title}</h2>
              <div className="">
                <span className="font-medium rounded-full py-1 px-2 bg-gray-200">
                  {category}
                </span>
              </div>
            </div>
            <p>{short_description}</p>

            <div className="flex justify-around gap-4 my-3">
              <NavLink
                to={`/view-details/${_id}`}
                className="px-1 text-center font-semibold rounded border border-black bg-transparent hover:bg-black hover:text-white"
              >
                View Details
              </NavLink>
              <NavLink
                onClick={handleWishList}
                className="px-1 text-center font-semibold rounded text-yellow-600 border border-yellow-600 bg-transparent hover:bg-yellow-600 hover:text-white"
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

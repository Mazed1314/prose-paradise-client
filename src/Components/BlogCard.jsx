import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const BlogCard = ({ Blog }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, category, short_description, long_description, image } =
    Blog;

  const name = user.displayName;
  const email = user.email;
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

    // console.log(addNewBlog);
    const url = "https://prose-paradise-server.vercel.app/wishList";
    // send data to the server
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
      });
  };

  return (
    <div>
      <div className="">
        <div className="rounded border h-full">
          <figure>
            <img src={image} alt="image" className="w-full h-[200px]" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{title}</h2>
              <h2 className="">{category}</h2>
            </div>

            <p>{short_description}...</p>
          </div>
          <div className="flex justify-around gap-4 my-6">
            <NavLink
              to={`/view-details/${_id}`}
              className="px-1 text-center rounded border border-black bg-transparent hover:bg-black hover:text-white"
            >
              View Details
            </NavLink>
            <NavLink
              onClick={handleWishList}
              className="px-1 text-center rounded text-yellow-600 border border-yellow-600 bg-transparent hover:bg-yellow-600 hover:text-white"
            >
              Add WishList
            </NavLink>
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

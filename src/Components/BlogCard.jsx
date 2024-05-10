import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const BlogCard = ({ Blog }) => {
  const { _id, title, category_name, short_description, photo } = Blog;
  return (
    <div>
      <div className="">
        <div className="rounded border h-full">
          <figure>
            <img src={photo} alt="image" className="w-full h-[200px]" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{title}</h2>
              <h2 className="">{category_name}</h2>
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
              to={`/`}
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

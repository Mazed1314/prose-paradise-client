import { NavLink } from "react-router-dom";

const RecentBlog = () => {
  return (
    <div>
      <div className="">
        <div className="rounded border h-full">
          <figure>
            <img src="photo" alt="image" className="w-full h-[200px]" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">title</h2>
              <h2 className="">category</h2>
            </div>

            <p>short_description...</p>
            <div className="card-actions justify-center">
              <NavLink
                to={`/view-details/`}
                className="btn btn-sm mt-2 rounded text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white"
              >
                View Details
              </NavLink>
              <NavLink
                to={`/view-details/`}
                className="btn btn-sm mt-2 rounded text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white"
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

export default RecentBlog;

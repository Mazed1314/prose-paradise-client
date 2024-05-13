import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { MdDateRange } from "react-icons/md";

const WishListCard = ({ card }) => {
  const {
    _id,
    b_id,
    title,
    category,
    short_description,
    image,
    blogger_name,
    publishDate,
  } = card;

  const handledeleteWishList = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://prose-paradise-server.vercel.app/wishList/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", " remove from wish list.", "success");
            }
            window.location.reload();
          });
      }
    });
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
                to={`/view-details/${b_id}`}
                className="px-1 text-center rounded border border-black bg-transparent hover:bg-black hover:text-white"
              >
                View Details
              </NavLink>
              <NavLink
                onClick={() => handledeleteWishList(_id)}
                className="px-1 text-center rounded text-white bg-red-600 hover:bg-blue-700 hover:text-white"
              >
                Remove
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WishListCard.propTypes = {
  card: PropTypes.object,
};

export default WishListCard;

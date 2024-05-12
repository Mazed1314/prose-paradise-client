import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const WishListCard = ({ card }) => {
  const { _id, b_id, title, category, short_description, image } = card;

  const handledeleteWishList = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
              window.location.reload();
            }
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
          <div className="p-4 h-auto flex flex-col justify-between">
            <div className="px-0 flex justify-between">
              <h2 className="card-title">{title}</h2>
              <div className="">
                <span className="font-medium rounded-full py-1 px-2 bg-gray-200">
                  {category}
                </span>
              </div>
            </div>
            <p className="text-gray-700 py-2">
              {short_description.slice(0, 100)}
            </p>

            <div className="flex justify-around gap-4 my-3">
              <NavLink
                to={`/view-details/${b_id}`}
                className="px-1 text-center rounded border border-black bg-transparent hover:bg-black hover:text-white"
              >
                View Details
              </NavLink>
              <NavLink
                onClick={() => handledeleteWishList(_id)}
                className="px-1 text-center rounded text-yellow-600 border border-yellow-600 bg-transparent hover:bg-yellow-600 hover:text-white"
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

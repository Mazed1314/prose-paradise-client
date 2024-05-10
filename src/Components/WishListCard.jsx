import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const WishListCard = ({ card }) => {
  const { _id, b_id, title, category, short_description, image } = card;
  const navigate = useNavigate();
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
            navigate("/wish-list");
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", " remove from wish list.", "success");
            }
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
              to={`/view-details/${b_id}`}
              className="px-1 text-center rounded border border-black bg-transparent hover:bg-black hover:text-white"
            >
              View Details
            </NavLink>
            <NavLink
              onClick={() => handledeleteWishList(_id)}
              className="px-1 text-center rounded text-yellow-600 border border-yellow-600 bg-transparent hover:bg-yellow-600 hover:text-white"
            >
              Delete WishList
            </NavLink>
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

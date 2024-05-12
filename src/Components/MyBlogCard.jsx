import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";

const MyBlogCard = ({ card }) => {
  const { _id, title, category, short_description, image } = card;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`https://prose-paradise-server.vercel.app/blog/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your craft has been deleted.", "success");
              window.location.reload();
            }
          });
      }
    });
  };
  return (
    <tr className="hover:bg-gray-50 border-b py-1">
      <td className="px-3">
        <img
          src={image}
          alt="table navigate ui"
          className="h-16 w-20 object-cover bg-gray-300"
        />
      </td>
      <td className="px-3 text-lg font-medium">{title}</td>
      <td className="px-3">{short_description}</td>
      <td className="px-3 text-lg font-medium">{category}</td>
      <td className="px-3 text-lg font-medium">
        <div className="flex gap-1">
          <NavLink
            to={`/view-details/${_id}`}
            className="btn btn-sm mt-2 rounded text-black border-black bg-transparent hover:bg-black hover:text-white"
          >
            <FaRegEye />
          </NavLink>
          <NavLink
            to={`/edit-blog/${_id}`}
            className="btn btn-sm mt-2 rounded text-black border-black bg-transparent hover:bg-black hover:text-white"
          >
            <FiEdit />
          </NavLink>
          <NavLink
            onClick={() => handleDelete(_id)}
            className="btn btn-sm mt-2 rounded text-black border-black bg-transparent hover:bg-black hover:text-white"
          >
            <MdOutlineDelete className="text-xl" />
          </NavLink>
        </div>
      </td>
    </tr>
  );
};

MyBlogCard.propTypes = {
  card: PropTypes.object,
};

export default MyBlogCard;

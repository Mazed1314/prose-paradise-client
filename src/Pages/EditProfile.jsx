import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import auth from "../Firebase/Firebase.config";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        e.target.reset();
        Swal.fire({
          title: "Success!",
          text: "Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(-1);
      })
      .catch((error) => {
        const notifyError = () => toast.error(error.message);
        notifyError();
      });
  };

  return (
    <div>
      <div className="hero md:min-h-screen rounded-t-md">
        {/* <Helmet>
          <title>Edit user</title>
        </Helmet> */}
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold">
              Update Your profile
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleUpdate}
              className="card-body pb-0 border border-pink-800 rounded-xl"
            >
              <div className="form-control">
                <label className="label">
                  <span name="test" className="label-text">
                    New Name
                  </span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Photo Link</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  defaultValue={user.photoURL}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control my-4 py-2">
                <button className="btn btn-sm bg-sky-400 text-white">
                  Update
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

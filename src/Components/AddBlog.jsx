import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const blogger_image = user.photoURL;

  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const category = form.category_name.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const image = form.photo.value;
    const email = form.email.value;
    const blogger_name = form.user_name.value;
    const publishDate = new Date().toISOString().split("T")[0];

    const addNewBlog = {
      title,
      category,
      short_description,
      long_description,
      image,
      email,
      blogger_name,
      blogger_image,
      publishDate,
    };

    const url = "https://prose-paradise-server.vercel.app/addBlog";
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
            text: "Blog Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(-1);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Blog</title>
      </Helmet>
      <div className="bg-transparent border border-black shadow-2xl p-4 md:w-2/3 mx-auto rounded-md my-16">
        <h2 className="text-3xl text-center font-semibold my-4">Add a Blog</h2>
        <form onSubmit={handleAddBlog}>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  User Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="user_name"
                  defaultValue={user.displayName}
                  placeholder="user name"
                  className="input input-bordered border-black w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  User Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={user.email}
                  placeholder="user email"
                  className="input input-bordered border-black w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className="input input-bordered border-black w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-semibold">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="give image URL"
                className="input input-bordered border-black  w-full"
                required
              />
            </label>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Category Name
                </span>
              </label>
              <select
                name="category_name"
                className="rounded-md border border-black"
              >
                <option value="Poem">Poem</option>
                <option value="Novel">Novel</option>
                <option value="Fantasy">Fantasy </option>
                <option value="Epic">Epic</option>
                <option value="Comic">Comic</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Gothic">Gothic</option>
                <option value="Play">Play</option>
              </select>
            </div>
            <div className="form-control col-span-3">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Short Description
                </span>
              </label>
              <textarea
                className="rounded-lg pl-3 pt-2 border border-black bg-base-200"
                name="short_description"
                placeholder="short description"
                rows="3"
                cols="40"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Long Description
              </span>
            </label>
            <textarea
              className="rounded-lg pl-3 pt-2 border border-black bg-base-200"
              name="long_description"
              placeholder="long description"
              rows="5"
              cols="40"
              required
            ></textarea>
          </div>

          <div className="flex justify-center my-4">
            <input
              type="submit"
              value="Add"
              className="btn btn-md border text-white bg-black text-lg font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditBlog = () => {
  const item = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    title,
    category,
    short_description,
    long_description,
    image,
    user_name,
    email,
  } = item;

  const handleUpdateCraft = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const category = form.category_name.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const image = form.photo.value;

    const updateBlog = {
      title,
      category,
      short_description,
      long_description,
      image,
      email,
      user_name,
    };
    console.log(updateBlog);
    fetch(`https://prose-paradise-server.vercel.app/blog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
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
        <title>Edit Card</title>
      </Helmet>
      <div className="bg-transparent border border-yellow-600 shadow-2xl p-4 md:w-2/3 mx-auto rounded-md my-16">
        <h2 className="text-3xl text-center font-semibold my-4">Edit Blog</h2>
        <form onSubmit={handleUpdateCraft}>
          <div className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={title}
                  name="title"
                  placeholder="title"
                  className="input input-bordered border-yellow-600 w-full"
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
                defaultValue={image}
                type="text"
                name="photo"
                placeholder="give image URL"
                className="input input-bordered border-yellow-600  w-full"
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
                defaultValue={category}
                name="category_name"
                className="rounded-md border border-yellow-600"
              >
                <option value="Poem">Poem</option>
                <option value="Novel">Novel</option>
                <option value="Fiction">Fiction </option>
                <option value="Epic">Epic</option>
                <option value="Comic">Comic</option>
              </select>
            </div>
            <div className="form-control col-span-3">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Short Description
                </span>
              </label>
              <textarea
                className="rounded-lg pl-3 pt-2 border border-yellow-600 bg-base-200"
                name="short_description"
                defaultValue={short_description}
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
              className="rounded-lg pl-3 pt-2 border border-yellow-600 bg-base-200"
              name="long_description"
              defaultValue={long_description}
              placeholder="long description"
              rows="5"
              cols="40"
              required
            ></textarea>
          </div>

          <div className="flex justify-center my-4">
            <input
              defaultValue={image}
              type="submit"
              value="Update"
              className="btn btn-md border text-white bg-black text-lg font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;

// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import BlogCard from "../Components/BlogCard";
import { useEffect, useState } from "react";

const AllBlog = () => {
  // const getBlog = useLoaderData();
  const [blogPerPage] = useState(6);
  const [blog, setBlog] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await axios(`http://localhost:5000/blog`);
      // setBlog(data);
      setCount([data.length]);
    };
    getBlog();
  }, [filter, search]);
  useEffect(() => {
    const getBlog = async () => {
      const { data } = await axios(
        `http://localhost:5000/all-blog?page=${currentPage}&size=${blogPerPage}&filter=${filter}&search=${search}`
      );
      setBlog(data);
      // setCount([data.length]);
    };
    getBlog();
  }, [currentPage, blogPerPage, filter, search]);
  // console.log(count);

  const numberOfPage = Math.ceil(count / blogPerPage);
  const pages = [...Array(numberOfPage).keys()];
  // console.log(pages);

  const handlePageButton = (v) => {
    // console.log(v);
    setCurrentPage(v);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    setSearch(title);
    console.log(search);
    // e.target.title.value = null;
  };

  return (
    <div className=" min-h-screen p-2">
      <div className="flex gap-2 md:w-7/12">
        <label className="form-control w-4/12">
          <div className="label">
            <span className="label-text">Filtered by category</span>
          </div>
          <select
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
            name="category"
            value={filter}
            className="rounded-md border  border-black"
          >
            <option value="">All</option>
            <option value="Poem">Poem</option>
            <option value="Novel">Novel</option>
            <option value="Fiction">Fiction </option>
            <option value="Epic">Epic</option>
            <option value="Comic">Comic</option>
          </select>
        </label>
        <form onSubmit={handleSearch} action="">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Search blogs by blog title</span>
            </div>
            <div className="flex">
              <input
                type="text"
                name="title"
                placeholder="Type here "
                className="input input-bordered w-full"
              />
              <input
                type="submit"
                value="search"
                className="btn btn-md border text-white bg-black text-lg font-bold"
              />
            </div>
          </label>
        </form>
      </div>
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 py-8 md:py-20">
        {blog.map((Blog, index) => (
          <>
            <BlogCard key={index} Blog={Blog}></BlogCard>
          </>
        ))}
      </div>
      <div className=" w-3/5 mx-auto">
        <div className="join flex justify-center mb-12">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageButton(currentPage - 1)}
            className="join-item btn rounded-lg border-black bg-transparent text-xl"
          >
            «
          </button>
          {pages.map((page, index) => (
            <>
              <button
                onClick={() => handlePageButton(index + 1)}
                key={index}
                className={`${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-base-100 border border-black"
                } join-item btn mx-1`}
              >
                {index + 1}
              </button>
            </>
          ))}

          <button
            disabled={currentPage === numberOfPage}
            onClick={() => handlePageButton(currentPage + 1)}
            className="join-item btn rounded-lg border-black bg-transparent text-xl"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;

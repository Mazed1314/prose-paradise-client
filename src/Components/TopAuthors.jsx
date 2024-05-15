import { ImBlog } from "react-icons/im";

const TopAuthors = () => {
  return (
    <div className="my-10 py-10">
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        <div className="flex p-4 m-2 bg-base-200 hover:shadow-xl hover:border-blue-200">
          <img
            className="h-28 w-28 rounded-lg shadow-lg"
            src="/images/alexander-hipp.jpg"
            alt="blogger"
          />
          <div className="flex flex-col justify-around px-2">
            <div className="">
              <h2 className="text-2xl font-medium">Alexander Hipp</h2>
              <p className="text-gray-500">Social media expert</p>
            </div>
            <p className="flex gap-1">
              <ImBlog className="pt-1 text-2xl text-gray-600" />
              <span>17 published blog</span>
            </p>
          </div>
        </div>
        <div className="flex p-4 m-2 bg-base-200 hover:shadow-xl hover:border-blue-200">
          <img
            className="h-28 w-28 rounded-lg shadow-xl"
            src="/images/ann-monika.jpg"
            alt="blogger"
          />
          <div className="flex flex-col justify-around px-2">
            <div className="">
              <h2 className="text-2xl font-medium">Ann Monika</h2>
              <p className="text-gray-500">Director of BookOperations</p>
            </div>
            <p className="flex gap-1 text-gray-600">
              <ImBlog className="pt-1 text-2xl" />
              <span>23 published blog</span>
            </p>
          </div>
        </div>
        <div className="flex p-4 m-2 bg-base-200 hover:shadow-xl hover:border-blue-200">
          <img
            className="h-28 w-28 rounded-lg shadow-xl"
            src="/images/anil-vugels.jpg"
            alt="blogger"
          />
          <div className="flex flex-col justify-around px-2">
            <div className="">
              <h2 className="text-2xl font-medium">Anil Vugels</h2>
              <p className="text-gray-500">Digital marketer</p>
            </div>
            <p className="flex gap-1 text-gray-600">
              <ImBlog className="pt-1 text-2xl" />
              <span>15 published blog</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAuthors;

import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const cards = useLoaderData();
  const { _id } = useParams();
  const card = cards.find((blog) => blog._id == _id);
  const { title, category, long_description, image } = card;
  return (
    <div className="bg-transparent">
      <div className="mx-2 md:mx-20 bg-transparent">
        <Helmet>
          <title> blog-details : {_id}</title>
        </Helmet>

        <div className="w-full">
          <img src={image} alt="" className="w-full h-[200px] lg:h-[500px]" />
        </div>
        <h2 className="text-center font-bold text-2xl my-6 pt-4 rounded-t-md">
          {title} {"("}
          <span className="text-gray-600 text-md font-medium">{category}</span>
          {")"}
        </h2>
        <div className="px-2 md:px-8">
          <div className="py-4 md:py-8 text-lg text-gray-500">
            {long_description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

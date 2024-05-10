import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import WishListCard from "../Components/WishListCard";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const Navigate = useNavigate();
  // console.log(user);
  useEffect(() => {
    axios
      .get(`https://prose-paradise-server.vercel.app/wishList/${user?.email}`)
      .then((res) => {
        setItem(res.data);
      });

    // fetch(`https://prose-paradise-server.vercel.app/wishList/${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setItem(data);
    //   });
  }, [user]);
  // console.log(item);
  return (
    <div>
      <Helmet>
        <title>Wish-list</title>
      </Helmet>
      {item < 1 ? (
        <div className=" h-96 flex flex-col justify-center">
          <h2 className="text-center mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Oops
          </h2>
          <h2 className="text-center text-3xl">Your Wish List is empty !</h2>
          <p className="mt-4 text-gray-500 text-center mb-2">
            Go and see blogs
          </p>
          <div className="flex justify-center">
            <button
              className="bg-white btn btn-sm text-pink-800 border border-pink-800 px-2 rounded-lg"
              onClick={() => Navigate("/all-blogs")}
            >
              All blogs
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 my-6">
            {/* dropdown */}

            {item?.map((card) => (
              <>
                <WishListCard key={card._id} card={card}></WishListCard>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WishList;

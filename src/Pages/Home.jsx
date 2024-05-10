import Newsletter from "../Components/Newsletter";
import RecentBlog from "../Components/RecentBlog";

const Home = () => {
  return (
    <div>
      {/* banner sction */}
      <div className="">banner</div>
      {/* recent blog sction */}
      <div className="">
        recent blolg
        <RecentBlog></RecentBlog>
      </div>
      {/* newsletter sction */}
      <div className="my-10">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;

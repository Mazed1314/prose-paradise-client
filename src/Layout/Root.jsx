import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <div className="mx-2 md:mx-12">
        <Navbar></Navbar>
        <Outlet className="min-h-screen"></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

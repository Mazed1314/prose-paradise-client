import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState("light");

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("coffee");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Successfully log out!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        console.log("user log out");
      })

      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "md:border-b-4 pb-2 border-black font-bold" : "font-bold"
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "md:border-b-4 pb-2 border-black font-bold" : "font-bold"
        }
        to="/add-blog"
      >
        Add Blog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-4 pb-2 border-black font-bold" : "font-bold"
        }
        to="/wish-list"
      >
        WishList
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "md:border-b-4 pb-2 border-black font-bold" : "font-bold"
        }
        to="/all-blogs"
      >
        All Blogs
      </NavLink>
      {/* <div>
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div> 
        <div className="hidden border lg:flex">
          <ul className="menu menu-horizontal p-0 ">
            <li className=" p-0">
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>*/}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-xl">
            {/* <img
              src="/public/images/2-removebg-preview.png"
              className="w-[40px] h-auto"
              alt=""
            />{" "} */}
            Prose
            <span className="text-amber-600 font-semibold text-xl">
              Paradise
            </span>
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 flex gap-8">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <label className="cursor-pointer grid place-items-center pr-1">
            <input
              type="checkbox"
              onChange={handleToggle}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <>
              <div className="dropdown dropdown-end z-10">
                <div
                  className="hover:tooltip tooltip-open hover:tooltip-bottom z-10"
                  data-tip={user.displayName}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="user" src={user.photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="space-y-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <NavLink to="/profile" className={"hover:font-bold"}>
                    Profile/Update User
                  </NavLink>
                  <NavLink
                    onClick={handleLogOut}
                    to="/"
                    className={"hover:font-bold"}
                  >
                    Logout
                  </NavLink>
                  <NavLink to="/register" className={"hover:font-bold"}>
                    Register
                  </NavLink>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className=" hover:font-semibold text-blac mr-3">
                <u>Login</u>
              </Link>
              <Link to="/register" className=" hover:font-semibold text-black">
                <u>Register</u>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

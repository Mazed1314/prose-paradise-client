import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-12 pb-0 mx-0">
      <div className="mx-auto px-2 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-center">
              About Prose Paradise
            </h4>
            <p className="text-sm text-center"></p>
          </div>
          <div className="mb-8 text-center">
            <h4 className="text-lg font-semibold mb-4 text-center">
              Contact Us
            </h4>
            <p className="text-sm">2312 GSE Street, Chittagong, Bangladesh</p>
            <p className="text-sm">Email: prosee@paradise.com</p>
            <p className="text-sm">Phone: +123-456-7890</p>
          </div>
          <div className="mb-8 ">
            <h4 className="text-lg font-semibold mb-4 text-center">
              Connect with Us
            </h4>
            <ul className="flex justify-center gap-5 ">
              <li>
                <a
                  href="#"
                  className="hover:text-pink-800  transition duration-300"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-800  transition duration-300"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-800  transition duration-300"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-800  transition duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t border-gray-300 mx-aut py-8 rounded-b-lg">
        <div className="flex justify-center">
          <p className="text-sm">
            &copy; 2024 Prose Paradise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

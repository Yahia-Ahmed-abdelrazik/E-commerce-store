import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Container from "./Container";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userEmail = localStorage.getItem("userEmail");

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-blue-500"
      : "text-gray-600 hover:text-blue-500";
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md py-4"
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            E-Store
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`${isActive("/")} transition duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`${isActive("/products")} transition duration-300`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${isActive("/about")} transition duration-300`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${isActive("/contact")} transition duration-300`}
              >
                Contact
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/cart"
                    className={`${isActive("/cart")} transition duration-300`}
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    Logout
                  </button>
                </li>
                <li className="text-gray-600">{userEmail}</li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className={`${isActive("/login")} transition duration-300`}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className={`${isActive(
                      "/register"
                    )} transition duration-300`}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;

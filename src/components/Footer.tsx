import { motion } from "framer-motion";
import Container from "./Container";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 text-gray-600 py-8 mt-8"
    >
      <Container>
        <div className="text-center">
          <p>&copy; 2023 E-commerce Store. All rights reserved.</p>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;

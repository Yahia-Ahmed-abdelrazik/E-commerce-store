import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Product Details: {id}</h1>
    </div>
  );
};

export default Product;

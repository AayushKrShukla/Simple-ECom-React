import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <section id="shop" className="max-padd-container py-20 bg-[#f8f7f4]">
      <h3>Our Products</h3>
      <hr className="h-[2px] md:w-1/2 max-w-96 bg-gradient-to-l from-transparent via-black to-black mb-12 border-none rounded" />

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Shop;

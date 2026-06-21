import { Product } from "./Product";

//named export
export const ProducrCard = () => {
  return (
    <div className="product_card">
      {ProductData.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

import "./ExploreProducts.css";
import ProductHunt from "../../assets/product_hunt.png";
const ExploreProducts = () => {
  return (
    <div className="exploreProducts">
      <div className="ep-image">
        <img src={ProductHunt} />
      </div>
      <h2>Discover the best new products, every day.</h2>
      <div className="btn">
        <button style={{ background: "#cc4d29" }}>Explore Products</button>
      </div>
    </div>
  );
};

export default ExploreProducts;

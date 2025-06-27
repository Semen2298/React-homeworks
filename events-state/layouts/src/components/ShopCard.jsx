export default function ShopCard({ product }) {
  const { name, price, color, img } = product;

  return (
    <div className="shop-card">
      <h2 className="title">{name}</h2>
      <p className="color">{color}</p>
      <img src={img} alt={name} className="img-fluid" />
      <div className="d-flex">
        <p className="price">${price}</p>
        <button type="button" className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}


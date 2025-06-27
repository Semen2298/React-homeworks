export default function ShopItem({ product }) {
    const { name, price, color, img } = product;

    return (
        <div className="shop-item">
            <img src={img} alt={name} className="img-fluid"/>
            <h2 className="title">{name}</h2>
            <p className="color">{color}</p>
            <p className="price">${price}</p>
            <div><button type="button" className="btn">Add to Cart</button></div>
        </div>
    );
}

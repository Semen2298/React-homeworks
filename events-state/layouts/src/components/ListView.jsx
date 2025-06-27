import ShopItem from './ShopItem';

export default function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
}

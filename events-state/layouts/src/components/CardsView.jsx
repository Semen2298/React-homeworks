import ShopCard from './ShopCard';

export default function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
}

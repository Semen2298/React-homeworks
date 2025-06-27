import { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from '../data/products'; // импортируем массив с товарами


export default function Store() {
  const [view, setView] = useState('view_module'); // начнем с карточек

  const handleSwitch = () => {
    setView((prev) => prev === 'view_module' ? 'view_list' : 'view_module');
  };

  return (
    <>
      <IconSwitch icon={view} onSwitch={handleSwitch} />
      {view === 'view_module' ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </>
  );
}

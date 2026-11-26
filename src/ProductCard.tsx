import { useState } from 'react';
import './product-card.css';

export function ProductCard({ title, price, image }: {
  title: string;
  price: number;
  image: string;
}) {
  const [inCart, setInCart] = useState(0);

  return (
    <>
      <article className="product-card" data-testid="product-card">
        <img src={image} alt={title} width="320" height="202" />
        <h2>{title}</h2>
        <button onClick={() => setInCart(count => count + 1)}>
          Добавить в корзину
        </button>
        <p data-testid="price">{price.toLocaleString('ru-RU')} ₽</p>
      </article>
      <output aria-live="polite">В корзине: {inCart}</output>
    </>
  );
}

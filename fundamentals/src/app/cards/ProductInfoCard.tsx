import React from 'react';

import styles from './ProductInfoCard.module.css';
import { Product } from './Product';
import Card from './Card';

function ProductInfoCard({ product }: { product: Product}) {
  return (
    <Card elevation={3}>
      <div className={styles.wrapper}>
        <img
          className={styles.productPhoto}
          alt={product.imageAlt}
          src={product.imageSrc}
        />
        <h2>
          {product.title}
        </h2>
        <p className={styles.price}>
          ${product.price}
        </p>
        <button>
          Add to cart
        </button>
      </div>
    </Card>
  );
}

export default ProductInfoCard;

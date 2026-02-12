import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
        {product.labelImage && (
          <img
            src={product.labelImage}
            alt={`${product.name} label`}
            className={styles.labelImage}
          />
        )}
        {product.roast && (
          <span className={styles.badge}>{product.roast}</span>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        {product.origin && (
          <span className={styles.origin}>{product.origin}</span>
        )}
        <p className={styles.description}>{product.description}</p>
        <div className={styles.bottom}>
          <div className={styles.pricing}>
            <span className={styles.price}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {product.weight && (
            <span className={styles.weight}>{product.weight}</span>
          )}
        </div>
      </div>
    </div>
  );
}

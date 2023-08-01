import styles from './product-card.module.scss';
function ProductCard({ product }) {
  return (
    <div className={styles.product}>
      <img className={styles.image} src={product?.image} alt={product?.name} />
      <h2>{product?.name}</h2>
      <p className={styles.description}>{product?.description}</p>
    </div>
  );
}

export default ProductCard;

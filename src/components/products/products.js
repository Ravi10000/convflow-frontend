import styles from './products.module.scss';
import ProductCard from './product-card/product-card';
import { productList } from '../../data/product-list';

function Products() {
  return (
    <div className={styles.productsContainer}>
      {productList?.map((product) => (
        <ProductCard key={product?.name} product={product} />
      ))}
    </div>
  );
}

export default Products;

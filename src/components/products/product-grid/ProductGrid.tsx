import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

interface Props {
  products: Product[];
}


export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid ssm:grid-cols-2 sm:grid-cols-3 px-2 gap-10 mb-10">
      {
        products.map(product => (
          <ProductGridItem
            key={product.slug}
            product={product}
          />
        ))
      }

    </div>
  );
};
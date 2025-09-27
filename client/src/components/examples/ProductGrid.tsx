import ProductGrid from '../ProductGrid';
import { products } from '@shared/data';

export default function ProductGridExample() {
  return (
    <div className="p-4">
      <ProductGrid products={products.slice(0, 4)} />
    </div>
  );
}
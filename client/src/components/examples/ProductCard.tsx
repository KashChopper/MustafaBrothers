import ProductCard from '../ProductCard';
import { products } from '@/shared/data';

export default function ProductCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ProductCard product={products[0]} />
    </div>
  );
}
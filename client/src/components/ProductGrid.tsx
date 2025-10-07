// @ts-nocheck
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12" data-testid="text-no-products">
        <p className="text-muted-foreground">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div 
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      data-testid="grid-products"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
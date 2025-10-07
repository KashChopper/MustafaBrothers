// @ts-nocheck
import ProductGrid from '@/components/ProductGrid';
import SectionHeading from '@/components/SectionHeading';
import { products } from '@/shared/data';

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <SectionHeading 
        title="Mobile Accessories"
        subtitle={`Browse our collection of ${products.length} quality mobile accessories`}
        centered
      />

      <div data-testid="section-products">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
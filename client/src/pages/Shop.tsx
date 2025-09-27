import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductGrid from '@/components/ProductGrid';
import SectionHeading from '@/components/SectionHeading';
import { products } from '@shared/data';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return ['all', ...uniqueCategories];
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    console.log(`Filtering by category: ${category}`);
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Page Header */}
      <SectionHeading 
        title="Mobile Accessories"
        subtitle={`Discover our collection of ${filteredProducts.length} quality mobile accessories`}
        centered
      />

      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="space-y-2">
          <label htmlFor="category-filter" className="text-sm font-medium text-muted-foreground">
            Filter by Category
          </label>
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger 
              className="w-48" 
              id="category-filter"
              data-testid="select-category-filter"
            >
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem 
                  key={category} 
                  value={category}
                  data-testid={`option-category-${category}`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div data-testid="section-products">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12" data-testid="text-no-products-category">
            <p className="text-muted-foreground">
              No products found in the "{selectedCategory}" category.
            </p>
            <Button 
              variant="outline" 
              onClick={() => handleCategoryChange('all')}
              className="mt-4"
              data-testid="button-show-all"
            >
              Show All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
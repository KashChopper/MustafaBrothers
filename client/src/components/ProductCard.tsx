import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@shared/data';

interface ProductCardProps {
  product: Product;
  onAdd?: (id: string) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const { toast } = useToast();

  const handleAddToCart = () => {
    console.log(`Adding product ${product.id} to cart`);
    toast({
      title: 'Cart not implemented',
      description: 'This is a static demo - cart functionality coming soon!',
    });
    onAdd?.(product.id);
  };

  return (
    <Card className="hover-elevate h-full flex flex-col">
      {/* Product Image */}
      <div className="aspect-square p-4 bg-muted/30">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.title} - ${product.category}`}
            className="w-full h-full object-cover rounded-md"
            data-testid={`img-product-${product.id}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-md bg-muted">
            <Package className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
      </div>

      <CardContent className="p-4 flex-1">
        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-foreground line-clamp-2" data-testid={`text-product-title-${product.id}`}>
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span data-testid={`text-product-category-${product.id}`}>{product.category}</span>
            {product.brand && (
              <>
                <span>•</span>
                <span data-testid={`text-product-brand-${product.id}`}>{product.brand}</span>
              </>
            )}
          </div>

          <div className="text-lg font-semibold text-foreground" data-testid={`text-product-price-${product.id}`}>
            ₹{product.price.toLocaleString('en-IN')}
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs"
                  data-testid={`badge-tag-${product.id}-${index}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          data-testid={`button-add-${product.id}`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
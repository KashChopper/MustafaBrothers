// @ts-nocheck
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smartphone, Wrench } from 'lucide-react';
import OwnerCard from '@/components/OwnerCard';
import ProductGrid from '@/components/ProductGrid';
import SectionHeading from '@/components/SectionHeading';
import { owner, products, repairs } from '@/shared/data';
import { useLocation } from 'wouter';

export default function Home() {
  const [, setLocation] = useLocation();

  const featuredProducts = products.slice(0, 4);
  const handleViewShop = () => setLocation('/shop');
  const handleViewRepairs = () => setLocation('/repairs');
  const handleViewAllProducts = () => setLocation('/shop');

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-hero-title">
            Mustafa Brothers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-tagline">
            Mobile accessories • Fast, trusted repairs
          </p>
          
          {/* Quick Action Cards */}
          <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto mt-8">
            <Card className="hover-elevate cursor-pointer" onClick={handleViewShop}>
              <CardContent className="p-6 text-center space-y-3">
                <Smartphone className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold" data-testid="text-shop-card-title">Shop Accessories</h3>
                <p className="text-sm text-muted-foreground">Browse our collection of quality mobile accessories</p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate cursor-pointer" onClick={handleViewRepairs}>
              <CardContent className="p-6 text-center space-y-3">
                <Wrench className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold" data-testid="text-repair-card-title">Repair Services</h3>
                <p className="text-sm text-muted-foreground">Professional repair services with warranty</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Owner Introduction */}
      <section className="px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Meet the Owner"
            subtitle="Get to know the expert behind our quality service"
            centered
          />
          <div className="mt-8 max-w-2xl mx-auto">
            <OwnerCard 
              name={owner.name}
              photo={owner.photo}
              phone={owner.phone}
              about={owner.about}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Products"
            subtitle="Popular accessories chosen for quality and value"
            actionLabel="View All Products"
            onAction={handleViewAllProducts}
          />
          <div className="mt-8">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </section>

      {/* Quick Repair Services Preview */}
      <section className="px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Repair Services"
            subtitle="Expert repairs with genuine parts and warranty"
            actionLabel="See All Services"
            onAction={handleViewRepairs}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {repairs.slice(0, 3).map((repair) => ( // todo: remove mock functionality
              <Card key={repair.id} className="hover-elevate">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-semibold" data-testid={`text-repair-preview-${repair.id}`}>
                    {repair.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Starting from ₹{repair.priceFrom?.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ETA: {repair.ETA}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
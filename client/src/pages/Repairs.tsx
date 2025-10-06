import RepairCard from '@/components/RepairCard';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Shield } from 'lucide-react';
import { repairs } from '@/shared/data';

export default function Repairs() {
  const handleContactForRepair = (repairId: string) => {
    console.log(`Contact requested for repair: ${repairId}`);
    // In real app: redirect to contact page or open phone dialer
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Page Header */}
      <SectionHeading 
        title="Repair Services"
        subtitle="Professional mobile device repair with genuine parts and warranty"
        centered
      />

      {/* Service Features */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <CheckCircle className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-semibold" data-testid="text-feature-genuine">Genuine Parts</h3>
            <p className="text-sm text-muted-foreground">
              We use only authentic, high-quality replacement parts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <Clock className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-semibold" data-testid="text-feature-fast">Fast Service</h3>
            <p className="text-sm text-muted-foreground">
              Most repairs completed within same day or next day
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <Shield className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-semibold" data-testid="text-feature-warranty">Warranty</h3>
            <p className="text-sm text-muted-foreground">
              All repairs come with comprehensive warranty coverage
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Repair Services Grid */}
      <div>
        <SectionHeading 
          title="Available Services"
          subtitle="Choose from our range of professional repair services"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="grid-repair-services">
          {repairs.map((repair) => (
            <RepairCard
              key={repair.id}
              repair={repair}
              onContact={handleContactForRepair}
            />
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-8 text-center space-y-4">
          <h3 className="text-xl font-semibold text-foreground" data-testid="text-cta-title">
            Need a Custom Repair?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't see your specific issue listed? Contact us directly for a personalized 
            assessment and repair quote. We handle all types of mobile device problems.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              data-testid="button-call-custom"
            >
              Call for Custom Repair
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
// @ts-nocheck
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Phone, Settings, Battery, Smartphone, Droplets, Zap } from 'lucide-react';

const iconMap = {
  'Smartphone': Smartphone,
  'Battery': Battery,
  'Droplets': Droplets,
  'Zap': Zap,
  'Settings': Settings,
};
export default function RepairCard({ repair }) {
  const IconComponent = repair.icon && repair.icon in iconMap ? iconMap[repair.icon] : Settings;
  const handleContact = () => {
    // static demo - no contact action
  };

  return (
    <Card className="hover-elevate h-full flex flex-col">
      <CardContent className="p-6 flex-1">
        <div className="space-y-4">
          {/* Service Icon & Title */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground" data-testid={`text-repair-title-${repair.id}`}>
                {repair.title}
              </h3>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-3">
            {/* ETA */}
            {repair.ETA && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span data-testid={`text-repair-eta-${repair.id}`}>ETA: {repair.ETA}</span>
              </div>
            )}

            {/* Price */}
            {repair.priceFrom && (
              <div className="text-lg font-semibold text-foreground" data-testid={`text-repair-price-${repair.id}`}>
                Starting from ₹{repair.priceFrom.toLocaleString('en-IN')}
              </div>
            )}

            {/* Description */}
            {repair.description && (
              <p className="text-sm text-muted-foreground" data-testid={`text-repair-description-${repair.id}`}>
                {repair.description}
              </p>
            )}

            {/* Fast Service Badge */}
            {repair.ETA && repair.ETA.includes('hour') && (
              <Badge variant="secondary" className="w-fit">
                Fast Service
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleContact}
          className="w-full"
          data-testid={`button-contact-repair-${repair.id}`}
          disabled
        >
          <Phone className="h-4 w-4 mr-2" />
          Get Quote
        </Button>
      </CardFooter>
    </Card>
  );
}
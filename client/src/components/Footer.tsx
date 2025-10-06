import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const contactInfo = {
    // todo: remove mock functionality
    phone: '+91 7006304625',
    address: '123 Main Street, Electronics Market, Mumbai 400001',
    hours: 'Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM'
  };

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground" data-testid="text-contact-heading">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span data-testid="text-phone">{contactInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span data-testid="text-address">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground" data-testid="text-hours-heading">Business Hours</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mt-0.5" />
              <span data-testid="text-hours">{contactInfo.hours}</span>
            </div>
          </div>

          {/* Shop Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground" data-testid="text-shop-heading">Mustafa Brothers</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-shop-description">
              Your trusted partner for mobile accessories and repair services. 
              Quality products, expert repairs, exceptional service.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} Mustafa Brothers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
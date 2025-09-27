import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = {
    // todo: remove mock functionality
    phone: '+91 98765 43210',
    email: 'info@mustafabrothers.com',
    address: '123 Main Street, Electronics Market, Mumbai 400001',
    hours: {
      weekdays: 'Monday - Saturday: 10:00 AM - 8:00 PM',
      sunday: 'Sunday: 11:00 AM - 6:00 PM'
    }
  };

  const handleCall = () => {
    console.log('Opening phone dialer');
    // In real app: window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
  };

  const handleEmail = () => {
    console.log('Opening email client');
    // In real app: window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleWhatsApp = () => {
    console.log('Opening WhatsApp');
    // In real app: window.open(`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`);
  };

  const handleDirections = () => {
    console.log('Opening maps for directions');
    // In real app: window.open(`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Page Header */}
      <SectionHeading 
        title="Contact Us"
        subtitle="Get in touch for any questions about our products or services"
        centered
      />

      {/* Quick Contact Actions */}
      <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
        <Button 
          onClick={handleCall}
          className="h-16 text-lg"
          data-testid="button-quick-call"
        >
          <Phone className="h-5 w-5 mr-3" />
          Call Now
        </Button>
        
        <Button 
          onClick={handleWhatsApp}
          variant="outline"
          className="h-16 text-lg"
          data-testid="button-quick-whatsapp"
        >
          <MessageCircle className="h-5 w-5 mr-3" />
          WhatsApp
        </Button>
        
        <Button 
          onClick={handleDirections}
          variant="outline"
          className="h-16 text-lg"
          data-testid="button-quick-directions"
        >
          <MapPin className="h-5 w-5 mr-3" />
          Get Directions
        </Button>
      </div>

      {/* Contact Information Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Phone Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-lg font-medium" data-testid="text-contact-phone">
              {contactInfo.phone}
            </p>
            <p className="text-sm text-muted-foreground">
              Call us directly for immediate assistance
            </p>
            <Button onClick={handleCall} className="w-full" data-testid="button-call-phone">
              Call Now
            </Button>
          </CardContent>
        </Card>

        {/* Email Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-lg font-medium" data-testid="text-contact-email">
              {contactInfo.email}
            </p>
            <p className="text-sm text-muted-foreground">
              Send us an email for detailed inquiries
            </p>
            <Button onClick={handleEmail} variant="outline" className="w-full" data-testid="button-email">
              Send Email
            </Button>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm" data-testid="text-contact-address">
              {contactInfo.address}
            </p>
            <p className="text-sm text-muted-foreground">
              Visit us at our convenient location
            </p>
            <Button onClick={handleDirections} variant="outline" className="w-full" data-testid="button-directions">
              Get Directions
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Business Hours */}
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center">
              <Clock className="h-5 w-5 text-primary" />
              Business Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div>
              <p className="font-medium" data-testid="text-hours-weekdays">
                {contactInfo.hours.weekdays}
              </p>
              <p className="font-medium" data-testid="text-hours-sunday">
                {contactInfo.hours.sunday}
              </p>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                We're closed on major holidays. Call ahead to confirm availability.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contact */}
      <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center space-y-4">
          <h3 className="text-xl font-semibold text-foreground" data-testid="text-emergency-title">
            Need Urgent Repair?
          </h3>
          <p className="text-muted-foreground">
            For urgent repair needs outside business hours, call our emergency line. 
            Additional charges may apply for after-hours service.
          </p>
          <Button onClick={handleCall} size="lg" data-testid="button-emergency-call">
            <Phone className="h-5 w-5 mr-2" />
            Emergency Contact
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
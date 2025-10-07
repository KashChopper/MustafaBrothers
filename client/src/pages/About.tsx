// @ts-nocheck
import OwnerCard from '@/components/OwnerCard';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import { owner } from '@/shared/data';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Page Header */}
      <SectionHeading 
        title="About Mustafa Brothers"
        subtitle="Your trusted partner for mobile accessories and repair services"
        centered
      />

      {/* Owner Section */}
      <div>
        <SectionHeading 
          title="Meet Our Owner"
          subtitle="The expert behind our quality service and customer satisfaction"
        />
        <div className="mt-8 max-w-2xl">
          <OwnerCard 
            name={owner.name}
            photo={owner.photo}
            phone={owner.phone}
            about={owner.about}
          />
        </div>
      </div>

      {/* Shop Story */}
      <div>
        <SectionHeading 
          title="Our Story"
          subtitle="Building trust through quality service since day one"
        />
        <div className="mt-8 max-w-4xl">
          <Card>
            <CardContent className="p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed" data-testid="text-story-intro">
                Mustafa Brothers began as a small family business with a simple mission: provide 
                reliable mobile device services and quality accessories to our community. What started 
                in a modest shop has grown into a trusted destination for mobile solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="text-story-mission">
                Our commitment to using genuine parts, providing transparent pricing, and delivering 
                exceptional customer service has earned us the trust of thousands of satisfied customers. 
                We believe that your mobile device is essential to your daily life, and we treat every 
                repair with the care and attention it deserves.
              </p>

              <p className="text-muted-foreground leading-relaxed" data-testid="text-story-future">
                Today, we continue to expand our services while maintaining the personal touch and 
                quality standards that our customers have come to expect. Whether you need a quick 
                accessory or a complex repair, we're here to help.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Features */}
      <div>
        <SectionHeading 
          title="Why Choose Us"
          subtitle="What sets us apart in mobile device services"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Award className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold" data-testid="text-feature-experience">10+ Years Experience</h3>
              <p className="text-sm text-muted-foreground">
                Decade of expertise in mobile device repair and service
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Users className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold" data-testid="text-feature-customers">5000+ Happy Customers</h3>
              <p className="text-sm text-muted-foreground">
                Trusted by thousands of satisfied customers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Clock className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold" data-testid="text-feature-service">Same Day Service</h3>
              <p className="text-sm text-muted-foreground">
                Most repairs completed within hours, not days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <MapPin className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold" data-testid="text-feature-location">Prime Location</h3>
              <p className="text-sm text-muted-foreground">
                Conveniently located in the heart of electronics market
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { Phone, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface OwnerCardProps {
  name: string;
  photo?: string;
  phone?: string;
  about?: string;
}

export default function OwnerCard({ name, photo, phone, about }: OwnerCardProps) {
  const handleCall = () => {
    console.log(`Calling ${phone}`);
    // In real app: window.location.href = `tel:${phone?.replace(/\s/g, '')}`;
  };

  const handlePhotoUpload = () => {
    console.log('Photo upload triggered - would open file picker');
    // In real app: trigger file picker for owner photo upload
  };

  return (
    <Card className="hover-elevate">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          {/* Owner Photo */}
          <div className="relative group">
            <Avatar className="h-20 w-20 border-2 border-border">
              <AvatarImage 
                src={photo} 
                alt={`${name} - Shop Owner`}
                data-testid="img-owner-photo"
              />
              <AvatarFallback data-testid="text-owner-initials">
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            {/* Photo Upload Indicator - shows border for future upload functionality */}
            <div 
              onClick={handlePhotoUpload}
              className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground opacity-0 hover:opacity-50 cursor-pointer transition-opacity"
              data-testid="button-photo-upload"
              title="Click to update photo"
            />
          </div>

          {/* Owner Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground" data-testid="text-owner-name">
                {name}
              </h3>
              {about && (
                <p className="text-sm text-muted-foreground mt-1" data-testid="text-owner-about">
                  {about}
                </p>
              )}
            </div>

            {/* Contact Button */}
            {phone && (
              <Button 
                onClick={handleCall}
                size="sm"
                className="w-full sm:w-auto"
                data-testid="button-contact-owner"
              >
                <Phone className="h-4 w-4 mr-2" />
                {phone}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
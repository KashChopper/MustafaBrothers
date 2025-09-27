import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    console.log('Navigating to home page');
    setLocation('/');
  };

  const handleGoBack = () => {
    console.log('Going back in history');
    window.history.back();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <Card>
          <CardContent className="p-12 space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-primary" data-testid="text-404-code">404</h1>
              <h2 className="text-2xl font-semibold text-foreground" data-testid="text-404-title">
                Page Not Found
              </h2>
              <p className="text-muted-foreground" data-testid="text-404-description">
                Sorry, the page you're looking for doesn't exist. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button onClick={handleGoHome} data-testid="button-go-home">
                <Home className="h-4 w-4 mr-2" />
                Go to Homepage
              </Button>
              
              <Button onClick={handleGoBack} variant="outline" data-testid="button-go-back">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>

            <div className="pt-6 border-t text-sm text-muted-foreground">
              <p>Need help? <a href="tel:+919876543210" className="text-primary hover:underline">Call us</a> or visit our <a href="/" className="text-primary hover:underline">homepage</a>.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
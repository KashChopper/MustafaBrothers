// @ts-nocheck
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function SectionHeading({ title, subtitle, actionLabel, onAction, centered = false }: { title?: string; subtitle?: string; actionLabel?: string; onAction?: () => void; centered?: boolean }) {
  return (
    <div className={`space-y-2 ${centered ? 'text-center' : ''}`}>
      <div className={`flex ${centered ? 'justify-center' : 'justify-between'} items-center gap-4`}>
        <h2 className="text-2xl font-bold text-foreground" data-testid="text-section-title">
          {title}
        </h2>
        
        {actionLabel && onAction && !centered && (
          <Button 
            variant="ghost" 
            onClick={onAction}
            className="text-primary hover:text-primary/80"
            data-testid="button-section-action"
          >
            {actionLabel}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>
      
      {subtitle && (
        <p className="text-muted-foreground" data-testid="text-section-subtitle">
          {subtitle}
        </p>
      )}
      
      {actionLabel && onAction && centered && (
        <div className="pt-2">
          <Button 
            variant="outline" 
            onClick={onAction}
            data-testid="button-section-action-centered"
          >
            {actionLabel}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
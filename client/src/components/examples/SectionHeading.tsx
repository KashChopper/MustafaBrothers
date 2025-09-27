import SectionHeading from '../SectionHeading';

export default function SectionHeadingExample() {
  return (
    <div className="p-4 space-y-8">
      <SectionHeading 
        title="Featured Products"
        subtitle="Check out our most popular mobile accessories"
        actionLabel="View All"
        onAction={() => console.log('View all clicked')}
      />
      
      <SectionHeading 
        title="Repair Services"
        subtitle="Professional mobile device repair services"
        centered
      />
    </div>
  );
}
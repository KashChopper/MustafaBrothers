import OwnerCard from '../OwnerCard';
import { owner } from '@/shared/data';

export default function OwnerCardExample() {
  return (
    <div className="p-4 max-w-md">
      <OwnerCard 
        name={owner.name}
        photo={owner.photo}
        phone={owner.phone}
        about={owner.about}
      />
    </div>
  );
}
import RepairCard from '../RepairCard';
import { repairs } from '@/shared/data';

export default function RepairCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <RepairCard repair={repairs[0]} />
    </div>
  );
}
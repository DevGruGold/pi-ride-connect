import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Car, Star } from "lucide-react";

interface DriverProfileProps {
  name: string;
  rating: number;
  rides: number;
  vehicle: string;
  avatarUrl?: string;
  isAvailable?: boolean;
}

const DriverProfile = ({ 
  name, 
  rating, 
  rides, 
  vehicle, 
  avatarUrl,
  isAvailable = true 
}: DriverProfileProps) => {
  return (
    <Card className="p-6 bg-[#1A1F2C]/90 border-[#7E69AB]">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback className="bg-[#9b87f5] text-white">
            {name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[#9b87f5]">{name}</h3>
            <span className={`px-2 py-1 rounded-full text-sm ${
              isAvailable ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
            }`}>
              {isAvailable ? 'Available' : 'Busy'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#8E9196] mt-1">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-[#9b87f5] text-[#9b87f5]" />
              <span>{rating.toFixed(1)} ({rides} rides)</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>{vehicle}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DriverProfile;
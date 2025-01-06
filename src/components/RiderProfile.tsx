import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface RiderProfileProps {
  name: string;
  rating: number;
  rides: number;
  avatarUrl?: string;
}

const RiderProfile = ({ name, rating, rides, avatarUrl }: RiderProfileProps) => {
  return (
    <Card className="p-6 bg-[#1A1F2C]/90 border-[#7E69AB]">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback className="bg-[#9b87f5] text-white">
            {name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold text-[#9b87f5]">{name}</h3>
          <div className="flex items-center gap-2 text-[#8E9196] mt-1">
            <Star className="h-4 w-4 fill-[#9b87f5] text-[#9b87f5]" />
            <span>{rating.toFixed(1)} ({rides} rides)</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RiderProfile;
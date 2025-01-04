import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RideBooking = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleBookRide = () => {
    if (!pickup || !destination) {
      toast({
        title: "Error",
        description: "Please enter pickup and destination locations",
        variant: "destructive",
      });
      return;
    }
    
    setIsSearching(true);
    // Simulate finding a driver
    setTimeout(() => {
      setIsSearching(false);
      toast({
        title: "Driver Found!",
        description: "Your driver will arrive in 3 minutes",
      });
    }, 2000);
  };

  return (
    <Card className="bg-[#1A1F2C]/90 p-6 backdrop-blur-sm border-[#7E69AB] w-full max-w-md">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#9b87f5] mb-4">Book a Ride</h2>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-[#8E9196]" />
          <Input
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="pl-10 bg-[#1A1F2C] border-[#7E69AB] text-white"
          />
        </div>

        <div className="relative">
          <Navigation className="absolute left-3 top-3 h-5 w-5 text-[#8E9196]" />
          <Input
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="pl-10 bg-[#1A1F2C] border-[#7E69AB] text-white"
          />
        </div>

        <div className="flex items-center gap-2 text-[#8E9196]">
          <Clock className="h-5 w-5" />
          <span>Estimated arrival: 3-5 mins</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[#9b87f5]">
            <p className="text-sm">Estimated Cost</p>
            <p className="text-xl font-bold">5.00 PI</p>
          </div>
          <Button
            onClick={handleBookRide}
            disabled={isSearching}
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
          >
            {isSearching ? "Finding Driver..." : "Book Ride"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RideBooking;
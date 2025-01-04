import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RideBooking from "@/components/RideBooking";
import RideMap from "@/components/RideMap";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  if (isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#7E69AB]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D3E4FD]">
              Pioneer Pickup
            </h1>
            <Button 
              variant="outline" 
              className="border-[#9b87f5] text-[#9b87f5]"
            >
              Connected
            </Button>
          </div>
          
          <div className="relative flex gap-4 h-[calc(100vh-8rem)]">
            <div className="w-full max-w-md">
              <RideBooking />
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <RideMap />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#7E69AB] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D3E4FD]">
            Pioneer Pickup
          </h1>
          <p className="text-2xl text-[#F2FCE2] mb-8">
            The Next Generation of Web3 Ridesharing
          </p>
          
          <Card className="bg-[#1A1F2C]/80 p-8 backdrop-blur-sm border-[#7E69AB]">
            <div className="grid gap-6">
              <p className="text-[#8E9196]">
                Connecting riders and drivers through decentralized technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                  size="lg"
                  onClick={handleConnect}
                >
                  Connect Wallet
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg bg-[#1A1F2C]/60 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#9b87f5]">Web3 Powered</h3>
              <p className="text-[#8E9196]">Secure and decentralized rides using blockchain technology</p>
            </div>
            <div className="p-6 rounded-lg bg-[#1A1F2C]/60 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#9b87f5]">Multi-Wallet Support</h3>
              <p className="text-[#8E9196]">Connect with Pi Network, WalletConnect v2, or Monero XMR</p>
            </div>
            <div className="p-6 rounded-lg bg-[#1A1F2C]/60 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#9b87f5]">Community Driven</h3>
              <p className="text-[#8E9196]">Built by and for the decentralized community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
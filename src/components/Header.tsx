import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import { Link } from "react-router-dom"

export function Header() {
  const { open } = useWeb3Modal()
  const { address } = useAccount()

  return (
    <header className="w-full bg-[#1A1F2C] border-b border-[#403E43] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D3E4FD]">
          Pioneer Pickup
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#F2FCE2]">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link to="/rides" className="block p-3 hover:bg-[#403E43] rounded-md">
                    <div className="text-sm font-medium text-[#F2FCE2]">Book a Ride</div>
                    <p className="text-sm text-[#8E9196]">Request a ride to your destination</p>
                  </Link>
                  <Link to="/drive" className="block p-3 hover:bg-[#403E43] rounded-md">
                    <div className="text-sm font-medium text-[#F2FCE2]">Become a Driver</div>
                    <p className="text-sm text-[#8E9196]">Join our network of professional drivers</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#F2FCE2]">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link to="/about" className="block p-3 hover:bg-[#403E43] rounded-md">
                    <div className="text-sm font-medium text-[#F2FCE2]">About Us</div>
                    <p className="text-sm text-[#8E9196]">Learn about our mission and values</p>
                  </Link>
                  <Link to="/contact" className="block p-3 hover:bg-[#403E43] rounded-md">
                    <div className="text-sm font-medium text-[#F2FCE2]">Contact</div>
                    <p className="text-sm text-[#8E9196]">Get in touch with our team</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button 
          variant="outline" 
          className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
          onClick={() => open()}
        >
          {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
        </Button>
      </div>
    </header>
  )
}
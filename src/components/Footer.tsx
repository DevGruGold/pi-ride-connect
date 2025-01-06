import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1F2C] border-t border-[#403E43] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#F2FCE2] font-semibold mb-4">Pioneer Pickup</h3>
            <p className="text-[#8E9196] text-sm">
              The next generation of Web3 ridesharing, connecting riders and drivers through decentralized technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#F2FCE2] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/rides" className="text-[#8E9196] hover:text-[#9b87f5] text-sm">
                  Book a Ride
                </Link>
              </li>
              <li>
                <Link to="/drive" className="text-[#8E9196] hover:text-[#9b87f5] text-sm">
                  Become a Driver
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#F2FCE2] font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#8E9196] hover:text-[#9b87f5] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#8E9196] hover:text-[#9b87f5] text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#F2FCE2] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-[#8E9196] hover:text-[#9b87f5] text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#8E9196] hover:text-[#9b87f5] text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#403E43] text-center text-[#8E9196] text-sm">
          <p>&copy; {new Date().getFullYear()} Pioneer Pickup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
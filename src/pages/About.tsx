import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-[#1A1F2C] to-[#7E69AB]">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-[#F2FCE2] mb-8">About Pioneer Pickup</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-[#F2FCE2] mb-6">
              Pioneer Pickup is revolutionizing the rideshare industry through blockchain technology and decentralized systems.
              Our platform connects riders directly with drivers, eliminating unnecessary intermediaries and reducing costs.
            </p>
            <p className="text-[#F2FCE2] mb-6">
              Built on Web3 technology, we ensure transparent, secure, and efficient transactions while maintaining the highest
              standards of service quality and user experience.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
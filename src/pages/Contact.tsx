import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-[#1A1F2C] to-[#7E69AB]">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-[#F2FCE2] mb-8">Contact Us</h1>
          
          <Card className="max-w-2xl mx-auto p-6 bg-[#1A1F2C]/80 backdrop-blur-sm border-[#403E43]">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F2FCE2] mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  className="bg-[#403E43] border-[#7E69AB] text-[#F2FCE2]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F2FCE2] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-[#403E43] border-[#7E69AB] text-[#F2FCE2]"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F2FCE2] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  className="bg-[#403E43] border-[#7E69AB] text-[#F2FCE2]"
                  placeholder="How can we help?"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { mainnet } from 'viem/chains'
import Index from "./pages/Index";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '4c46c4d2b6b2c7dd5c1e8f6b2c7dd5c1' // New demo project ID - Replace with your own

// 2. Create wagmiConfig
const metadata = {
  name: 'Pioneer Pickup',
  description: 'Web3 Rideshare App',
  url: 'https://pioneer-pickup.com', 
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet] as const

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  defaultChain: mainnet,
  themeMode: 'dark'
})

const queryClient = new QueryClient();

const App = () => (
  <WagmiConfig config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </WagmiConfig>
);

export default App;
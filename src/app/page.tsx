"use client";

import { createPublicClient, http } from "viem";
import { createConfig, mainnet, WagmiConfig } from "wagmi";
import { Home } from "./components/Home";
import ConfettiContextProvider from "./context/ConfettiContext";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http("https://eth.llamarpc.com"),
  }),
});

export default function App() {
  return (
    <WagmiConfig config={config}>
      <ConfettiContextProvider>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Home />
        </main>
      </ConfettiContextProvider>
    </WagmiConfig>
  );
}

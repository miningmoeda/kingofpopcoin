import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <img src="/images/kingofpopcoin-banner.jpg" alt="KingOfPopCoin Banner" className="w-full max-w-4xl rounded-lg shadow-lg" />
      
      <h1 className="text-5xl font-bold text-yellow-400 mt-6">KingOfPopCoin 🎩💰</h1>
      <p className="mt-4 text-lg text-center max-w-2xl">
        The ultimate meme cryptocurrency inspired by the King of Pop! Join us as we moonwalk to the future of decentralized finance.
      </p>
      <Button className="mt-6 bg-yellow-400 text-black px-6 py-3 text-lg rounded-full hover:scale-105 transition">
        Buy Now
      </Button>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Tokenomics</h2>
        <img src="/images/tokenomics.jpg" alt="Tokenomics" className="w-full rounded-lg shadow-lg mt-4" />
        <p className="mt-2">Total Supply: 1,000,000,000 KOPC</p>
        <p>Liquidity Locked ✅</p>
        <p>Community-Driven 🚀</p>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Swap Your Tokens</h2>
        <p className="mt-2">Easily swap your KingOfPopCoin with other cryptocurrencies.</p>
        <Button className="mt-4 bg-green-500">Swap Now</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Investor Dashboard</h2>
        <p className="mt-2">Track your holdings, transactions, and staking rewards.</p>
        <Button className="mt-4 bg-purple-500">View Dashboard</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Staking Rewards</h2>
        <p className="mt-2">Stake your KOPC tokens and earn passive income.</p>
        <Button className="mt-4 bg-blue-500">Start Staking</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Crypto Fee Calculator</h2>
        <p className="mt-2">Calculate transaction fees before swapping or trading.</p>
        <Button className="mt-4 bg-gray-600">Use Calculator</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">NFT Marketplace</h2>
        <p className="mt-2">Buy, sell, and trade exclusive KingOfPopCoin NFTs.</p>
        <Button className="mt-4 bg-red-500">Explore NFTs</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Airdrop Rewards</h2>
        <p className="mt-2">Earn free tokens through our airdrop campaigns.</p>
        <Button className="mt-4 bg-orange-500">Claim Airdrop</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Leaderboard</h2>
        <p className="mt-2">Check the top holders and most active traders.</p>
        <Button className="mt-4 bg-teal-500">View Leaderboard</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Governance & Voting</h2>
        <p className="mt-2">Vote on important proposals to shape the future of KingOfPopCoin.</p>
        <Button className="mt-4 bg-indigo-500">Vote Now</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Official Merchandise</h2>
        <p className="mt-2">Get exclusive KingOfPopCoin merch and collectibles.</p>
        <Button className="mt-4 bg-pink-500">Shop Now</Button>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Roadmap</h2>
        <img src="/images/roadmap.jpg" alt="Roadmap" className="w-full rounded-lg shadow-lg mt-4" />
        <ul className="mt-2 list-disc list-inside">
          <li>Phase 1: Token Launch & Website</li>
          <li>Phase 2: Community Growth & Marketing</li>
          <li>Phase 3: Exchange Listings & Partnerships</li>
          <li>Phase 4: Moonwalk to the Moon 🌕</li>
        </ul>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400">Join Our Community</h2>
        <img src="/images/community.jpg" alt="Community" className="w-full rounded-lg shadow-lg mt-4" />
        <div className="flex gap-4 mt-4">
          <Button className="bg-blue-500">Twitter</Button>
          <Button className="bg-blue-600">Telegram</Button>
          <Button className="bg-gray-800">Discord</Button>
        </div>
      </section>
    </div>
  );
}

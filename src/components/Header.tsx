import React from 'react';
import { Wallet, Coins } from 'lucide-react';

interface HeaderProps {
  isConnected: boolean;
  walletAddress: string;
  onConnect: () => void;
}

export default function Header({ isConnected, walletAddress, onConnect }: HeaderProps) {
  return (
    <header className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=3432"
          alt="NFT marketplace header"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
      </div>
      
      <div className="relative bg-gradient-to-b from-black/60 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
                <Coins className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Stellar NFT Market</h1>
                <p className="text-indigo-200 text-sm">Discover, collect, and trade unique NFTs</p>
              </div>
            </div>

            <button
              onClick={onConnect}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                isConnected
                  ? 'bg-indigo-600/20 text-white backdrop-blur-md border border-indigo-400/30 hover:bg-indigo-600/30'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <Wallet className={`w-5 h-5 ${isConnected ? 'text-indigo-300' : 'text-indigo-600'}`} />
              <span className="font-medium">
                {isConnected
                  ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                  : 'Connect Wallet'}
              </span>
            </button>
          </div>

          <div className="py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Future of Digital Art
            </h2>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              Explore unique digital assets on the Stellar network, powered by blockchain technology
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
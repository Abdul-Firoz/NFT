import React, { useState } from 'react';
import Header from './components/Header';
import NFTGrid from './components/NFTGrid';
import { mockNFTs } from './data/mockNFTs';
import { WalletState } from './types';

function App() {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    address: '',
  });

  const connectWallet = async () => {
    // Simulate wallet connection
    const mockAddress = 'GBXK7ETXNVMXC...WQBLZ3';
    setWallet({
      connected: true,
      address: mockAddress,
    });
  };

  const handleMint = async (id: string) => {
    if (!wallet.connected) {
      alert('Please connect your wallet first');
      return;
    }
    
    // Simulate minting process
    alert(`Minting NFT ${id}... (This is a simulation)`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        isConnected={wallet.connected}
        walletAddress={wallet.address}
        onConnect={connectWallet}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <NFTGrid nfts={mockNFTs} onMint={handleMint} />
      </main>
      
      <footer className="bg-white border-t mt-24 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>Stellar NFT Marketplace Demo - Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
export interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
  owner: string;
  price: number;
}

export interface WalletState {
  connected: boolean;
  address: string;
}
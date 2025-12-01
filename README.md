# Base WalletConnect App

A decentralized application (dApp) built on the **Base** network using **Reown AppKit** (formerly WalletConnect Web3Modal). This project aims to qualify for the WalletConnect weekly rewards program by building with WalletConnect technologies and contributing to the Base ecosystem.

## 🎯 Objective

Build a high-quality dApp that integrates WalletConnect technologies and contributes to the Base ecosystem, qualifying for the [WalletConnect weekly rewards program](https://docs.walletconnect.network/wallet-sdk/overview).

### Qualification Requirements
- ✅ **Tech Stack**: Built using Reown AppKit / WalletConnect
- 🔄 **Smart Contracts**: Own verified contracts on Base (in progress)
- 🔄 **Open Source**: Contribute to public crypto repositories on GitHub (in progress)

## 🛠 Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS v4
- **Web3 Integration**: Reown AppKit (WalletConnect)
- **Blockchain Libraries**: Wagmi, Viem
- **Network**: Base (with support for Mainnet and Arbitrum)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Reown Cloud Project ID ([Get one here](https://cloud.reown.com))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CasmanKaido/badewallconnect.git
cd badewallconnect
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file and add your Reown Project ID:
```env
NEXT_PUBLIC_PROJECT_ID=your_project_id_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with AppKit provider
│   ├── page.tsx         # Home page with wallet connect button
│   └── globals.css      # Global styles
├── config/
│   └── index.tsx        # Reown AppKit configuration
├── context/
│   └── index.tsx        # AppKit context provider
└── public/              # Static assets
```

## 🔗 Features

- **Wallet Connection**: Connect to multiple wallets via WalletConnect
- **Multi-Chain Support**: Base, Ethereum Mainnet, and Arbitrum
- **Modern UI**: Built with Tailwind CSS
- **TypeScript**: Full type safety

## 🎨 Next Steps

- [ ] Deploy smart contracts to Base
- [ ] Verify contracts on BaseScan
- [ ] Build core dApp functionality
- [ ] Add comprehensive documentation
- [ ] Increase GitHub activity and contributions

## 📚 Resources

- [Reown AppKit Documentation](https://docs.reown.com/appkit/overview)
- [WalletKit SDK Documentation](https://docs.walletconnect.network/wallet-sdk/overview)
- [Base Documentation](https://docs.base.org)

## 📄 License

MIT


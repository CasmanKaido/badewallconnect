# Base WalletConnect App

A decentralized application (dApp) built on the **Base** network using **Reown AppKit** (formerly WalletConnect Web3Modal). 

## 🎯 Objective

Build a high-quality dApp that integrates WalletConnect technologies and contributes to the Base ecosystem, 

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

- **Node.js** 18+ and npm
- A **Reown Cloud Project ID** ([Get one here](https://cloud.reown.com))
- **Git** for version control

### Installation Steps

1. **Clone the repository**:
```bash
git clone https://github.com/CasmanKaido/badewallconnect.git
cd badewallconnect
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure environment variables**:

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id_here
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
```

4. **Run the development server**:
```bash
npm run dev
```

5. **Build for production** (optional):
```bash
npm run build
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### Connecting a Wallet

1. Click the **"Connect Wallet"** button in the header
2. Select your preferred wallet from the WalletConnect modal
3. Approve the connection in your wallet app
4. Your wallet address will be displayed in the header

### Minting an NFT

1. Ensure your wallet is connected
2. Navigate to the minting section
3. Enter your NFT details (name, description)
4. Click **"Mint NFT"**
5. Confirm the transaction in your wallet
6. Wait for the transaction to be confirmed on Base

### Using Components

Import and use components from the library:

```typescript
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'default');
  
  return (
    <Card>
      <Button onClick={() => setValue('new value')}>
        Update Value
      </Button>
    </Card>
  );
}
```

## 🔗 Features

### Core Functionality
- **Wallet Connection**: Connect to multiple wallets via WalletConnect
- **NFT Minting**: Mint NFTs directly on the Base network
- **Multi-Chain Support**: Base, Ethereum Mainnet, and Arbitrum
- **Modern UI**: Built with Tailwind CSS v4
- **TypeScript**: Full type safety throughout the application

### Component Library
Our application includes a comprehensive UI component library with 40+ components:

#### Foundation Components (10)
- Button, Card, Input, Badge, Avatar, Divider, Container, Grid, Flex, Text

#### Layout & Navigation (10)
- Header, Footer, Sidebar, Navbar, NavItem, Breadcrumbs, Tabs, Pagination, Menu, Drawer

#### Form Elements (10)
- Label, Textarea, Checkbox, Radio, Select, Switch, Slider, FormGroup, ErrorMessage, Form

#### Feedback & Overlay (10)
- Alert, Toast, Spinner, Skeleton, Progress, Modal, Tooltip, Popover, Dialog, Notification

### Custom Hooks (5)
- `useClickOutside` - Detect clicks outside elements
- `useLocalStorage` - Persist state in localStorage
- `useWindowSize` - Track window dimensions
- `useDebounce` - Debounce values
- `useCopyToClipboard` - Copy to clipboard with feedback

### Utility Functions (5)
- `formatCurrency` - Format numbers as currency
- `formatDate` - Format dates and relative time
- `truncateAddress` - Truncate Ethereum addresses
- `cn` - Merge Tailwind classes
- `validators` - Common validation functions

### Icons (10)
- WalletIcon, EthereumIcon, BaseIcon, CheckIcon, CloseIcon, MenuIcon, ArrowIcon, CopyIcon, ExternalLinkIcon, LoadingIcon

### Page Sections (10)
- HeroSection, FeaturesSection, StatsSection, FAQSection, ContactSection, TeamSection, PricingSection, TestimonialsSection, NewsletterSection, FooterSection

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


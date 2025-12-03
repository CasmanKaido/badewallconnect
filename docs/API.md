# API Documentation

## Environment Variables

### Required Variables

- `NEXT_PUBLIC_PROJECT_ID` - Your Reown Cloud project ID
- `NEXT_PUBLIC_CONTRACT_ADDRESS` - Deployed NFT contract address

### Optional Variables

- `NEXT_PUBLIC_CHAIN_ID` - Default chain ID (default: 8453 for Base)
- `NEXT_PUBLIC_RPC_URL` - Custom RPC URL

## WalletConnect Integration

### Configuration

The WalletConnect configuration is in `config/index.tsx`:

```typescript
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, arbitrum, base],
  projectId,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum, base],
  projectId,
  features: {
    analytics: true,
  },
});
```

### Usage in Components

```typescript
import { useAccount, useConnect, useDisconnect } from 'wagmi';

function MyComponent() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {isConnected ? (
        <button onClick={() => disconnect()}>
          Disconnect {address}
        </button>
      ) : (
        <button onClick={() => connect()}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
```

## Smart Contract Interaction

### Reading Contract Data

```typescript
import { useReadContract } from 'wagmi';

const { data: totalSupply } = useReadContract({
  address: contractAddress,
  abi: contractAbi,
  functionName: 'totalSupply',
});
```

### Writing to Contract

```typescript
import { useWriteContract } from 'wagmi';

const { writeContract } = useWriteContract();

const mintNFT = () => {
  writeContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'mint',
    args: [amount],
    value: parseEther('0.001'),
  });
};
```

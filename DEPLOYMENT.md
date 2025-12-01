# Smart Contract Deployment Guide

This guide will help you deploy the contracts to Base using Remix IDE.

## Contracts Available

### 1. SimpleStorage.sol
A simple storage contract perfect for testing WalletConnect integration.
- **Functions**: `store()`, `retrieve()`, `getUserValue()`
- **Complexity**: Low
- **Gas Cost**: Very low
- **Recommended for**: Quick testing

### 2. BaseWalletConnectNFT.sol
A full ERC721 NFT contract with minting functionality.
- **Functions**: `mint()`, `tokenURI()`, `setMintPrice()`, etc.
- **Complexity**: Medium
- **Gas Cost**: Medium
- **Recommended for**: Production use

## Deployment Steps

### Step 1: Open Remix IDE
1. Go to [remix.ethereum.org](https://remix.ethereum.org)
2. Create a new workspace or use the default

### Step 2: Import Contract
1. In Remix, create a new file in the `contracts` folder
2. Copy the contract code from either:
   - `contracts/SimpleStorage.sol` (simpler option)
   - `contracts/BaseWalletConnectNFT.sol` (NFT option)
3. Paste it into Remix

### Step 3: Install Dependencies (for NFT contract only)
If using `BaseWalletConnectNFT.sol`:
1. In Remix, go to the "File Explorer" tab
2. Right-click on `contracts` folder → "New File"
3. Install OpenZeppelin contracts by importing:
   ```solidity
   import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
   ```
   Remix will auto-install dependencies

### Step 4: Compile
1. Go to the "Solidity Compiler" tab (left sidebar)
2. Select compiler version: `0.8.20` or higher
3. Click "Compile"
4. Ensure there are no errors

### Step 5: Connect to Base
1. Go to the "Deploy & Run Transactions" tab
2. In "Environment" dropdown, select **"Injected Provider - MetaMask"**
3. MetaMask will pop up - **switch to Base network**:
   - **Base Mainnet**: Chain ID 8453
   - **Base Sepolia (Testnet)**: Chain ID 84532
4. Ensure you have ETH on Base for gas fees

### Step 6: Deploy
1. Select your contract from the "Contract" dropdown
2. Click **"Deploy"**
3. Confirm the transaction in MetaMask
4. Wait for deployment confirmation
5. **Copy the deployed contract address** - you'll need this!

### Step 7: Verify on BaseScan
1. Go to [BaseScan](https://basescan.org) (or [Base Sepolia](https://sepolia.basescan.org) for testnet)
2. Search for your contract address
3. Click "Contract" → "Verify and Publish"
4. Fill in:
   - **Compiler Type**: Solidity (Single file)
   - **Compiler Version**: Match what you used in Remix (e.g., v0.8.20)
   - **License**: MIT
5. Paste your contract code
6. If using NFT contract, enable "Optimization" (200 runs)
7. Click "Verify and Publish"

### Step 8: Update Your dApp
Add the contract address to your `.env.local`:
```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
```

## Network Information

### Base Mainnet
- **Chain ID**: 8453
- **RPC URL**: https://mainnet.base.org
- **Explorer**: https://basescan.org
- **Currency**: ETH

### Base Sepolia (Testnet)
- **Chain ID**: 84532
- **RPC URL**: https://sepolia.base.org
- **Explorer**: https://sepolia.basescan.org
- **Currency**: ETH (testnet)
- **Faucet**: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet

## Tips

1. **Start with testnet**: Deploy to Base Sepolia first to test
2. **Get testnet ETH**: Use the Base faucet to get free testnet ETH
3. **Verify immediately**: Verify your contract right after deployment
4. **Save the address**: Keep your contract address safe
5. **Test thoroughly**: Interact with your contract on testnet before mainnet

## Troubleshooting

**Issue**: MetaMask doesn't show Base network
- **Solution**: Add Base network manually in MetaMask settings

**Issue**: Compilation errors in Remix
- **Solution**: Ensure you're using Solidity 0.8.20 or higher

**Issue**: Transaction fails
- **Solution**: Check you have enough ETH for gas fees

**Issue**: Verification fails
- **Solution**: Ensure compiler version and optimization settings match exactly

## Next Steps

After deployment:
1. Update your frontend to interact with the contract
2. Test all contract functions via your dApp
3. Share your contract address in your README
4. Contribute to GitHub to qualify for WalletConnect rewards!

'use client'

import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi'
import { parseEther } from 'viem'
import { useState } from 'react'

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}` || '0x0000000000000000000000000000000000000000'

const CONTRACT_ABI = [
    {
        inputs: [
            { name: 'to', type: 'address' },
            { name: 'uri', type: 'string' }
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'mintPrice',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'maxSupply',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    }
] as const

export default function MintNFT() {
    const { address, isConnected } = useAccount()
    const [nftName, setNftName] = useState('')
    const [nftDescription, setNftDescription] = useState('')
    const [isMinting, setIsMinting] = useState(false)

    // Read contract data
    const { data: mintPrice } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'mintPrice',
    })

    const { data: totalSupply } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'totalSupply',
    })

    const { data: maxSupply } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'maxSupply',
    })

    const { writeContract, data: hash, isPending } = useWriteContract()

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    })

    const handleMint = async () => {
        if (!isConnected || !address) {
            alert('Please connect your wallet first!')
            return
        }

        if (!nftName.trim()) {
            alert('Please enter an NFT name!')
            return
        }

        setIsMinting(true)

        try {
            // Create metadata URI (in production, upload to IPFS)
            const metadata = {
                name: nftName,
                description: nftDescription || 'Minted via Base WalletConnect App',
                image: 'ipfs://QmExample' // Replace with actual IPFS hash
            }
            const metadataUri = `data:application/json;base64,${btoa(JSON.stringify(metadata))}`

            writeContract({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: 'mint',
                args: [address, metadataUri],
                value: mintPrice || parseEther('0.001'),
            })
        } catch (error) {
            console.error('Minting error:', error)
            alert('Failed to mint NFT. Please try again.')
            setIsMinting(false)
        }
    }

    // Reset form on success
    if (isSuccess && isMinting) {
        setIsMinting(false)
        setNftName('')
        setNftDescription('')
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl">
            <div className="mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Mint Your NFT
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Create your unique NFT on the Base network
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Mint Price</p>
                    <p className="text-lg font-bold text-purple-600">
                        {mintPrice ? `${Number(mintPrice) / 1e18} ETH` : '0.001 ETH'}
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Minted</p>
                    <p className="text-lg font-bold text-blue-600">
                        {totalSupply?.toString() || '0'}
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Max Supply</p>
                    <p className="text-lg font-bold text-green-600">
                        {maxSupply?.toString() || '10000'}
                    </p>
                </div>
            </div>

            {/* Mint Form */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        NFT Name *
                    </label>
                    <input
                        type="text"
                        value={nftName}
                        onChange={(e) => setNftName(e.target.value)}
                        placeholder="My Awesome NFT"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                        disabled={!isConnected || isPending || isConfirming}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Description (Optional)
                    </label>
                    <textarea
                        value={nftDescription}
                        onChange={(e) => setNftDescription(e.target.value)}
                        placeholder="Describe your NFT..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                        disabled={!isConnected || isPending || isConfirming}
                    />
                </div>

                <button
                    onClick={handleMint}
                    disabled={!isConnected || isPending || isConfirming || !nftName.trim()}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {!isConnected ? (
                        'Connect Wallet to Mint'
                    ) : isPending ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Confirming...
                        </span>
                    ) : isConfirming ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Minting...
                        </span>
                    ) : (
                        'Mint NFT'
                    )}
                </button>

                {isSuccess && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                        <p className="text-green-800 dark:text-green-200 font-medium">
                            🎉 NFT Minted Successfully!
                        </p>
                        <a
                            href={`https://sepolia.basescan.org/tx/${hash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-green-600 dark:text-green-400 hover:underline mt-1 inline-block"
                        >
                            View on BaseScan →
                        </a>
                    </div>
                )}
            </div>

            {!isConnected && (
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                        💡 Connect your wallet using the button above to start minting NFTs
                    </p>
                </div>
            )}
        </div>
    )
}

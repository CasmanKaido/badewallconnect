import MintNFT from './components/MintNFT'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Header */}
            <header className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Base WalletConnect
                                </h1>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Powered by Reown AppKit
                                </p>
                            </div>
                        </div>
                        <w3m-button />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Mint NFTs on Base
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Create and own unique digital assets on the Base network with just a few clicks
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                            Lightning Fast
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Built on Base for instant transactions and low fees
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                            Secure & Verified
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Smart contracts verified on BaseScan for transparency
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                            WalletConnect
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Connect with any wallet using Reown AppKit
                        </p>
                    </div>
                </div>

                {/* Mint Component */}
                <MintNFT />

                {/* Info Section */}
                <div className="mt-16 p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Built for the WalletConnect Rewards Program
                        </h3>
                        <p className="text-purple-100 mb-6">
                            This dApp is built with Reown AppKit and deployed on Base network,
                            contributing to the ecosystem and qualifying for weekly rewards.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://github.com/CasmanKaido/badewallconnect"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition"
                            >
                                View on GitHub
                            </a>
                            <a
                                href="https://docs.reown.com/appkit/overview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-purple-700 text-white rounded-xl font-semibold hover:bg-purple-800 transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
                        <p>Built with ❤️ on Base Network</p>
                        <p className="mt-2">Powered by Reown AppKit • WalletConnect • Next.js</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
            <h1 className="text-4xl font-bold mb-8">Base WalletConnect App</h1>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <w3m-button />
            </div>
            <div className="mt-8 text-center">
                <p>Connect your wallet to get started.</p>
            </div>
        </main>
    );
}

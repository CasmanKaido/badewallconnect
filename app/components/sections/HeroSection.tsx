import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
                        Welcome to{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Base WalletConnect
                        </span>
                    </h1>
                    <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
                        Connect your wallet and start minting NFTs on the Base network with just a few clicks.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg">Get Started</Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

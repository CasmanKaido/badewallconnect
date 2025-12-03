import React from 'react';
import { Container } from '../ui/Container';
import { Card, CardContent } from '../ui/Card';

const features = [
    {
        title: 'Lightning Fast',
        description: 'Built on Base for instant transactions and low fees',
        icon: '⚡'
    },
    {
        title: 'Secure & Verified',
        description: 'Smart contracts verified on BaseScan for transparency',
        icon: '🔒'
    },
    {
        title: 'WalletConnect',
        description: 'Connect with any wallet using Reown AppKit',
        icon: '🔗'
    }
];

export const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Everything you need to build on Base
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <Card key={feature.title} hover>
                            <CardContent className="p-6">
                                <div className="mb-4 text-4xl">{feature.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

import React from 'react';
import { Container } from '../ui/Container';

const stats = [
    { label: 'Total NFTs Minted', value: '10,000+' },
    { label: 'Active Users', value: '5,000+' },
    { label: 'Transactions', value: '50,000+' },
    { label: 'Total Volume', value: '100 ETH' }
];

export const StatsSection: React.FC = () => {
    return (
        <section className="bg-blue-600 py-20 text-white">
            <Container>
                <div className="grid gap-8 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                            <div className="text-blue-100">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

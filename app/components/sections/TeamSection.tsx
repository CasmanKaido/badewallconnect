import React from 'react';
import { Container } from '../ui/Container';
import { Avatar } from '../ui/Avatar';

const team = [
    { name: 'Alice Johnson', role: 'Founder & CEO', avatar: 'AJ' },
    { name: 'Bob Smith', role: 'CTO', avatar: 'BS' },
    { name: 'Carol Williams', role: 'Lead Developer', avatar: 'CW' },
    { name: 'David Brown', role: 'Designer', avatar: 'DB' }
];

export const TeamSection: React.FC = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        The people behind Base WalletConnect
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-4">
                    {team.map((member) => (
                        <div key={member.name} className="text-center">
                            <div className="mb-4 flex justify-center">
                                <Avatar fallback={member.avatar} size="lg" />
                            </div>
                            <h3 className="mb-1 font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

import React from 'react';
import { Container } from '../ui/Container';
import { Card, CardContent } from '../ui/Card';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'NFT Collector',
        content: 'The easiest way to mint NFTs on Base. Love the simple interface!',
        rating: 5
    },
    {
        name: 'Mike Johnson',
        role: 'Developer',
        content: 'Great integration with WalletConnect. Very smooth experience.',
        rating: 5
    },
    {
        name: 'Emily Davis',
        role: 'Artist',
        content: 'Finally, a platform that makes NFT minting accessible to everyone.',
        rating: 5
    }
];

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        What Our Users Say
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} hover>
                            <CardContent className="p-6">
                                <div className="mb-4 flex gap-1">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                                <p className="mb-4 text-gray-600 dark:text-gray-400">"{testimonial.content}"</p>
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

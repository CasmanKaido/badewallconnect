import React from 'react';
import { Container } from '../ui/Container';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const plans = [
    {
        name: 'Free',
        price: '0',
        features: ['5 NFTs per month', 'Basic support', 'Community access'],
        badge: null
    },
    {
        name: 'Pro',
        price: '9.99',
        features: ['Unlimited NFTs', 'Priority support', 'Advanced analytics', 'Custom metadata'],
        badge: 'Popular'
    },
    {
        name: 'Enterprise',
        price: '49.99',
        features: ['Everything in Pro', 'Dedicated support', 'Custom contracts', 'White-label solution'],
        badge: null
    }
];

export const PricingSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Simple Pricing
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Choose the plan that's right for you
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {plans.map((plan) => (
                        <Card key={plan.name} hover>
                            <CardContent className="p-6">
                                {plan.badge && (
                                    <Badge className="mb-4">{plan.badge}</Badge>
                                )}
                                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">${plan.price}</span>
                                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                                </div>
                                <ul className="mb-6 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" variant={plan.badge ? 'primary' : 'outline'}>
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

import React from 'react';
import { Container } from '../ui/Container';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const NewsletterSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-4xl font-bold">
                        Stay Updated
                    </h2>
                    <p className="mb-8 text-xl text-blue-100">
                        Subscribe to our newsletter for the latest updates and features
                    </p>
                    <form className="flex flex-col gap-4 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1"
                        />
                        <Button variant="secondary" size="lg">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

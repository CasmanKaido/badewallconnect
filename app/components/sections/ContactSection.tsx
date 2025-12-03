import React from 'react';
import { Container } from '../ui/Container';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
            <Container>
                <div className="mx-auto max-w-2xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Have questions? We'd love to hear from you.
                        </p>
                    </div>
                    <form className="space-y-6">
                        <Input label="Name" placeholder="Your name" />
                        <Input label="Email" type="email" placeholder="your@email.com" />
                        <Textarea label="Message" placeholder="Your message..." rows={5} />
                        <Button className="w-full">Send Message</Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

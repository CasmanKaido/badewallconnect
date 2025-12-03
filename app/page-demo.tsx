'use client';

import React from 'react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { FeaturesSection } from '@/app/components/sections/FeaturesSection';
import { StatsSection } from '@/app/components/sections/StatsSection';
import { PricingSection } from '@/app/components/sections/PricingSection';
import { FAQSection } from '@/app/components/sections/FAQSection';
import { ContactSection } from '@/app/components/sections/ContactSection';
import { Container } from '@/app/components/ui/Container';
import { Button } from '@/app/components/ui/Button';

export default function Demo() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <StatsSection />

                <section className="py-20">
                    <Container>
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                                Component Showcase
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                A preview of our UI components
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary">Primary Button</Button>
                            <Button variant="secondary">Secondary Button</Button>
                            <Button variant="outline">Outline Button</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                    </Container>
                </section>

                <PricingSection />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

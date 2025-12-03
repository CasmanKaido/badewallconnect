import React from 'react';
import { Container } from '../ui/Container';

const footerLinks = {
    product: ['Features', 'Pricing', 'FAQ', 'Roadmap'],
    company: ['About', 'Blog', 'Careers', 'Contact'],
    resources: ['Documentation', 'Guides', 'API Reference', 'Community'],
    legal: ['Privacy', 'Terms', 'Cookies', 'Licenses']
};

export const FooterSection: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
            <Container>
                <div className="grid gap-8 md:grid-cols-5">
                    <div className="md:col-span-1">
                        <h3 className="mb-4 text-lg font-bold">Base WalletConnect</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Building the future of NFTs on Base
                        </p>
                    </div>
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="mb-4 font-semibold capitalize">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                    © {new Date().getFullYear()} Base WalletConnect. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

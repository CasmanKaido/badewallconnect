import React, { useState } from 'react';
import { Container } from '../ui/Container';

const faqs = [
    {
        question: 'What is Base WalletConnect?',
        answer: 'Base WalletConnect is a decentralized application built on the Base network that allows users to mint NFTs using WalletConnect technology.'
    },
    {
        question: 'How do I connect my wallet?',
        answer: 'Click the "Connect Wallet" button and select your preferred wallet from the WalletConnect modal.'
    },
    {
        question: 'What are the fees?',
        answer: 'The minting fee is 0.001 ETH plus Base network gas fees, which are typically very low.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes, all transactions are secured by blockchain technology and our smart contracts are verified on BaseScan.'
    }
];

export const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="mx-auto max-w-3xl space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left font-semibold hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                {faq.question}
                            </button>
                            {openIndex === index && (
                                <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
                                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

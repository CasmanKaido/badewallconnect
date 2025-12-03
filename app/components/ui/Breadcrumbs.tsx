import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
    items: { label: string; href: string }[];
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    className = ''
}) => {
    return (
        <nav className={`flex ${className}`} aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => (
                    <li key={item.href} className="inline-flex items-center">
                        {index > 0 && (
                            <svg className="mx-1 h-3 w-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        )}
                        <Link
                            href={item.href}
                            className={`
                ml-1 text-sm font-medium hover:text-blue-600 md:ml-2
                ${index === items.length - 1
                                    ? 'text-gray-500 pointer-events-none dark:text-gray-400'
                                    : 'text-gray-700 dark:text-gray-300 dark:hover:text-white'}
              `}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

import React from 'react';
import Link from 'next/link';

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
    className = '',
    href,
    active = false,
    children,
    ...props
}) => {
    return (
        <Link
            href={href}
            className={`
        text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400
        ${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}
        ${className}
      `}
            {...props}
        >
            {children}
        </Link>
    );
};

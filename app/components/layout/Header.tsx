import React from 'react';
import { Container } from '../ui/Container';

interface HeaderProps extends React.HTMLAttributes<HTMLHeaderElement> {
    fixed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
    className = '',
    fixed = false,
    children,
    ...props
}) => {
    return (
        <header
            className={`
        w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80
        ${fixed ? 'sticky top-0 z-50' : ''}
        ${className}
      `}
            {...props}
        >
            <Container className="flex h-16 items-center justify-between">
                {children}
            </Container>
        </header>
    );
};

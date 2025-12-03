import React from 'react';
import { Container } from '../ui/Container';
import { Text } from '../ui/Text';

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Footer: React.FC<FooterProps> = ({
    className = '',
    children,
    ...props
}) => {
    return (
        <footer
            className={`border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950 ${className}`}
            {...props}
        >
            <Container>
                {children || (
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Text variant="muted">
                            © {new Date().getFullYear()} Base WalletConnect App. All rights reserved.
                        </Text>
                    </div>
                )}
            </Container>
        </footer>
    );
};

import React from 'react';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
}

export const Navbar: React.FC<NavbarProps> = ({
    className = '',
    children,
    ...props
}) => {
    return (
        <nav
            className={`flex items-center gap-6 ${className}`}
            {...props}
        >
            {children}
        </nav>
    );
};

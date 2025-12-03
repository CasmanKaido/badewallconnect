import React from 'react';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    position?: 'left' | 'right';
    className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    children,
    position = 'right',
    className = ''
}) => {
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            {/* Drawer */}
            <div
                className={`
          fixed top-0 z-50 h-full w-80 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out dark:bg-gray-950
          ${position === 'right' ? 'right-0' : 'left-0'}
          ${isOpen
                        ? 'translate-x-0'
                        : position === 'right' ? 'translate-x-full' : '-translate-x-full'}
          ${className}
        `}
            >
                {children}
            </div>
        </>
    );
};

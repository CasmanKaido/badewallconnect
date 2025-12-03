import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
    className = '',
    variant = 'text',
    ...props
}) => {
    const variants = {
        text: 'h-4 w-full rounded',
        circular: 'h-12 w-12 rounded-full',
        rectangular: 'h-24 w-full rounded-xl'
    };

    return (
        <div
            className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${variants[variant]} ${className}`}
            {...props}
        />
    );
};

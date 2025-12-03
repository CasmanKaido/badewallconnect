import React from 'react';

interface AvatarProps {
    src?: string;
    alt?: string;
    fallback: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    fallback,
    size = 'md',
    className = ''
}) => {
    const sizes = {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-14 w-14 text-base'
    };

    return (
        <div className={`relative flex shrink-0 overflow-hidden rounded-full ${sizes[size]} ${className}`}>
            {src ? (
                <img
                    className="aspect-square h-full w-full object-cover"
                    src={src}
                    alt={alt}
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium">
                    {fallback}
                </div>
            )}
        </div>
    );
};

import React from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
}

export const Alert: React.FC<AlertProps> = ({
    className = '',
    variant = 'info',
    title,
    children,
    ...props
}) => {
    const variants = {
        info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400',
        success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400',
        error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
    };

    return (
        <div
            className={`rounded-xl border p-4 ${variants[variant]} ${className}`}
            role="alert"
            {...props}
        >
            {title && (
                <h3 className="mb-2 font-semibold">{title}</h3>
            )}
            <div className="text-sm">{children}</div>
        </div>
    );
};

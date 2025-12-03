import React from 'react';

interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
    className = '',
    message,
    children,
    ...props
}) => {
    if (!message && !children) return null;

    return (
        <p className={`mt-1 text-sm text-red-500 ${className}`} {...props}>
            {message || children}
        </p>
    );
};

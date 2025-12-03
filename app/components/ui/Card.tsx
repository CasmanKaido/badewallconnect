import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    className = '',
    hover = false,
    ...props
}) => {
    return (
        <div
            className={`
        rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50
        ${hover ? 'transition-transform hover:-translate-y-1 hover:shadow-md' : ''}
        ${className}
      `}
            {...props}
        />
    );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = '', ...props }) => (
    <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
    <div className={`p-6 pt-0 ${className}`} {...props} />
);

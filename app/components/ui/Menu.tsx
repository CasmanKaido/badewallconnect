import React from 'react';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Menu: React.FC<MenuProps> = ({
    className = '',
    children,
    ...props
}) => {
    return (
        <div
            className={`min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md dark:border-gray-800 dark:bg-gray-950 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export const MenuItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
    <div
        className={`
      relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors 
      hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800
      ${className}
    `}
        {...props}
    />
);

import React from 'react';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({
    className = '',
    orientation = 'horizontal',
    ...props
}) => {
    return (
        <div
            className={`
        bg-gray-200 dark:bg-gray-800
        ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'}
        ${className}
      `}
            {...props}
        />
    );
};

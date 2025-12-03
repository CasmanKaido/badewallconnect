import React from 'react';

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}

export const Radio: React.FC<RadioProps> = ({
    className = '',
    label,
    id,
    ...props
}) => {
    return (
        <div className="flex items-center">
            <input
                type="radio"
                id={id}
                className={`
          h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 
          focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600
          ${className}
        `}
                {...props}
            />
            {label && (
                <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {label}
                </label>
            )}
        </div>
    );
};

import React from 'react';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
    className = '',
    label,
    id,
    checked,
    ...props
}) => {
    return (
        <div className="flex items-center">
            <label htmlFor={id} className="relative inline-flex cursor-pointer items-center">
                <input
                    type="checkbox"
                    id={id}
                    className="peer sr-only"
                    checked={checked}
                    {...props}
                />
                <div className={`
          peer h-6 w-11 rounded-full bg-gray-200 
          after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] 
          peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white 
          peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800
          ${className}
        `} />
            </label>
            {label && (
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {label}
                </span>
            )}
        </div>
    );
};

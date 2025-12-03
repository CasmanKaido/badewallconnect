import React from 'react';

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}

export const Slider: React.FC<SliderProps> = ({
    className = '',
    label,
    id,
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {label}
                </label>
            )}
            <input
                type="range"
                id={id}
                className={`
          h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0
          ${className}
        `}
                {...props}
            />
        </div>
    );
};

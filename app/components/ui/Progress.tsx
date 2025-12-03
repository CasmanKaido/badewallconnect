import React from 'react';

interface ProgressProps {
    value: number;
    max?: number;
    showLabel?: boolean;
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
    value,
    max = 100,
    showLabel = false,
    className = ''
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className={`w-full ${className}`}>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {showLabel && (
                <p className="mt-1 text-right text-xs text-gray-600 dark:text-gray-400">
                    {Math.round(percentage)}%
                </p>
            )}
        </div>
    );
};

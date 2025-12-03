import React from 'react';

interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    error?: string;
    required?: boolean;
}

export const FormGroup: React.FC<FormGroupProps> = ({
    className = '',
    label,
    error,
    required = false,
    children,
    ...props
}) => {
    return (
        <div className={`mb-4 ${className}`} {...props}>
            {label && (
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {label}
                    {required && <span className="ml-1 text-red-500">*</span>}
                </label>
            )}
            {children}
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

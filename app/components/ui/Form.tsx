import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
}

export const Form: React.FC<FormProps> = ({
    className = '',
    children,
    ...props
}) => {
    return (
        <form className={`space-y-4 ${className}`} {...props}>
            {children}
        </form>
    );
};

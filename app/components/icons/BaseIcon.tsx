import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
}

export const BaseIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <circle cx="12" cy="12" r="12" fill="#0052FF" />
        <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#0052FF"
        />
        <path
            d="M12 18a6 6 0 100-12 6 6 0 000 12z"
            fill="white"
        />
    </svg>
);

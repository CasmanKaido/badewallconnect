import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export const ArrowIcon: React.FC<IconProps> = ({ size = 24, direction = 'right', ...props }) => {
    const rotations = {
        up: -90,
        down: 90,
        left: 180,
        right: 0
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: `rotate(${rotations[direction]}deg)` }}
            {...props}
        >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
};

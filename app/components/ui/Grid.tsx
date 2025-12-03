import React from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: 2 | 4 | 6 | 8;
}

export const Grid: React.FC<GridProps> = ({
    className = '',
    cols = 1,
    gap = 4,
    ...props
}) => {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
        6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
        12: 'grid-cols-4 md:grid-cols-6 lg:grid-cols-12'
    };

    const gaps = {
        2: 'gap-2',
        4: 'gap-4',
        6: 'gap-6',
        8: 'gap-8'
    };

    return (
        <div
            className={`grid ${gridCols[cols]} ${gaps[gap]} ${className}`}
            {...props}
        />
    );
};

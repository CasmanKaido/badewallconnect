import React from 'react';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'col';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    gap?: 2 | 4 | 6 | 8;
}

export const Flex: React.FC<FlexProps> = ({
    className = '',
    direction = 'row',
    align = 'center',
    justify = 'start',
    gap = 4,
    ...props
}) => {
    const directions = {
        row: 'flex-row',
        col: 'flex-col'
    };

    const aligns = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch'
    };

    const justifies = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around'
    };

    const gaps = {
        2: 'gap-2',
        4: 'gap-4',
        6: 'gap-6',
        8: 'gap-8'
    };

    return (
        <div
            className={`flex ${directions[direction]} ${aligns[align]} ${justifies[justify]} ${gaps[gap]} ${className}`}
            {...props}
        />
    );
};

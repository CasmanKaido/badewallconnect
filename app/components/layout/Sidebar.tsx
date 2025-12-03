import React from 'react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
    className = '',
    isOpen = true,
    children,
    ...props
}) => {
    return (
        <aside
            className={`
        fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white transition-transform dark:border-gray-800 dark:bg-gray-950
        ${isOpen ? 'translate-x-0' : ''}
        md:static md:translate-x-0
        ${className}
      `}
            {...props}
        >
            <div className="h-full overflow-y-auto px-3 py-4">
                {children}
            </div>
        </aside>
    );
};

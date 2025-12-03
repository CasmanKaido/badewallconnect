import React from 'react';

interface TabsProps {
    tabs: { id: string; label: string }[];
    activeTab: string;
    onChange: (id: string) => void;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    activeTab,
    onChange,
    className = ''
}) => {
    return (
        <div className={`border-b border-gray-200 dark:border-gray-700 ${className}`}>
            <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
                {tabs.map((tab) => (
                    <li key={tab.id} className="mr-2">
                        <button
                            onClick={() => onChange(tab.id)}
                            className={`
                inline-block rounded-t-lg border-b-2 p-4
                ${activeTab === tab.id
                                    ? 'border-blue-600 text-blue-600 active dark:border-blue-500 dark:text-blue-500'
                                    : 'border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'}
              `}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

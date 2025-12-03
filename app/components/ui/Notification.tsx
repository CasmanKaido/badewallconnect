import React from 'react';

interface NotificationProps {
    title: string;
    message: string;
    variant?: 'info' | 'success' | 'warning' | 'error';
    isVisible: boolean;
    onClose?: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
    title,
    message,
    variant = 'info',
    isVisible,
    onClose
}) => {
    const variants = {
        info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400',
        success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400',
        error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
    };

    if (!isVisible) return null;

    return (
        <div className="fixed right-4 top-4 z-50 w-80 animate-in slide-in-from-top-5">
            <div className={`rounded-xl border p-4 shadow-lg ${variants[variant]}`}>
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h4 className="mb-1 font-semibold">{title}</h4>
                        <p className="text-sm">{message}</p>
                    </div>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="ml-3 text-current/60 hover:text-current"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

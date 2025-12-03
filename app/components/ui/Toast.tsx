import React from 'react';

interface ToastProps {
    message: string;
    variant?: 'info' | 'success' | 'warning' | 'error';
    isVisible: boolean;
    onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
    message,
    variant = 'info',
    isVisible,
    onClose
}) => {
    const variants = {
        info: 'bg-blue-600 text-white',
        success: 'bg-green-600 text-white',
        warning: 'bg-yellow-600 text-white',
        error: 'bg-red-600 text-white'
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5">
            <div className={`flex items-center gap-3 rounded-xl px-4 py-3 shadow-lg ${variants[variant]}`}>
                <span className="text-sm font-medium">{message}</span>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="ml-auto text-white/80 hover:text-white"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

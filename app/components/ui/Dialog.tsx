import React from 'react';
import { Button } from './Button';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
}

export const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel'
}) => {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-950"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="mb-2 text-xl font-semibold">{title}</h2>
                    <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">{description}</p>

                    <div className="flex justify-end gap-3">
                        <Button variant="outline" onClick={onClose}>
                            {cancelText}
                        </Button>
                        <Button onClick={onConfirm}>
                            {confirmText}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

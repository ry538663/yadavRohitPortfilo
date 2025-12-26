import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    imageSrc?: string;
    children?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, imageSrc, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900/50">
                            <h3 className="text-lg font-semibold text-white">{title || 'View'}</h3>
                            <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-black/50">
                            {imageSrc ? (
                                <img src={imageSrc} alt={title} className="max-w-full max-h-[75vh] object-contain rounded-md" />
                            ) : children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

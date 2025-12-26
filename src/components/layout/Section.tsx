import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

export function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}

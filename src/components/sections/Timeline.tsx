import { motion } from 'framer-motion';
import { Calendar, Star, ArrowRight } from 'lucide-react';
import { resumeData } from '../../data/resume';

export const Timeline = () => {
    return (
        <section id="events" className="relative py-20 min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="flex flex-col items-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="px-4 py-1.5 text-sm font-bold text-indigo-400 border border-indigo-400 rounded-full mb-4 shadow-[2px_2px_0px_0px_rgba(129,140,248,1)]"
                >
                    Milestones
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-black text-center mb-4 uppercase tracking-tighter"
                >
                    Leadership / <span className="text-indigo-500">Extracurricular</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-400 max-w-2xl text-center font-mono text-sm"
                >
                    My leadership roles, hackathon participations, and other extracurricular activities.
                </motion.p>
            </div>

            <div className="max-w-3xl mx-auto px-4">
                <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 space-y-12">
                    {/* @ts-ignore */}
                    {(resumeData as any).events?.map((event: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-12 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950 z-10">
                            </div>

                            {/* Content Card */}
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                                <div className="group relative bg-zinc-900 border border-zinc-800 p-6 hover:border-indigo-500 transition-all duration-200 hover:shadow-[4px_4px_0px_0px_rgba(129,140,248,1)]">

                                    <div className={`flex flex-col gap-2 relative z-10 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                        <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono bg-zinc-950/50 px-2 py-1 border border-zinc-800">
                                            <Calendar size={14} />
                                            <span>{event.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                            {event.title}
                                            {index === 0 && <Star size={16} className="text-yellow-400 fill-yellow-400" />}
                                        </h3>

                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {event.description}
                                        </p>

                                        <div className={`mt-2 flex items-center gap-2 text-xs font-bold text-zinc-500 group-hover:text-white transition-colors ${index % 2 === 0 ? 'justify-end' : ''}`}>
                                            <span>VIEW DETAILS</span>
                                            <ArrowRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

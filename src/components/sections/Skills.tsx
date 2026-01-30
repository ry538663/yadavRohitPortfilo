import { useRef } from 'react';
import { resumeData } from '../../data/resume';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Server, Layout } from 'lucide-react';

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-zinc-900/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto" />
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        Proficient in modern web development technologies with hands-on experience in full-stack development.
                    </p>
                </div>

                {/* Categories Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
                    {resumeData.skills.categories.map((category, index) => (
                        <SkillsCard key={index} category={category} index={index} />
                    ))}
                </div>

                {/* Proficiency Levels */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-12">Proficiency Levels</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {resumeData.skills.proficiency.map((skill, index) => (
                            <ProgressBar key={index} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillsCard({ category, index }: { category: any; index: number }) {
    const icons: { [key: string]: any } = {
        "Frontend": Code,
        "Backend": Server,
        "Database": Database
    };

    // Fallback icon if name doesn't match
    const Icon = icons[category.name] || Layout;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${category.name === 'Frontend' ? 'bg-orange-500/10 text-orange-400' :
                    category.name === 'Backend' ? 'bg-green-500/10 text-green-400' :
                        'bg-blue-500/10 text-blue-400'
                    }`}>
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: string, i: number) => (
                    <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm border ${category.name === 'Frontend' ? 'bg-orange-900/20 border-orange-500/20 text-orange-200' :
                            category.name === 'Backend' ? 'bg-green-900/20 border-green-500/20 text-green-200' :
                                'bg-blue-900/20 border-blue-500/20 text-blue-200'
                            }`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

function ProgressBar({ skill, index }: { skill: any; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="mb-2">
            <div className="flex justify-between mb-2 text-sm font-medium">
                <span className="text-zinc-300">{skill.name}</span>
                <span className="text-indigo-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"
                />
            </div>
        </div>
    );
}

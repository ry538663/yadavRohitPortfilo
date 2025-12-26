import { useState } from 'react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';
import { GraduationCap, Trophy, Award } from 'lucide-react';
import { Modal } from '../ui/Modal';

export function Education() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <Section id="education">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <GraduationCap className="text-indigo-400" size={32} />
                        <h2 className="text-3xl font-black uppercase tracking-tight">Education</h2>
                    </div>

                    <div className="space-y-8">
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="pl-6 border-l-4 border-zinc-800 relative hover:border-indigo-500 transition-colors duration-300">
                                <div className="absolute w-4 h-4 bg-zinc-900 border-2 border-indigo-500 rounded-none -left-[10px] top-2" />
                                <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                <p className="text-indigo-400 font-bold mt-1 font-mono">{edu.degree}</p>
                                <div className="text-sm text-zinc-500 mt-2 mb-4 font-bold">{edu.date} • GPA: {edu.gpa}</div>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{edu.description}</p>
                                {/* @ts-ignore */}
                                {edu.certificate && (
                                    <a
                                        /* @ts-ignore */
                                        href={edu.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs text-indigo-400 hover:text-white transition-colors font-bold w-fit border-b border-indigo-400 hover:border-white pb-0.5"
                                    >
                                        <Award size={14} />
                                        VIEW CERTIFICATE
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Trophy className="text-cyan-400" size={32} />
                        <h2 className="text-3xl font-black uppercase tracking-tight">Achievements</h2>
                    </div>

                    <div className="space-y-6">
                        {resumeData.achievements.map((item, index) => (
                            <div key={index} className="p-6 bg-zinc-900 border border-zinc-800 hover:border-cyan-400 transition-all duration-200 hover:shadow-[4px_4px_0px_0px_rgba(34,211,238,1)]">
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                                {item.certificate && (
                                    <a
                                        href={item.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs text-cyan-400 hover:text-white transition-colors font-bold border-b border-cyan-400 hover:border-white w-fit pb-0.5"
                                    >
                                        <Award size={14} />
                                        VIEW CERTIFICATE
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                imageSrc={selectedCert || ''}
                title="Achievement Certificate"
            />
        </Section>
    );
}

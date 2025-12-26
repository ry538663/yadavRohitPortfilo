import { useState } from 'react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';
import { MapPin, Award } from 'lucide-react';
import { Modal } from '../ui/Modal';

export function Experience() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <Section id="experience" className="bg-zinc-900/20">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                <div className="w-20 h-1 bg-indigo-500 rounded-full" />
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Timeline Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                        </div>

                        {/* Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/5 bg-zinc-900/40 hover:border-indigo-500/30 transition-colors shadow-sm">
                            <div className="flex gap-4">
                                {job.logo && (
                                    <div className="shrink-0 mt-1">
                                        <img
                                            src={job.logo}
                                            alt={job.company}
                                            className="w-12 h-12 object-contain rounded-lg bg-white p-1"
                                        />
                                    </div>
                                )}
                                <div className="flex-grow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="font-bold text-xl text-white">{job.title}</h3>
                                        <span className="text-sm text-indigo-400 font-medium px-2 py-1 bg-indigo-500/10 rounded-md mt-1 sm:mt-0 w-fit">
                                            {job.date}
                                        </span>
                                    </div>
                                    <h4 className="text-lg text-zinc-300 mb-2">{job.company}</h4>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                                <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                                <span>•</span>
                                <span>{job.type}</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-1 text-zinc-400 text-sm mb-4">
                                {job.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>

                            {job.certificate && (
                                job.certificate.startsWith('http') ? (
                                    <a
                                        href={job.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium group/btn w-fit"
                                    >
                                        <Award size={16} />
                                        View Certificate
                                        <span className="block h-px w-0 group-hover/btn:w-full transition-all bg-indigo-400" />
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => setSelectedCert(job.certificate!)}
                                        className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium group/btn"
                                    >
                                        <Award size={16} />
                                        View Certificate
                                        <span className="block h-px w-0 group-hover/btn:w-full transition-all bg-indigo-400" />
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                imageSrc={selectedCert || ''}
                title="Experience Certificate"
            />
        </Section>
    );
}

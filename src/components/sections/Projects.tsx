import { useState } from 'react';
import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';
import { Github } from 'lucide-react';
import { Modal } from '../ui/Modal';

export function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <Section id="projects">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resumeData.projects.map((project, index) => (
                    <div key={index} className="group relative bg-zinc-900 border-2 border-zinc-800 hover:border-indigo-500 transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(129,140,248,1)] flex flex-col h-full">
                        {/* Image Placeholder/Thumbnail */}
                        <div
                            className="h-48 overflow-hidden bg-zinc-800 relative cursor-pointer border-b-2 border-zinc-800"
                            onClick={() => project.image && setSelectedImage(project.image)}
                        >
                            <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors flex items-center justify-center z-10">
                                <span className="px-4 py-2 bg-zinc-950 text-white text-xs font-black uppercase tracking-widest border border-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">View Image</span>
                            </div>
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-zinc-500 font-mono text-xs uppercase">No Image Available</div>
                            )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-start justify-between mb-4 gap-4">
                                <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight leading-none">{project.title}</h3>
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors bg-zinc-950 p-2 border border-zinc-800 hover:border-white">
                                    <Github size={20} />
                                </a>
                            </div>

                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-medium">
                                {project.description}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-zinc-950 text-indigo-400 text-xs font-bold border border-zinc-800 uppercase tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage || ''}
                title="Project Search"
            />
        </Section>
    );
}

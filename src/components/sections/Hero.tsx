import { useState } from 'react';
import { resumeData } from '../../data/resume';
import { ArrowDown, Github, Linkedin, FileText, Download } from 'lucide-react';
import { Link } from 'react-scroll';

export function Hero() {
    const [showResumeOptions, setShowResumeOptions] = useState(false);

    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Premium Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 text-center relative z-10">

                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 animate-fade-in">
                    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[20px] opacity-40 animate-pulse"></div>
                    <img
                        src={resumeData.personalInfo.avatar}
                        alt={resumeData.personalInfo.name}
                        className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl"
                    />
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
                        {resumeData.personalInfo.name}
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-zinc-400 mb-8 font-light tracking-wide animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    {resumeData.personalInfo.tagline}
                </h2>

                <p className="max-w-2xl mx-auto text-zinc-500 mb-10 text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    {resumeData.personalInfo.about}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <Link
                        to="projects"
                        smooth={true}
                        offset={-100}
                        className="group px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        View My Work
                    </Link>
                    <div className="relative">
                        <button
                            onClick={() => setShowResumeOptions(!showResumeOptions)}
                            className="px-8 py-3.5 glass hover:bg-white/10 rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2 cursor-pointer text-white"
                        >
                            <FileText size={18} />
                            Resume
                        </button>

                        {showResumeOptions && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl animate-fade-in z-20 flex flex-col">
                                <a
                                    href={resumeData.personalInfo.resumeLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-3 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                                    onClick={() => setShowResumeOptions(false)}
                                >
                                    <FileText size={16} />
                                    View Resume
                                </a>
                                <a
                                    href={resumeData.personalInfo.resumeLink}
                                    download="Rohit_Yadav_Resume.pdf"
                                    className="px-4 py-3 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-zinc-300 hover:text-white border-t border-white/5"
                                    onClick={() => setShowResumeOptions(false)}
                                >
                                    <Download size={16} />
                                    Download Resume
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-16 flex justify-center gap-6 animate-slide-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.6s' }}>
                    {/* Socials - distinct from header */}
                    <SocialIcon href={resumeData.personalInfo.github} icon={<Github size={24} />} />
                    <SocialIcon href={resumeData.personalInfo.linkedin} icon={<Linkedin size={24} />} />
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                    <ArrowDown size={24} className="text-white" />
                </div>
            </div>
        </section>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200"
        >
            {icon}
        </a>
    )
}

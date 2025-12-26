import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export function Contact() {
    return (
        <Section id="contact" className="min-h-[50vh] flex flex-col justify-center py-20">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">Get In Touch</h2>
                <p className="text-zinc-400 max-w-xl mx-auto font-medium">
                    Have a project in mind? Let's build something awesome together.
                </p>
            </div>

            <div className="max-w-4xl mx-auto w-full px-4 grid md:grid-cols-2 gap-12 text-left">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="p-6 bg-zinc-900 border border-zinc-800 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Contact Details</h3>
                        <div className="space-y-6">
                            <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center gap-4 text-zinc-400 hover:text-indigo-400 transition-colors group">
                                <div className="p-3 bg-zinc-950 border border-zinc-800 group-hover:border-indigo-500 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span className="font-bold">{resumeData.personalInfo.email}</span>
                            </a>

                            <a href={`tel:${resumeData.personalInfo.phone}`} className="flex items-center gap-4 text-zinc-400 hover:text-indigo-400 transition-colors group">
                                <div className="p-3 bg-zinc-950 border border-zinc-800 group-hover:border-indigo-500 transition-colors">
                                    <Phone size={20} />
                                </div>
                                <span className="font-bold">{resumeData.personalInfo.phone}</span>
                            </a>

                            <div className="flex items-center gap-4 text-zinc-400 group">
                                <div className="p-3 bg-zinc-950 border border-zinc-800">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-bold">{resumeData.personalInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/10 flex items-center justify-center transition-all font-bold uppercase tracking-wider">
                            <Linkedin size={20} className="mr-2" /> LinkedIn
                        </a>
                        <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white hover:bg-white/5 flex items-center justify-center transition-all font-bold uppercase tracking-wider">
                            <Github size={20} className="mr-2" /> GitHub
                        </a>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">Name</label>
                        <input
                            type="text"
                            className="w-full bg-zinc-900 border-2 border-zinc-800 p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors rounded-none placeholder:text-zinc-700 font-bold"
                            placeholder="YOUR NAME"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            className="w-full bg-zinc-900 border-2 border-zinc-800 p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors rounded-none placeholder:text-zinc-700 font-bold"
                            placeholder="YOUR EMAIL"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">Message</label>
                        <textarea
                            rows={4}
                            className="w-full bg-zinc-900 border-2 border-zinc-800 p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors rounded-none placeholder:text-zinc-700 font-bold resize-none"
                            placeholder="TELL ME ABOUT YOUR PROJECT..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-black py-4 uppercase tracking-widest hover:bg-indigo-500 border-2 border-indigo-600 hover:border-white transition-all duration-200 flex items-center justify-center gap-2 group shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:Translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </Section>
    );
}

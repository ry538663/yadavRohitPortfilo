import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';
import { resumeData } from '../../data/resume';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const navItems = [
    { name: 'Home', type: 'link', path: '/' },
    { name: 'About', type: 'link', path: '/about' },
    { name: 'Work', type: 'scroll', path: 'projects' },
    { name: 'Skills', type: 'scroll', path: 'skills' },
    { name: 'Contact', type: 'scroll', path: 'contact' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-5xl rounded-none", // Changed rounded-full to rounded-none or sm per Flat style, though rounded-full buttons are ok. Let's stick to slight rounded or blocky. I'll go with squared for "2D" look.
                isScrolled || isMobileMenuOpen
                    ? "bg-zinc-900 border border-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-3 px-6" // Flat solid style with hard shadow
                    : "bg-transparent border border-transparent py-4 px-0"
            )}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-black tracking-tighter text-white uppercase">
                            {resumeData.personalInfo.name.split(' ')[0]}
                            <span className="text-indigo-500">.</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const commonClasses = "px-5 py-2 text-sm font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer border border-transparent hover:border-zinc-700"; // Flat hover
                            const activeClasses = "bg-zinc-800 text-white border-zinc-700";

                            if (item.type === 'link') {
                                const isActive = location.pathname === item.path;
                                return (
                                    <RouterLink
                                        key={item.name}
                                        to={item.path}
                                        className={cn(commonClasses, isActive && activeClasses)}
                                        onClick={item.path === '/' ? scrollToTop : undefined}
                                    >
                                        {item.name}
                                    </RouterLink>
                                );
                            }

                            // For scroll items (Work, Skills, Contact)
                            if (isHomePage) {
                                return (
                                    <ScrollLink
                                        key={item.name}
                                        to={item.path}
                                        smooth={true}
                                        duration={700}
                                        offset={-100}
                                        spy={true}
                                        activeClass={activeClasses}
                                        className={commonClasses}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                );
                            } else {
                                return (
                                    <HashLink
                                        key={item.name}
                                        smooth
                                        to={`/#${item.path}`}
                                        className={commonClasses}
                                    >
                                        {item.name}
                                    </HashLink>
                                );
                            }
                        })}
                    </nav>

                    <div className="hidden md:flex items-center gap-3 pl-4 border-l-2 border-zinc-800">
                        <SocialLink href={resumeData.personalInfo.github} icon={<Github size={18} />} />
                        <SocialLink href={resumeData.personalInfo.linkedin} icon={<Linkedin size={18} />} />
                        <SocialLink href={`mailto:${resumeData.personalInfo.email}`} icon={<Mail size={18} />} />
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-zinc-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-zinc-950 pt-32 px-6 md:hidden animate-fade-in border-t-2 border-zinc-800">
                    <div className="flex flex-col gap-4 text-center">
                        {navItems.map((item) => {
                            const commonClasses = "text-2xl font-black text-zinc-400 hover:text-white py-2 uppercase hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all";
                            if (item.type === 'link') {
                                return (
                                    <RouterLink
                                        key={item.name}
                                        to={item.path}
                                        className={commonClasses}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            if (item.path === '/') scrollToTop();
                                        }}
                                    >
                                        {item.name}
                                    </RouterLink>
                                );
                            }

                            if (isHomePage) {
                                return (
                                    <ScrollLink
                                        key={item.name}
                                        to={item.path}
                                        smooth={true}
                                        duration={700}
                                        offset={-80}
                                        className={commonClasses}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                );
                            } else {
                                return (
                                    <HashLink
                                        key={item.name}
                                        smooth
                                        to={`/#${item.path}`}
                                        className={commonClasses}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </HashLink>
                                );
                            }
                        })}
                        <div className="flex justify-center gap-6 mt-8 pt-8 border-t-2 border-zinc-800">
                            <SocialLink href={resumeData.personalInfo.github} icon={<Github size={24} />} />
                            <SocialLink href={resumeData.personalInfo.linkedin} icon={<Linkedin size={24} />} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-transparent hover:border-zinc-700 rounded-none transition-all" // Square social buttons
        >
            {icon}
        </a>
    );
}

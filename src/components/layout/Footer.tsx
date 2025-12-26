import { resumeData } from '../../data/resume';

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-zinc-950">
            <div className="container mx-auto px-6 text-center">
                <p className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
                </p>
                <p className="text-zinc-600 text-xs mt-2">
                    Built with React, TypeScript, and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}

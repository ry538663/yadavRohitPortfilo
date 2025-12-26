
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Timeline } from '../components/sections/Timeline';
import { Contact } from '../components/sections/Contact';

export function Home() {
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Timeline />
            <Contact />
        </>
    );
}

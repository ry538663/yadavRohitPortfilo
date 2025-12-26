
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
    return (
        <div className="min-h-screen bg-zinc-950 text-foreground overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

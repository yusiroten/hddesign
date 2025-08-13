import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <Logo />
                    <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} HD Design. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

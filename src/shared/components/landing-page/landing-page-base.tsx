import { Footer } from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";

interface LandingPageBaseProps {
  children: React.ReactNode;
}

export default function LandingPageBase({ children }: LandingPageBaseProps) {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <div className="w-full pt-0">
        <Hero />
      </div>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 flex-1">
        {children}
      </div>
      <Footer />
    </main>
  );
}

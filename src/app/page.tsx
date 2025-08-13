import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Gallery } from '@/components/gallery';
import { Contact } from '@/components/contact';
import { WhatsappButton } from '@/components/whatsapp-button';
import { Cta } from '@/components/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

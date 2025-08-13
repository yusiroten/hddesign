import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://i.ibb.co/jkTXt0G8/Design-Interior.png"
        alt="Modern interior design"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="modern interior"
        priority
      />
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary animate-fade-in-down">
          Mewujudkan Ruang Impian Anda
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-foreground/90 animate-fade-in-up">
          Layanan Desain Interior Profesional oleh HD Design untuk Rumah, Villa, dan Kantor.
        </p>
        <Button size="lg" asChild className="animate-fade-in-up">
          <a href="#services">Lihat Layanan Kami</a>
        </Button>
      </div>
    </section>
  );
}

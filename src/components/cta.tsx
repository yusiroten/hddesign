import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Cta() {
  return (
    <section id="cta" className="relative py-20 bg-background">
       <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co/jkTXt0G8/Design-Interior.png"
          alt="CTA background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="modern interior"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      <div className="relative z-20 container mx-auto px-4">
        <div className="bg-transparent rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Siap Mengubah Ruang Anda?
          </h2>
          <p className="text-foreground/90 max-w-2xl mx-auto mb-8">
            Mari diskusikan ide Anda dan wujudkan proyek desain interior impian Anda bersama kami. Klik tombol di bawah untuk memulai percakapan.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Diskusikan Proyek Anda</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

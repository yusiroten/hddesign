"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const galleryImages = [
  { src: 'https://i.ibb.co/snF7gYk/image.png', alt: 'Desain Interior 1', hint: 'modern interior' },
  { src: 'https://i.ibb.co/T3HKGKT/image.png', alt: 'Desain Interior 2', hint: 'elegant space' },
  { src: 'https://i.ibb.co/dJbrSzn/interior-design.png', alt: 'Desain Interior 3', hint: 'cozy room' },
  { src: 'https://i.ibb.co/1fs74Pp/image.png', alt: 'Desain Interior 4', hint: 'minimalist design' },
  { src: 'https://i.ibb.co/qLntTTV/image.png', alt: 'Desain Interior 5', hint: 'luxury living' },
  { src: 'https://i.ibb.co/8nfLv00/image.png', alt: 'Desain Interior 6', hint: 'professional office' },
  { src: 'https://i.ibb.co/RGmSNWy/image.png', alt: 'Desain Interior 7', hint: 'stylish decor' },
  { src: 'https://i.ibb.co/PdZBr1j/image.png', alt: 'Desain Interior 8', hint: 'classic kitchen' },
  { src: 'https://i.ibb.co/4wR65D2/image.png', alt: 'Desain Interior 9', hint: 'modern bedroom' },
  { src: 'https://i.ibb.co/pBKN6Wg/image.png', alt: 'Desain Interior 10', hint: 'scandinavian living' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Galeri Proyek</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Lihat beberapa karya terbaik kami yang telah mengubah ruang menjadi karya seni fungsional.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-border">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}

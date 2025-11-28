"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const galleryImages: { src: string, alt: string, hint: string }[] = [
  { src: 'https://i.ibb.co/Zpqqd62W/IMG-20250818-WA0417.jpg', alt: 'Galeri Proyek Interior 1', hint: 'interior design' },
  { src: 'https://i.ibb.co/V05tR5X1/IMG-20250818-WA0418.jpg', alt: 'Galeri Proyek Interior 2', hint: 'modern room' },
  { src: 'https://i.ibb.co/j9hrVCFn/IMG-20250818-WA0419.jpg', alt: 'Galeri Proyek Interior 3', hint: 'living room' },
  { src: 'https://i.ibb.co/XkDKwG00/IMG-20250818-WA0420.jpg', alt: 'Galeri Proyek Interior 4', hint: 'workspace' },
  { src: 'https://i.ibb.co/5WgDgWmL/IMG-20250818-WA0421.jpg', alt: 'Galeri Proyek Interior 5', hint: 'kitchen design' },
  { src: 'https://i.ibb.co/V05tR5X1/IMG-20250818-WA0418.jpg', alt: 'Galeri Proyek Interior 6', hint: 'bedroom' },
  { src: 'https://i.ibb.co/XfTFnySN/IMG-20250818-WA0423.jpg', alt: 'Galeri Proyek Interior 7', hint: 'office space' },
  { src: 'https://i.ibb.co.com/xWHsFMt/IMG-20250818-WA0424.jpg', alt: 'Galeri Proyek Interior 8', hint: 'bathroom' },
  { src: 'https://i.ibb.co.com/9HSgM2p4/IMG-20250818-WA0425.jpg', alt: 'Galeri Proyek Interior 9', hint: 'luxury interior' },
  { src: 'https://i.ibb.co.com/Xrdw3zN7/IMG-20250818-WA0426.jpg', alt: 'Galeri Proyek Interior 10', hint: 'villa design' },
  { src: 'https://i.ibb.co/zHGzw68W/IMG-20250818-WA0427.jpg', alt: 'Galeri Proyek Interior 11', hint: 'minimalist' },
  { src: 'https://i.ibb.co/mCb6QF0T/IMG-20250818-WA0429.jpg', alt: 'Galeri Proyek Interior 13', hint: 'modern furniture' },
  { src: 'https://i.ibb.co/xqg168Bh/IMG-20250818-WA0430.jpg', alt: 'Galeri Proyek Interior 14', hint: 'interior lighting' },
  { src: 'https://i.ibb.co/zTd1YjXC/IMG-20250818-WA0431.jpg', alt: 'Galeri Proyek Interior 15', hint: 'cozy living' },
  { src: 'https://i.ibb.co/Y7zSCZMR/IMG-20250818-WA0432.jpg', alt: 'Galeri Proyek Interior 16', hint: 'sleek design' },
  { src: 'https://i.ibb.co/g0K1ZC9/Whats-App-Image-2025-08-18-at-14-11-08-b195bd2f.jpg', alt: 'Galeri Proyek Interior 17', hint: 'dining room' },
  { src: 'https://i.ibb.co/FLt9skct/Whats-App-Image-2025-08-18-at-14-11-09-12b270b2.jpg', alt: 'Galeri Proyek Interior 18', hint: 'lounge area' },
  { src: 'https://i.ibb.co/Xr5FFKxq/Whats-App-Image-2025-08-18-at-14-11-09-a5cd4ee6.jpg', alt: 'Galeri Proyek Interior 19', hint: 'office interior' },
  { src: 'https://i.ibb.co/np3SXbx/Whats-App-Image-2025-08-18-at-14-12-48-9bf1e737.jpg', alt: 'Galeri Proyek Interior 20', hint: 'modern kitchen' },
  { src: 'https://i.ibb.co/XkXxJ8tv/Whats-App-Image-2025-08-18-at-14-12-48-22d8283c.jpg', alt: 'Galeri Proyek Interior 21', hint: 'living space' },
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
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden border-border cursor-pointer group">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[80vw] lg:max-w-[60vw] p-0 bg-transparent border-0">
                   <DialogHeader>
                    <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                  </DialogHeader>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={1200}
                    className="object-contain w-full h-full rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            Galeri proyek akan segera diperbarui.
          </div>
        )}
      </div>
    </section>
  );
}

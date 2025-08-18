import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://i.ibb.co/HpNV0kmb/Gemini-Generated-Image-g5j9dbg5j9dbg5j9.png"
              alt="Tim HD Design"
              layout="fill"
              objectFit="cover"
              data-ai-hint="design team meeting"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Tentang HD Design</h2>
            <p className="text-muted-foreground mb-6 text-justify">
              HD Design adalah studio desain interior yang berdedikasi untuk menciptakan ruang yang fungsional, indah, dan mencerminkan kepribadian Anda. Kami percaya bahwa desain yang baik dapat meningkatkan kualitas hidup.
            </p>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Misi & Visi Kami</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-justify">Menghadirkan solusi desain inovatif dan personal untuk setiap klien.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-justify">Menjadi partner terpercaya dalam mewujudkan properti impian.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-justify">Mengutamakan kualitas material dan pengerjaan detail yang presisi.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

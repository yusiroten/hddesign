"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

// Official TikTok icon SVG
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-2.29-2.9-2.63-7.27-1-10.33.17-.33.4-.64.63-.92.16-.2.32-.41.5-.61.05-.06.1-.12.16-.17.16-.18.32-.34.49-.51s.34-.33.52-.49c.18-.16.37-.31.56-.46.12-.09.23-.19.35-.28.04-.03.07-.06.11-.09.19-.15.38-.29.57-.43.27-.19.55-.37.83-.53.18-.1.37-.19.55-.28.21-.11.42-.21.63-.3s.42-.18.64-.26c.21-.08.43-.16.64-.23.1-.03.2-.06.29-.09.3-.09.6-.17.9-.24.03-.01.07-.01.1-.02h.01Z"></path>
  </svg>
);


export function Contact() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Hubungi Kami</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Terhubung dengan kami melalui berbagai saluran di bawah ini. Kami siap membantu Anda.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border">
                <CardHeader className="text-center">
                    <CardTitle>Informasi Kontak & Media Sosial</CardTitle>
                    <CardDescription>Hubungi kami melalui telepon, email, atau temukan kami di media sosial.</CardDescription>
                </CardHeader>
                 <CardContent className="flex flex-col items-center space-y-6 text-sm p-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Phone className="w-5 h-5 text-primary"/>
                            <a href="https://wa.me/6287880571288" className="hover:text-primary transition-colors">+62 878-8057-1288</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-5 h-5 text-primary"/>
                            <a href="mailto:info@hddesign.com" className="hover:text-primary transition-colors">info@hddesign.com</a>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-primary mt-1"/>
                            <span>Jln Kiara Sari III no 1 Bandung, Indonesia.</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                         <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-6 h-6"/></a>
                         <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-6 h-6"/></a>
                         <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-6 h-6"/></a>
                         <a href="#" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition-colors"><TikTokIcon /></a>
                         <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-6 h-6"/></a>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

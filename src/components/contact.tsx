"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

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
                            <span>Jalan Desain No. 123, Jakarta, Indonesia</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                         <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-6 h-6"/></a>
                         <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-6 h-6"/></a>
                         <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-6 h-6"/></a>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

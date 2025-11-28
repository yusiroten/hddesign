import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/6287880571288"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="icon"
        className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-colors"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </a>
  );
}

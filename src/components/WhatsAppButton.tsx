import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "917358897955";
  const message = "Hello! I am interested in your solar solutions. Please provide more information.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_72%_40%)] hover:bg-[hsl(142_72%_35%)] text-background rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

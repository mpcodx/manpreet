import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "9783870541";
  const message = encodeURIComponent("Hi Manpreet, I'd like to discuss a project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-[#20BD5C]">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
            <p className="text-sm font-medium">Chat with me</p>
            <p className="text-xs text-muted-foreground">Usually replies instantly</p>
          </div>
        </div>
      </div>
    </a>
  );
};

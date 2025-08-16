import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890?text=Hola,%20estoy%20interesado%20en%20sus%20propiedades."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center justify-end bg-green-500 hover:bg-green-600 rounded-full h-14 w-14 group-hover:w-64 shadow-lg transition-all duration-300 ease-in-out">
        <div className="absolute left-0 top-0 h-14 w-14 flex items-center justify-center">
          <MessageCircle className="h-7 w-7 text-white transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <span className="text-white font-semibold pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap">
          Contactar con un asesor
        </span>
      </div>
    </a>
  );
};
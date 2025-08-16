import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    avatar: "CR",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "El equipo me guió en todo el proceso de compra. ¡Totalmente recomendados! Su profesionalismo es inigualable.",
  },
  {
    name: "Ana Gómez",
    avatar: "AG",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Encontraron la casa perfecta para mi familia en tiempo récord. Estamos muy agradecidos por su dedicación.",
  },
  {
    name: "Luis Fernández",
    avatar: "LF",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    review: "Una experiencia de primer nivel. La atención al detalle y la transparencia hicieron toda la diferencia.",
  },
  {
    name: "Sofía Castillo",
    avatar: "SC",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "La gestión de mi proyecto fue impecable. Cumplieron con los plazos y la calidad superó mis expectativas.",
  },
  {
    name: "Javier Mendoza",
    avatar: "JM",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review: "Excelente asesoría financiera. Me ayudaron a encontrar la mejor opción de crédito para mi nueva oficina.",
  },
  {
    name: "Isabella Rojas",
    avatar: "IR",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    review: "Vendieron mi propiedad a un precio excelente y en menos tiempo de lo que esperaba. ¡Un servicio fantástico!",
  },
];

const renderStars = () => {
    return Array(5).fill(null).map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
    ));
}

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="reseñas" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-gray-50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-lg text-gray-600">La satisfacción de nuestros clientes es nuestra mejor carta de presentación.</p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between w-[380px] mx-4 flex-shrink-0 border-gray-200 border-2 shadow-lg transition-colors duration-300 hover:bg-gradient-to-t hover:from-primary/10 hover:to-transparent">
              <CardHeader>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <div className="flex">{renderStars()}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-gray-50 via-transparent to-gray-50"></div>
      </div>
    </section>
  );
};
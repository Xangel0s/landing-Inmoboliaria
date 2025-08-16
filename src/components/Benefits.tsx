import { Handshake, ShieldCheck, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Asesoría Personalizada",
    description: "Te acompañamos en cada paso del proceso, desde la búsqueda hasta la firma del contrato.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Inversión Segura",
    description: "Verificamos cada propiedad para garantizar que tu inversión sea segura y rentable.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Las Mejores Propiedades",
    description: "Contamos con un catálogo exclusivo de las mejores propiedades en las zonas más cotizadas.",
  },
];

export const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="beneficios" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-gray-50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop" 
              alt="Casa moderna con jardín" 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg text-gray-600 mb-10">Tu tranquilidad y satisfacción son nuestra prioridad.</p>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group cursor-pointer">
                  <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-primary/20">
                    <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Home, Scale, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: <Home className="h-12 w-12 text-white" />,
    title: "Venta de Propiedades",
    description: "Te ayudamos a encontrar el comprador ideal para tu casa, departamento o terreno.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <Scale className="h-12 w-12 text-white" />,
    title: "Asesoría Legal y Financiera",
    description: "Nuestros expertos te guiarán en todos los trámites legales y opciones de financiamiento.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-white" />,
    title: "Gestión de Proyectos",
    description: "Administramos y supervisamos proyectos de construcción desde el inicio hasta la entrega.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  },
];

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="servicios" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-white transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-gray-600">Soluciones integrales para tus necesidades inmobiliarias.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-xl group h-96 text-white flex flex-col justify-end p-6 text-left transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-primary-foreground/90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
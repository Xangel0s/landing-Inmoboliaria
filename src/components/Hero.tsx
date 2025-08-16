import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden text-white">
      {/* Background Image with Ken Burns Effect */}
      <img
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
        alt="Interior de una casa lujosa"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <p 
          className="text-sm md:text-base font-semibold uppercase tracking-widest text-white mb-4 animate-fade-in-up"
          style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
        >
          Bienvenido a La Casa de la Construcción
        </p>
        <h1 
          className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
        >
          Encuentra la propiedad de tus sueños
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-up"
          style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
        >
          Te ayudamos a tomar la mejor decisión para tu futuro, con asesoría experta y las mejores propiedades del mercado.
        </p>
        <div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up"
          style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}
        >
          <Button size="lg" asChild className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 active:scale-95">
            <a href="#contacto">Contactar un Asesor</a>
          </Button>
          <Button size="lg" variant="secondary" asChild className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-white/20 active:scale-95">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
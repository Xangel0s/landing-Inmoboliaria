import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const VisitUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="visitanos" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-white transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Visítanos</h2>
          <p className="mt-4 text-lg text-gray-600">Estamos listos para atenderte en nuestra oficina.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Nuestra Oficina</h3>
                <p className="text-gray-600 mt-2">MZA. E LOTE. 24 APV. CHAVIN DE HUANTAR</p>
                <p className="text-gray-600">Carabayllo, Lima, Perú</p>
                <p className="text-gray-600 mt-4 font-semibold">Horario de atención:</p>
                <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31230.561140761805!2d-77.03313868815918!3d-11.893551000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d01334a88799%3A0x450512e2c67278f!2sMunicipalidad%20Distrital%20de%20Carabayllo!5e0!3m2!1ses-419!2spe!4v1689286507651!5m2!1ses-419!2spe"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Ubicación de la oficina en Carabayllo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
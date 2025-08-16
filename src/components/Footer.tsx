import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">La Casa de la Construcción</span>
            </div>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} La Casa de la Construcción. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
            <a href="#propiedades" className="text-gray-400 hover:text-white transition-colors">Propiedades</a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
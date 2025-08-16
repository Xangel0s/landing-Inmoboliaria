import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, Bath, Car } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const properties = [
  {
    name: "Edificios con Ascensor de 5 pisos para arriba con Sótano y Terraza",
    description: "Proyectos de edificios modernos con todas las comodidades. Ideal para inversionistas y desarrolladores.",
    image: "https://i.imgur.com/nmAcK29.jpeg",
    price: "Consultar Precio",
    details: [
      { icon: BedDouble, text: "3 Dorms" },
      { icon: Bath, text: "3 Baños" },
      { icon: Car, text: "2 Cocheras" },
    ],
  },
  {
    name: "Moderno Departamento en San Isidro",
    description: "Ubicado en el corazón financiero, este departamento ofrece comodidad y estilo.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto-format&fit=crop",
    price: "$450,000",
    details: [
      { icon: BedDouble, text: "2 Habitaciones" },
      { icon: Bath, text: "2 Baños" },
      { icon: Car, text: "1 Cochera" },
    ],
  },
  {
    name: "Casa de Campo con Piscina Privada",
    description: "Escape de la ciudad a esta hermosa casa con amplios jardines y piscina.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto-format&fit=crop",
    price: "$680,000",
    details: [
      { icon: BedDouble, text: "5 Habitaciones" },
      { icon: Bath, text: "4 Baños" },
      { icon: Car, text: "4 Cocheras" },
    ],
  },
];

export const FeaturedProperties = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="propiedades" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-gray-50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Propiedades Destacadas</h2>
          <p className="mt-4 text-lg text-gray-600">Explora nuestra selección exclusiva de propiedades.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
            >
              <CardHeader className="p-0">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className={`w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${index === 0 ? 'object-bottom' : ''}`} 
                />
              </CardHeader>
              <CardContent className="pt-6 flex flex-col flex-grow">
                <CardTitle>{property.name}</CardTitle>
                <p className="text-gray-600 mt-2 h-16 flex-grow">{property.description}</p>
                <div className="mt-4 border-t pt-4 flex justify-around text-gray-600">
                  {property.details.map((detail, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <detail.icon className="h-5 w-5 text-gray-500" />
                      <span>{detail.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  * Las características son referenciales y pueden variar.
                </p>
                <div className="mt-2">
                  <Button asChild className="w-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <a 
                      href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hola, estoy interesado en una cotización para la propiedad: "${property.name}"`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar Precio
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
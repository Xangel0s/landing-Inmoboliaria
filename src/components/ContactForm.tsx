"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";
import { supabase } from "@/lib/supabaseClient";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre es requerido." }),
  whatsapp: z.string().min(9, { message: "Ingresa un número de WhatsApp válido." }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido." }),
  propertyType: z.string({ required_error: "Selecciona un tipo de propiedad." }),
  budget: z.string().optional(),
  zone: z.string().optional(),
  message: z.string().optional(),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      whatsapp: "",
      email: "",
      propertyType: "",
      budget: "",
      zone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Guardar los datos en Supabase
    const { error } = await supabase.from('leads').insert([
      {
        nombre: values.fullName,
        whatsapp: values.whatsapp,
        email: values.email,
        tipopropiedad: values.propertyType,
        presupuesto: values.budget,
        zona: values.zone,
        mensaje: values.message,
      }
    ]);
    if (!error) {
      showSuccess("✅ Datos enviados correctamente. Un asesor se pondrá en contacto contigo por WhatsApp.");
      form.reset();
    } else {
      showSuccess("❌ Hubo un error al enviar los datos. Intenta nuevamente.");
    }
  }

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="contacto" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 bg-gray-50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Contáctanos</h2>
          <p className="mt-4 text-lg text-gray-600">Completa el formulario y un asesor te contactará a la brevedad.</p>
        </div>
        
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Form Section */}
            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Juan Pérez" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Ej: 987654321" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo electrónico</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Ej: juan.perez@correo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de propiedad de interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="casa">Casa</SelectItem>
                            <SelectItem value="terreno">Terreno</SelectItem>
                            <SelectItem value="departamento">Departamento</SelectItem>
                            <SelectItem value="oficina">Oficina</SelectItem>
                            <SelectItem value="local-comercial">Local Comercial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Presupuesto (Opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: $150,000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zona de interés (Opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Miraflores" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje adicional (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos más sobre lo que buscas..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" size="lg">Enviar Información</Button>
                </form>
              </Form>
            </div>

            {/* Info Section */}
            <div 
              className="relative text-white p-8 flex flex-col justify-center overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Hablemos de tu próximo proyecto</h3>
                <p className="text-white/80 mb-8">
                  Un asesor experto está listo para ayudarte a encontrar la propiedad ideal. Déjanos tus datos y te contactaremos para ofrecerte una asesoría personalizada y sin compromiso.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <span>+51 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>contacto@lacasaconstruccion.pe</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-1 flex-shrink-0" />
                    <span>MZA. E LOTE. 24 APV. CHAVIN DE HUANTAR, Carabayllo, Lima, Perú</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
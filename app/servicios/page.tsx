import { Heart, Star, Palette, Scissors, Crown, Sparkles } from "lucide-react"

const services = [
  {
    icon: <Heart className="text-pastel-pink" size={40} />,
    title: "Maquillaje de Novia",
    description:
      "Look perfecto para el día más importante de tu vida. Incluye prueba previa y maquillaje el día del evento.",
    price: "Desde $150",
    duration: "3-4 horas",
    includes: ["Consulta previa", "Prueba de maquillaje", "Maquillaje día del evento", "Retoques incluidos"],
  },
  {
    icon: <Star className="text-pastel-purple" size={40} />,
    title: "Quinceañeras",
    description: "Maquillaje y peinado especial para tu celebración de 15 años. Look juvenil y elegante.",
    price: "Desde $120",
    duration: "2-3 horas",
    includes: ["Maquillaje completo", "Peinado elegante", "Pestañas postizas", "Fijador de larga duración"],
  },
  {
    icon: <Palette className="text-pastel-lilac" size={40} />,
    title: "Eventos Sociales",
    description: "Perfecta para graduaciones, fiestas y celebraciones especiales.",
    price: "Desde $80",
    duration: "1-2 horas",
    includes: ["Maquillaje social", "Peinado sencillo", "Asesoría de look"],
  },
  {
    icon: <Scissors className="text-pastel-beige-dark" size={40} />,
    title: "Peinados Especiales",
    description: "Recogidos elegantes, ondas, trenzas y peinados de tendencia.",
    price: "Desde $60",
    duration: "1-2 horas",
    includes: ["Peinado profesional", "Productos de fijación", "Accesorios básicos"],
  },
  {
    icon: <Crown className="text-pastel-pink" size={40} />,
    title: "Paquete Completo Novia",
    description: "Servicio integral para novias: maquillaje, peinado y acompañamiento.",
    price: "Desde $250",
    duration: "4-5 horas",
    includes: ["Todo lo del maquillaje de novia", "Peinado profesional", "Acompañamiento", "Kit de retoques"],
  },
  {
    icon: <Sparkles className="text-pastel-purple" size={40} />,
    title: "Maquillaje Artístico",
    description: "Para sesiones fotográficas, teatro, o eventos temáticos especiales.",
    price: "Desde $100",
    duration: "2-3 horas",
    includes: ["Maquillaje creativo", "Diseño personalizado", "Productos especializados"],
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de servicios de maquillaje y peinado, diseñados para hacer que te veas y te
            sientas increíble en cualquier ocasión especial.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-pastel-beige/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pastel-beige hover:border-pastel-pink"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>

              <p className="text-gray-600 mb-4 text-center">{service.description}</p>

              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-pastel-purple mb-1">{service.price}</p>
                <p className="text-sm text-gray-500">Duración: {service.duration}</p>
              </div>

              <div className="border-t border-pastel-beige pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-pastel-pink rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-6 bg-pastel-pink hover:bg-pastel-pink/80 text-white py-2 px-4 rounded-full font-semibold transition-colors duration-200">
                Agendar Servicio
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

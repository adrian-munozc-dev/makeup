import { Palette, Scissors, Heart, Star } from "lucide-react"

const services = [
  {
    icon: <Heart className="text-pastel-pink" size={32} />,
    title: "Maquillaje de Novia",
    description: "Look perfecto para el día más importante de tu vida",
    price: "Desde $150",
  },
  {
    icon: <Star className="text-pastel-purple" size={32} />,
    title: "Quinceañeras",
    description: "Maquillaje y peinado para tu celebración especial",
    price: "Desde $120",
  },
  {
    icon: <Palette className="text-pastel-lilac" size={32} />,
    title: "Eventos Sociales",
    description: "Perfecta para graduaciones, fiestas y celebraciones",
    price: "Desde $80",
  },
  {
    icon: <Scissors className="text-pastel-beige-dark" size={32} />,
    title: "Peinados Especiales",
    description: "Recogidos elegantes y peinados de tendencia",
    price: "Desde $60",
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Servicios Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros servicios más populares, diseñados para resaltar tu belleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-pastel-beige/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pastel-beige"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <p className="text-pastel-purple font-bold text-center text-lg">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

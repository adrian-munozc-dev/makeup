import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    event: "Boda",
    text: "El maquillaje fue perfecto, me sentí como una princesa en mi día especial. Altamente recomendado.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ana Rodríguez",
    event: "Quinceañera",
    text: "Increíble trabajo, el peinado duró toda la noche y recibí muchos cumplidos. ¡Gracias!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Carmen López",
    event: "Graduación",
    text: "Profesional, puntual y con un resultado espectacular. Definitivamente volveré.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-pastel-lilac/20 to-pastel-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lo que dicen nuestras clientas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pastel-beige"
            >
              <div className="flex justify-center mb-4">
                <Quote className="text-pastel-pink" size={32} />
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-600 mb-6 text-center italic">"{testimonial.text}"</p>

              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-pastel-purple">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

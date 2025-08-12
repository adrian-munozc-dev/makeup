import Link from "next/link"
import { Sparkles, Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Realza tu belleza natural</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Servicios profesionales de maquillaje y peinado para bodas, quinceañeras, graduaciones y eventos especiales.
            Haz que tu día sea inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar-cita"
              className="bg-pastel-pink hover:bg-pastel-pink/80 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Agendar Cita
            </Link>
            <Link
              href="/servicios"
              className="border-2 border-pastel-purple text-pastel-purple hover:bg-pastel-purple hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

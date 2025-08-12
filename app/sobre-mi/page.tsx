import { Heart, Award, Users, Clock } from "lucide-react"

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sobre Mi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce mi historia, mi pasión por la belleza y la filosofía que guía cada uno de mis trabajos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="/placeholder.svg?height=500&width=500" alt="Sobre mi" className="w-full rounded-2xl shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Mi Historia</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hola, soy Isabella, y mi pasión por la belleza comenzó hace más de 8 años cuando descubrí el poder
                transformador del maquillaje. Lo que empezó como un hobby se convirtió en mi vocación de vida.
              </p>
              <p>
                Me especialicé en maquillaje para eventos especiales porque creo firmemente que cada mujer merece
                sentirse absolutamente radiante en sus momentos más importantes. Cada novia, cada quinceañera, cada
                graduada tiene una belleza única que mi trabajo busca realzar, nunca ocultar.
              </p>
              <p>
                A lo largo de estos años, he tenido el privilegio de ser parte de más de 500 eventos especiales, desde
                bodas íntimas hasta quinceañeras de ensueño. Cada experiencia me ha enseñado algo nuevo y me ha
                confirmado que elegí la profesión correcta.
              </p>
            </div>
          </div>
        </div>

        {/* Filosofía */}
        <div className="bg-gradient-to-br from-pastel-beige/30 to-pastel-lilac/20 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mi Filosofía</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creo que la verdadera belleza viene de adentro, y mi trabajo es simplemente ayudarte a que esa luz
              interior brille aún más.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="text-pastel-pink" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Belleza Natural</h3>
              <p className="text-gray-600">
                Realzo tu belleza natural sin crear una máscara. El objetivo es que te veas como la mejor versión de ti
                misma.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-pastel-purple" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad Premium</h3>
              <p className="text-gray-600">
                Utilizo solo productos de la más alta calidad que garantizan durabilidad y un acabado impecable durante
                todo tu evento.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-pastel-lilac" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiencia Personalizada</h3>
              <p className="text-gray-600">
                Cada cliente es única. Escucho tus deseos, analizo tu estilo y creo un look completamente personalizado
                para ti.
              </p>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="bg-pastel-pink/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Clock className="text-pastel-pink" size={32} />
            </div>
            <div className="text-3xl font-bold text-pastel-purple mb-2">8+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>

          <div>
            <div className="bg-pastel-purple/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users className="text-pastel-purple" size={32} />
            </div>
            <div className="text-3xl font-bold text-pastel-purple mb-2">500+</div>
            <div className="text-gray-600">Clientas Felices</div>
          </div>

          <div>
            <div className="bg-pastel-lilac/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Heart className="text-pastel-lilac" size={32} />
            </div>
            <div className="text-3xl font-bold text-pastel-purple mb-2">200+</div>
            <div className="text-gray-600">Bodas Realizadas</div>
          </div>

          <div>
            <div className="bg-pastel-beige/40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Award className="text-pastel-beige-dark" size={32} />
            </div>
            <div className="text-3xl font-bold text-pastel-purple mb-2">100%</div>
            <div className="text-gray-600">Satisfacción</div>
          </div>
        </div>
      </div>
    </div>
  )
}

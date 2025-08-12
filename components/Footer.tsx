import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-pastel-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-pastel-purple mb-4">Suray´s Beauty Corner</h3>
            <p className="text-gray-600 mb-4">
              Especializada en maquillaje y peinado para eventos especiales. Hagamos realidad la versión más bella de
              ti misma.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pastel-pink hover:text-pastel-purple transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-pastel-pink hover:text-pastel-purple transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/servicios" className="hover:text-pastel-pink transition-colors">
                  Maquillaje de Novia
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-pastel-pink transition-colors">
                  Quinceañeras
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-pastel-pink transition-colors">
                  Eventos Sociales
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-pastel-pink transition-colors">
                  Peinados
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-pastel-pink" />
                <span>+52 (983) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-pastel-pink" />
                <span>info@bellamakeup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-pastel-pink" />
                <span>Chunhuhub, 77160 Q.R.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pastel-beige mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Suray´s Beauty Corner. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

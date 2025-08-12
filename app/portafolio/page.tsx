"use client"

import { useState } from "react"
import { X } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    category: "Novias",
    title: "Maquillaje Natural Novia",
    image: "/placeholder.svg?height=400&width=400",
    description: "Look natural y elegante para boda en jardín",
  },
  {
    id: 2,
    category: "Quinceañeras",
    title: "Quinceañera Glamour",
    image: "/placeholder.svg?height=400&width=400",
    description: "Maquillaje glamoroso con tonos rosados",
  },
  {
    id: 3,
    category: "Novias",
    title: "Novia Clásica",
    image: "/placeholder.svg?height=400&width=400",
    description: "Estilo clásico y atemporal",
  },
  {
    id: 4,
    category: "Eventos",
    title: "Graduación Elegante",
    image: "/placeholder.svg?height=400&width=400",
    description: "Look sofisticado para graduación",
  },
  {
    id: 5,
    category: "Peinados",
    title: "Recogido Romántico",
    image: "/placeholder.svg?height=400&width=400",
    description: "Recogido con trenzas y flores",
  },
  {
    id: 6,
    category: "Quinceañeras",
    title: "XV Años Princesa",
    image: "/placeholder.svg?height=400&width=400",
    description: "Look de princesa con corona",
  },
  {
    id: 7,
    category: "Eventos",
    title: "Fiesta de Noche",
    image: "/placeholder.svg?height=400&width=400",
    description: "Maquillaje dramático para evento nocturno",
  },
  {
    id: 8,
    category: "Peinados",
    title: "Ondas Vintage",
    image: "/placeholder.svg?height=400&width=400",
    description: "Ondas al agua estilo vintage",
  },
  {
    id: 9,
    category: "Novias",
    title: "Novia Boho",
    image: "/placeholder.svg?height=400&width=400",
    description: "Estilo bohemio con flores naturales",
  },
]

const categories = ["Todos", "Novias", "Quinceañeras", "Eventos", "Peinados"]

export default function PortafolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pastel-lilac/20 to-pastel-pink/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nuestro Portafolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora algunos de nuestros trabajos más destacados y descubre la transformación que podemos lograr para tu
            evento especial.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-pastel-pink text-white"
                  : "bg-white text-gray-700 border border-pastel-beige hover:bg-pastel-pink/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Galería */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(item)}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-pastel-pink text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pastel-pink transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

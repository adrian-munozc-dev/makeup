"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    evento: "",
    fecha: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado! Te contactaremos pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pastel-pink/20 to-pastel-lilac/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Lista para tu transformación? Contáctame y hagamos realidad el look perfecto para tu evento especial.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Información de Contacto</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-pastel-pink/20 rounded-full p-3 mr-4">
                  <Phone className="text-pastel-pink" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">+52 (983) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pastel-purple/20 rounded-full p-3 mr-4">
                  <Mail className="text-pastel-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@bellamakeup.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pastel-lilac/20 rounded-full p-3 mr-4">
                  <MapPin className="text-pastel-lilac" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">123 Beauty Street, Ciudad Bella, CB 12345</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pastel-beige/40 rounded-full p-3 mr-4">
                  <Clock className="text-pastel-beige-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Horarios</h3>
                  <p className="text-gray-600">Lun - Sáb: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Dom: Solo eventos especiales</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6321.875128973265!2d-88.59732360916009!3d19.58409617579135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f50a77d2ae729bb%3A0x5ec88acca9b72988!2sTendejon%20Yuhaidi!5e0!3m2!1ses!2smx!4v1754940655713!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Bella Makeup Studio"
              ></iframe>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Envíame un Mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="evento" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    id="evento"
                    name="evento"
                    required
                    value={formData.evento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  >
                    <option value="">Selecciona un evento</option>
                    <option value="boda">Boda</option>
                    <option value="quinceañera">Quinceañera</option>
                    <option value="graduacion">Graduación</option>
                    <option value="fiesta">Fiesta/Evento Social</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha del Evento
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  placeholder="Cuéntame sobre tu evento y qué tipo de look tienes en mente..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pastel-pink hover:bg-pastel-pink/80 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

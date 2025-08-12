"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Palette, Check } from "lucide-react"

const servicios = [
  { id: "novia", nombre: "Maquillaje de Novia", precio: 150, duracion: "3-4 horas" },
  { id: "quinceañera", nombre: "Quinceañera", precio: 120, duracion: "2-3 horas" },
  { id: "evento", nombre: "Evento Social", precio: 80, duracion: "1-2 horas" },
  { id: "peinado", nombre: "Peinado Especial", precio: 60, duracion: "1-2 horas" },
  { id: "completo", nombre: "Paquete Completo", precio: 250, duracion: "4-5 horas" },
]

const horarios = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export default function AgendarCitaPage() {
  const [paso, setPaso] = useState(1)
  const [citaData, setCitaData] = useState({
    servicio: "",
    fecha: "",
    hora: "",
    nombre: "",
    email: "",
    telefono: "",
    notas: "",
  })

  const handleServicioSelect = (servicioId: string) => {
    setCitaData({ ...citaData, servicio: servicioId })
    setPaso(2)
  }

  const handleFechaSelect = (fecha: string) => {
    setCitaData({ ...citaData, fecha })
    setPaso(3)
  }

  const handleHoraSelect = (hora: string) => {
    setCitaData({ ...citaData, hora })
    setPaso(4)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para agendar la cita
    console.log("Cita agendada:", citaData)
    setPaso(5)
  }

  const servicioSeleccionado = servicios.find((s) => s.id === citaData.servicio)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Agendar Cita</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reserva tu cita en solo unos pasos y prepárate para lucir radiante en tu evento especial.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Indicador de pasos */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    paso >= num ? "bg-pastel-pink text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {paso > num ? <Check size={20} /> : num}
                </div>
                {num < 5 && <div className={`w-12 h-1 ${paso > num ? "bg-pastel-pink" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Paso 1: Seleccionar Servicio */}
        {paso === 1 && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Palette className="text-pastel-pink" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Selecciona tu Servicio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicios.map((servicio) => (
                <div
                  key={servicio.id}
                  onClick={() => handleServicioSelect(servicio.id)}
                  className="bg-gradient-to-br from-white to-pastel-beige/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pastel-beige hover:border-pastel-pink cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{servicio.nombre}</h3>
                  <p className="text-2xl font-bold text-pastel-purple mb-2">${servicio.precio}</p>
                  <p className="text-sm text-gray-600">Duración: {servicio.duracion}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Paso 2: Seleccionar Fecha */}
        {paso === 2 && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Calendar className="text-pastel-purple" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Selecciona la Fecha</h2>
            <p className="text-gray-600 mb-8">
              Servicio seleccionado:{" "}
              <span className="font-semibold text-pastel-purple">{servicioSeleccionado?.nombre}</span>
            </p>
            <div className="max-w-md mx-auto">
              <input
                type="date"
                value={citaData.fecha}
                onChange={(e) => handleFechaSelect(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent text-lg"
              />
            </div>
          </div>
        )}

        {/* Paso 3: Seleccionar Hora */}
        {paso === 3 && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Clock className="text-pastel-lilac" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Selecciona la Hora</h2>
            <p className="text-gray-600 mb-8">
              Fecha seleccionada:{" "}
              <span className="font-semibold text-pastel-purple">
                {new Date(citaData.fecha).toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {horarios.map((hora) => (
                <button
                  key={hora}
                  onClick={() => handleHoraSelect(hora)}
                  className="bg-white border-2 border-pastel-beige hover:border-pastel-pink hover:bg-pastel-pink/10 py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Paso 4: Información Personal */}
        {paso === 4 && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <User className="text-pastel-beige-dark" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Información Personal</h2>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-pastel-beige/20 to-pastel-lilac/20 p-6 rounded-2xl mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumen de tu cita:</h3>
                <div className="text-left space-y-2">
                  <p>
                    <span className="font-semibold">Servicio:</span> {servicioSeleccionado?.nombre}
                  </p>
                  <p>
                    <span className="font-semibold">Fecha:</span> {new Date(citaData.fecha).toLocaleDateString("es-ES")}
                  </p>
                  <p>
                    <span className="font-semibold">Hora:</span> {citaData.hora}
                  </p>
                  <p>
                    <span className="font-semibold">Precio:</span> ${servicioSeleccionado?.precio}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={citaData.nombre}
                      onChange={(e) => setCitaData({ ...citaData, nombre: e.target.value })}
                      className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={citaData.email}
                      onChange={(e) => setCitaData({ ...citaData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    required
                    value={citaData.telefono}
                    onChange={(e) => setCitaData({ ...citaData, telefono: e.target.value })}
                    className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="notas" className="block text-sm font-medium text-gray-700 mb-2">
                    Notas Adicionales
                  </label>
                  <textarea
                    id="notas"
                    rows={4}
                    value={citaData.notas}
                    onChange={(e) => setCitaData({ ...citaData, notas: e.target.value })}
                    className="w-full px-4 py-3 border border-pastel-beige rounded-lg focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                    placeholder="Cuéntame sobre tu evento, preferencias de maquillaje, alergias, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pastel-pink hover:bg-pastel-pink/80 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Confirmar Cita
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Paso 5: Confirmación */}
        {paso === 5 && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <Check className="text-green-600" size={48} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">¡Cita Confirmada!</h2>
            <div className="bg-gradient-to-br from-green-50 to-pastel-beige/30 p-8 rounded-2xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Tu cita ha sido agendada exitosamente. Recibirás un email de confirmación con todos los detalles.
              </p>

              <div className="text-left space-y-3 mb-6">
                <h3 className="font-semibold text-gray-800 text-lg mb-4">Detalles de tu cita:</h3>
                <p>
                  <span className="font-semibold">Servicio:</span> {servicioSeleccionado?.nombre}
                </p>
                <p>
                  <span className="font-semibold">Fecha:</span>{" "}
                  {new Date(citaData.fecha).toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>
                  <span className="font-semibold">Hora:</span> {citaData.hora}
                </p>
                <p>
                  <span className="font-semibold">Duración:</span> {servicioSeleccionado?.duracion}
                </p>
                <p>
                  <span className="font-semibold">Precio:</span> ${servicioSeleccionado?.precio}
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-pastel-beige">
                <h4 className="font-semibold text-gray-800 mb-2">Recordatorios importantes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Llega 15 minutos antes de tu cita</li>
                  <li>• Trae fotos de referencia si tienes algún look específico en mente</li>
                  <li>• Informa sobre cualquier alergia o sensibilidad</li>
                  <li>• Para cancelaciones, contacta con 24 horas de anticipación</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Botones de navegación */}
        {paso > 1 && paso < 5 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setPaso(paso - 1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Volver
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

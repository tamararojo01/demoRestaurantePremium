'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const DishCard = ({ dish, index }: any) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative h-80 overflow-hidden rounded-sm mb-6">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-sm font-medium">
          {dish.price}€
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
          {dish.name}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-4">
          {dish.description}
        </p>
        {dish.allergens && (
          <p className="text-xs text-gray-600 italic">
            Alérgenos: {dish.allergens}
          </p>
        )}
      </div>
    </motion.div>
  )
}

const MenuCard = ({ menu, index }: any) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-dark-900/50 backdrop-blur-sm border border-primary-900/20 p-8 md:p-10 rounded-sm hover:border-primary-500/40 transition-all duration-500"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          {menu.name}
        </h3>
        <div className="text-5xl font-serif font-bold text-primary-400 mb-4">
          {menu.price}€
        </div>
        <p className="text-gray-400 text-sm">
          {menu.courses} tiempos
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {menu.items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-gray-300">
            <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {menu.wine && (
        <div className="border-t border-primary-900/20 pt-6">
          <p className="text-sm text-gray-500 text-center">
            {menu.wine}
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'dishes' | 'menus'>('dishes')

  const dishes = [
    {
      name: 'Pulpo a la Brasa',
      description: 'Pulpo de roca, crema de patata ahumada, pimentón de la Vera y aceite de oliva virgen extra.',
      price: 28,
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=2940&auto=format&fit=crop',
      allergens: 'Moluscos, sulfitos',
    },
    {
      name: 'Chuletón de Buey Gallego',
      description: 'Madurado 45 días, a la brasa de encina. Acompañado de pimientos de padrón y patatas panaderas.',
      price: 65,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2831&auto=format&fit=crop',
      allergens: 'Sin alérgenos declarados',
    },
    {
      name: 'Lubina Salvaje',
      description: 'A la sal y brasa, con verduras de temporada asadas y salsa verde de perejil.',
      price: 42,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2940&auto=format&fit=crop',
      allergens: 'Pescado, huevo',
    },
    {
      name: 'Arroz Meloso de Bogavante',
      description: 'Arroz bomba, bogavante de lonja, fumet casero y alioli suave.',
      price: 35,
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2940&auto=format&fit=crop',
      allergens: 'Crustáceos, moluscos, huevo',
    },
    {
      name: 'Alcachofas Braseadas',
      description: 'Alcachofas confitadas, jamón ibérico crujiente, huevo a baja temperatura y trufa negra.',
      price: 24,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a0c7b0?q=80&w=2787&auto=format&fit=crop',
      allergens: 'Huevo, cerdo',
    },
    {
      name: 'Tarta de Queso Braseada',
      description: 'Tarta de queso artesanal con toque ahumado, compota de frutos rojos y helado de vainilla.',
      price: 12,
      image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=2942&auto=format&fit=crop',
      allergens: 'Lácteos, gluten, huevo',
    },
  ]

  const menus = [
    {
      name: 'Menú Mediterráneo',
      price: 75,
      courses: 6,
      items: [
        'Aperitivos de bienvenida',
        'Carpaccio de gamba roja',
        'Arroz caldoso de carabineros',
        'Rodaballo a la brasa',
        'Pre-postre',
        'Postre del chef',
      ],
      wine: 'Maridaje opcional: +35€',
    },
    {
      name: 'Menú Brasa Premium',
      price: 95,
      courses: 7,
      items: [
        'Selección de aperitivos premium',
        'Tartar de atún rojo con aguacate',
        'Gamba blanca de Huelva a la brasa',
        'Milhojas de solomillo y foie',
        'Chuletón de vaca gallega (para 2 personas)',
        'Pre-postre',
        'Trilogía de postres artesanales',
      ],
      wine: 'Maridaje de autor incluido',
    },
    {
      name: 'Experiencia del Chef',
      price: 125,
      courses: 10,
      items: [
        'Menú sorpresa de temporada',
        'Diseñado por el Chef Miguel Ángel Torres',
        '10 momentos gastronómicos únicos',
        'Producto de máxima calidad y km0',
        'Técnicas de brasa y ahumados artesanales',
        'Presentaciones de alta gastronomía',
      ],
      wine: 'Maridaje premium incluido',
    },
  ]

  return (
    <section id="carta" className="relative bg-dark-900 section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2940&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/95 to-dark-950" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary-400 text-sm tracking-[0.3em] uppercase mb-4">
            Nuestra Propuesta
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Carta <span className="text-primary-400">&</span> Menús
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Platos que celebran el Mediterráneo con el alma del fuego.
            Menús degustación diseñados para vivir una experiencia completa.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('dishes')}
            className={`px-8 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'dishes'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Platos Destacados
          </button>
          <button
            onClick={() => setActiveTab('menus')}
            className={`px-8 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'menus'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Menús Degustación
          </button>
        </div>

        {/* Content */}
        {activeTab === 'dishes' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {dishes.map((dish, index) => (
              <DishCard key={index} dish={dish} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menus.map((menu, index) => (
              <MenuCard key={index} menu={menu} index={index} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#reservas"
            className="btn-primary inline-block"
          >
            Reservar Mesa
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Carta completa disponible en el restaurante
          </p>
        </motion.div>
      </div>
    </section>
  )
}

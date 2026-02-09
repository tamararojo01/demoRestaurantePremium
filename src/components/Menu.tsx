'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'

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

const SimpleMenuItem = ({ item, index }: any) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex justify-between items-start gap-4 border-b border-gray-800 pb-4"
    >
      <div className="flex-1">
        <h4 className="text-lg font-serif font-bold text-white mb-1">{item.name}</h4>
        {item.description && (
          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
        )}
        {item.allergens && (
          <p className="text-xs text-gray-600 italic mt-1">Alérgenos: {item.allergens}</p>
        )}
      </div>
      <div className="text-primary-400 font-bold text-lg whitespace-nowrap">{item.price}€</div>
    </motion.div>
  )
}

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'entrantes' | 'principales' | 'arroces' | 'postres' | 'bebidas' | 'menus'>('entrantes')

  const entrantes = [
    { name: 'Carpaccio de Gamba Roja', description: 'Gamba de Huelva con aceite de arbequina y láminas de parmesano', price: 26, allergens: 'Crustáceos, lácteos' },
    { name: 'Tartar de Atún Rojo', description: 'Atún de Almadraba, aguacate, sésamo y vinagreta de cítricos', price: 24, allergens: 'Pescado, sésamo' },
    { name: 'Pulpo a la Brasa', description: 'Pulpo de roca, crema de patata ahumada y pimentón de la Vera', price: 28, allergens: 'Moluscos, sulfitos' },
    { name: 'Alcachofas Confitadas', description: 'Con jamón ibérico crujiente, huevo a baja temperatura y trufa negra', price: 24, allergens: 'Huevo, cerdo' },
    { name: 'Burrata Italiana', description: 'Con tomates cherry asados, albahaca fresca y reducción de módena', price: 18, allergens: 'Lácteos' },
    { name: 'Croquetas de Rabo de Toro', description: 'Receta tradicional con bechamel casera (6 uds)', price: 16, allergens: 'Gluten, lácteos, huevo' },
    { name: 'Ensalada de Perdiz Escabechada', description: 'Brotes frescos, verduras de temporada y vinagreta de romero', price: 22, allergens: 'Sulfitos' },
    { name: 'Navajas a la Plancha', description: 'Con ajo, perejil y limón', price: 32, allergens: 'Moluscos' },
  ]

  const principales = [
    { name: 'Chuletón de Buey Gallego (1kg)', description: 'Madurado 45 días, a la brasa de encina. Para compartir', price: 85, allergens: 'Sin alérgenos' },
    { name: 'Entrecot de Angus (400g)', description: 'Con patatas panaderas y pimientos de padrón', price: 48, allergens: 'Sin alérgenos' },
    { name: 'Secreto Ibérico a la Brasa', description: 'Con puré de manzana y cebolla caramelizada', price: 32, allergens: 'Cerdo' },
    { name: 'Cordero Lechal Asado', description: 'Al horno de leña con guarnición de temporada (min. 2 personas)', price: 45, allergens: 'Sin alérgenos' },
    { name: 'Lubina Salvaje a la Sal', description: 'Con verduras asadas y salsa verde de perejil', price: 42, allergens: 'Pescado, huevo' },
    { name: 'Rodaballo a la Brasa', description: 'Con caviar de berenjena ahumada y aceite de ajo negro', price: 48, allergens: 'Pescado' },
    { name: 'Presa Ibérica de Bellota', description: 'Con patatas a lo pobre y pimientos del piquillo', price: 36, allergens: 'Sin alérgenos' },
    { name: 'Merluza a la Vasca', description: 'Con almejas, espárragos y salsa de perejil', price: 38, allergens: 'Pescado, moluscos' },
  ]

  const arroces = [
    { name: 'Arroz Meloso de Bogavante', description: 'Arroz bomba, bogavante de lonja y fumet casero (min. 2 pers)', price: 35, allergens: 'Crustáceos, moluscos' },
    { name: 'Arroz Negro de Chipirón', description: 'Con alioli suave (min. 2 pers)', price: 28, allergens: 'Moluscos, huevo, pescado' },
    { name: 'Paella Valenciana', description: 'Pollo, conejo, garrofón y judía verde (min. 2 pers)', price: 26, allergens: 'Sin alérgenos' },
    { name: 'Arroz de Pato y Boletus', description: 'Arroz meloso con magret y setas de temporada (min. 2 pers)', price: 32, allergens: 'Sin alérgenos' },
  ]

  const postres = [
    { name: 'Tarta de Queso Braseada', description: 'Con compota de frutos rojos y helado de vainilla', price: 12, allergens: 'Lácteos, gluten, huevo' },
    { name: 'Coulant de Chocolate', description: 'Con helado de pistacho', price: 11, allergens: 'Lácteos, gluten, huevo, frutos secos' },
    { name: 'Torrija de Brioche', description: 'Con helado de canela y caramelo salado', price: 10, allergens: 'Lácteos, gluten, huevo' },
    { name: 'Crema Catalana', description: 'Receta tradicional caramelizada al momento', price: 9, allergens: 'Lácteos, huevo' },
    { name: 'Mousse de Limón', description: 'Con merengue italiano y aire de albahaca', price: 10, allergens: 'Lácteos, huevo' },
    { name: 'Tabla de Quesos Artesanales', description: 'Selección de 5 quesos con mermelada casera', price: 16, allergens: 'Lácteos, frutos secos' },
  ]

  const bebidas = [
    { name: 'Vino Tinto Reserva', description: 'Ribera del Duero, Rioja, Priorat - Copa/Botella', price: 8 },
    { name: 'Vino Blanco', description: 'Albariño, Verdejo, Rueda - Copa/Botella', price: 7 },
    { name: 'Vino Rosado', description: 'Navarra, Cigales - Copa/Botella', price: 6 },
    { name: 'Champagne', description: 'Moët & Chandon, Veuve Clicquot - Botella', price: 75 },
    { name: 'Cava Brut Nature', description: 'DO Cava - Copa/Botella', price: 6 },
    { name: 'Cerveza Artesanal', description: 'Selección nacional - 33cl', price: 5 },
    { name: 'Agua Mineral', description: 'Con/Sin gas - 75cl', price: 3 },
    { name: 'Refrescos Premium', description: 'Coca-Cola, Fanta, Nestea, Tónica', price: 4 },
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
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab('entrantes')}
            className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'entrantes'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Entrantes
          </button>
          <button
            onClick={() => setActiveTab('principales')}
            className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'principales'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Carnes & Pescados
          </button>
          <button
            onClick={() => setActiveTab('arroces')}
            className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'arroces'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Arroces
          </button>
          <button
            onClick={() => setActiveTab('postres')}
            className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'postres'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Postres
          </button>
          <button
            onClick={() => setActiveTab('bebidas')}
            className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'bebidas'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Bebidas
          </button>
          <button
            onClick={() => setActiveTab('menus')}
            className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
              activeTab === 'menus'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
            }`}
          >
            Menús Degustación
          </button>
        </div>

        {/* Content */}
        {activeTab === 'entrantes' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {entrantes.map((item, index) => (
              <SimpleMenuItem key={index} item={item} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'principales' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {principales.map((item, index) => (
              <SimpleMenuItem key={index} item={item} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'arroces' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-center text-gray-400 mb-6 italic">Todos nuestros arroces son para mínimo 2 personas</p>
            {arroces.map((item, index) => (
              <SimpleMenuItem key={index} item={item} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'postres' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {postres.map((item, index) => (
              <SimpleMenuItem key={index} item={item} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'bebidas' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-center text-gray-400 mb-6">Consulta nuestra carta de vinos completa</p>
            {bebidas.map((item, index) => (
              <SimpleMenuItem key={index} item={item} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'menus' && (
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
        </motion.div>
      </div>
    </section>
  )
}

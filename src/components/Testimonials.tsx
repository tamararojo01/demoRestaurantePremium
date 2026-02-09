'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const TestimonialCard = ({ testimonial, index }: any) => {
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
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-primary-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
          <span className="text-primary-400 font-serif font-bold text-xl">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-white">{testimonial.author}</p>
          <p className="text-sm text-gray-500">{testimonial.platform}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      quote: 'Una experiencia gastronómica inolvidable. El pulpo a la brasa es una auténtica obra de arte. El servicio impecable y el ambiente, simplemente mágico. Sin duda, volveremos.',
      author: 'María González',
      platform: 'Google Reviews',
    },
    {
      quote: 'Celebramos nuestro aniversario aquí y fue perfecto. El menú degustación nos dejó sin palabras. Cada plato es un viaje de sabores y texturas. Totalmente recomendable.',
      author: 'Carlos Martínez',
      platform: 'TripAdvisor',
    },
    {
      quote: 'La mejor carne que he probado jamás. El chuletón estaba en su punto y el sabor a brasa es incomparable. El chef sabe lo que hace. Un 10 en todo.',
      author: 'Laura Sánchez',
      platform: 'TheFork',
    },
  ]

  return (
    <section className="relative bg-dark-950 section-padding overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
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
            Opiniones
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Lo Que Dicen <span className="text-primary-400">Nuestros Clientes</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            La satisfacción de nuestros comensales es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary-400 mb-2">4.9/5</div>
            <p className="text-gray-400 text-sm">Google Reviews</p>
          </div>
          <div className="w-px h-12 bg-gray-700 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary-400 mb-2">4.8/5</div>
            <p className="text-gray-400 text-sm">TripAdvisor</p>
          </div>
          <div className="w-px h-12 bg-gray-700 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary-400 mb-2">9.5/10</div>
            <p className="text-gray-400 text-sm">TheFork</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

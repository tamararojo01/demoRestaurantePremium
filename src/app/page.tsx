import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Experience from '@/components/Experience'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Reservations from '@/components/Reservations'
import Testimonials from '@/components/Testimonials'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Menu />
      <Gallery />
      <Reservations />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

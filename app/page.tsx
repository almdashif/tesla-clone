import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import VehicleGrid from '@/components/VehicleGrid'
import EnergySection from '@/components/EnergySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <VehicleGrid />
      <EnergySection />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ScrollPhrase from '@/components/ScrollPhrase'
import Marquee from '@/components/Marquee'
import Servicos from '@/components/Servicos'
import Localizacao from '@/components/Localizacao'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'
import RadarNav from '@/components/RadarNav'

export default function Home() {
  return (
    <SmoothScroll>
<Navbar />
      <main>
        <Hero />
        <div className="relative z-10">
        <ScrollPhrase />
        <Marquee />
        <Servicos />
        <Localizacao />
        <Contato />
        </div>
      </main>
      <Footer />
      <WhatsApp />
      <RadarNav />
    </SmoothScroll>
  )
}

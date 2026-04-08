import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ScrollPhrase from '@/components/ScrollPhrase'
import Marquee from '@/components/Marquee'
import Servicos from '@/components/Servicos'
import Mensalista from '@/components/Mensalista'
import SegurancaMulher from '@/components/SegurancaMulher'
import Localizacao from '@/components/Localizacao'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
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
        <SegurancaMulher />
        <Mensalista />
        <Localizacao />
        <Contato />
        </div>
      </main>
      <Footer />
      <RadarNav />
    </SmoothScroll>
  )
}

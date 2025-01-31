import Header from "../components/beranda/Header"
import Hero from "../components/beranda/Hero"
import Solusi from "../components/beranda/Solusi"
import Banner from "../components/beranda/Banner"
import Kenapa from "../components/beranda/Kenapa"
import Mitra from '../components/beranda/Mitra'
import Mendukung from "../components/beranda/Mendukung"
import Footer from "../components/contact/Footer"
import MasaDepan from "../components/beranda/MasaDepan"
import WhatsAppButton from "../components/beranda/WhatsAppButon"


function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Solusi />
        <Banner />
        <Kenapa />
        <Mitra />
        <Mendukung />
        <MasaDepan />
        <Footer />
        <WhatsAppButton />
    </>

  )
}

export default Home
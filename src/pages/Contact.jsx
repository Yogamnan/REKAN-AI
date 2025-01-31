import Header from "../components/beranda/Header"
import CustomerService from "../components/contact/CustomerService"
import FormSection from "../components/contact/FormSection"
import FAQSection from "../components/contact/FAQSection"
import BottomCTA from "../components/contact/BottomCTA"
import WhatsAppButton from "../components/beranda/WhatsAppButon"
import Footer from "../components/contact/Footer"
function Contact() {
  return (
    <>
    <Header />
    <CustomerService />
    <FormSection />
    <FAQSection />
    <BottomCTA />
    <Footer />
    <WhatsAppButton />
    </>

  )
}

export default Contact
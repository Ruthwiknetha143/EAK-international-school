import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./default.css"
import Navbar from './Navbar'
import Hero from './Hero';
import Whyus from './Whyus';
import Programs from './Programs';
import Highlights from './Highlights';
import Facilities from './Facilities';
import Process from './Process';
import Dates from './Dates';
import Required from './Required';
import Fees from './Fees';
import Parents from './Parents';
import FAQs from './FAQs';
import Footer from './Footer';
import Contact from './Contact';
import EnquiryModal from './EnquiryModal';

const Mine = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyus/>
      <Programs/>
      <Highlights/>
      <Facilities/>
      <Process/>
      <Dates/>
      <Required/>
      <Fees/>
      <Parents/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <EnquiryModal/>
    </>
  )
}

export default Mine

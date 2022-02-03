import Header from '../src/Components/Header/header'
import AboutUs from '../src/Components/AboutUs/aboutUs'
import ContactUs from './Components/ContactUs/contactUs';
import Social from './Components/Social/social';
import Ecommerce from './Components/Ecommerce/ecommerce';
import Home from './Components/Admin/home'

function App() {
  return (
    <>
    <div className="container">
      <Header />
      <AboutUs />
      <Social />
      <Ecommerce />
      <ContactUs />
      <Home />
    </div>
    </>
  );
}

export default App;

import Header from '../src/Components/Header/header'
import AboutUs from '../src/Components/AboutUs/aboutUs'
import ContactUs from './Components/ContactUs/contactUs';
import Social from './Components/Social/social';
import Ecommerce from './Components/Ecommerce/ecommerce';
import AdminHeader from './Components/Admin/Header/header'

function App() {
  return (
    <div className="container">
      <Header />
      <AboutUs />
      <Social />
      <Ecommerce />
      <ContactUs />
      <AdminHeader />
    </div>
  );
}

export default App;

import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import {Banner} from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero"
import Product from "./component/Products/Product";
import TopProducts from "./component/TopProducts/TopProducts";
import Subscribe from "./component/Subscribe/Subscribe";
import Testimonials from "./component/Testimonials/Testimonials";
import Footer from "./component/Footer/Footer";
import Popup from "./component/Popup/Popup";

function App() {

  const [orderPopup,setOrderPop] = useState(false);

  const handleOrderPopup = ()=>{
    setOrderPop(!orderPopup);
  }

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className=" dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup= {handleOrderPopup}/>
        <Hero handleOrderPopup= {handleOrderPopup}/>
        <Product/>
        <TopProducts handleOrderPopup= {handleOrderPopup}/>
         <Banner/>
         <Subscribe/>
         <Testimonials/>
         <Footer/>
         <Popup orderPopup={orderPopup} setOrderPopup={setOrderPop} />
      </div>
        
    </>
  )
}

export default App;

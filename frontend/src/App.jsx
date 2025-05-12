import HomePage from "./landing_page/home/HomePage"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./landing_page/signup/Signup"
import Login from "./landing_page/signup/Login"
import AboutPage from "./landing_page/about/AboutPage"
import PricingPage from "./landing_page/pricing/PricingPage"
import ProductPage from "./landing_page/products/ProductPage"
import SupportPage from "./landing_page/support/SupportPage"
import Navbar from "./landing_page/Navbar"
import Footer from "./landing_page/Footer"
import './App.css'
import NotFound from "./landing_page/NotFound"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/pricing" element={<PricingPage/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/support" element={<SupportPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

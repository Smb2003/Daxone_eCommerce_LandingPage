import './App.css'
import DiscountCart from './components/DiscountCart/DiscountCart'
import All_Products from './components/allProducts/All_Products'
import Banner from './components/banner/Bannner'
import BestSellingItems from './components/bestSellingItems/BestSellingItems'
import Footer from './components/footer/Footer'
import HeroSectionMain from './components/mainHeroSection/HeroSectionMain'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
      <Navbar/>
      <HeroSectionMain/>
      <Banner/>
      <BestSellingItems/>
      <DiscountCart/>
      <All_Products/>
      <Footer/>
    </>
  )
}

export default App

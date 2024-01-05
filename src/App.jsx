import './App.css'
import DiscountCart from './components/DiscountCart/DiscountCart'
import All_Products from './components/allProducts/All_Products'
import Banner from './components/banner/Bannner'
import BestSellingItems from './components/bestSellingItems/BestSellingItems'
import Footer from './components/footer/Footer'
import HeroSectionMain from './components/mainHeroSection/HeroSectionMain'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  const [data, setData] = useState({});
  const [clicked, setClicked] = useState(false);
  return (
    <>
    {
    clicked
    ?
    <div className="container">
      <img src={data.image} alt="Cart"  />
      <div className='innerContainer'>
      <h5>{data.category}</h5>
      <h1>{data.heading}</h1>
      <span style={{marginRight:10}}>Price: {data.price}</span>
      <span style={{textDecoration:"line-through"}}>{data.Oldprice}</span><br />
      <button onClick={()=>{setClicked(false)}} className='Button'>Back To Page</button>
      </div>
    </div>
      :
      <div> 
      <Navbar/>
      <HeroSectionMain/>
      <Banner/>
      <BestSellingItems data={data} setData={setData} clicked={clicked} setClicked={setClicked}/>
      <DiscountCart/>
      <All_Products  data={data} setData={setData} clicked={clicked} setClicked={setClicked}/>
      <Footer/>
      </div>
    }
    </>
  )
}

export default App

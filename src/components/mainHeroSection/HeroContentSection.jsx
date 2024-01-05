import Button from "../../Buttton";

const HeroContent = () => {
    return(
        <div className="MainHeroContent">
           <div 
            data-aos="fade-left"data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="600"
             className="MainContent">
            <h2>30% off</h2>
            <h1>Comfort Chair</h1>
            <p>Collect from Daxone & get 30% discount</p>
           <Button label="SHOP NOW"/>
           </div>
        </div>
    )
};
export default HeroContent;
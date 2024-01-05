import HeroImage from '../../assets/images/hm1-single-1.png';
const HeroImageSection = () =>{

    return(
        <div 
        className="HeroMainImage">
            <img data-aos="fade-right"
       data-aos-anchor="#example-anchor"
       data-aos-offset="600"
       data-aos-duration="600" src={HeroImage} alt="HeroMainImage" />
        </div>
    )
};
export default HeroImageSection;
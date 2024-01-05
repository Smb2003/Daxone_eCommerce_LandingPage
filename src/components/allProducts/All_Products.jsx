import Content from "../bestSellingItems/Content";
import Carts from "../bestSellingItems/Carts";
import img1 from '../../assets/images/quickview-l1.jpg';
import img2 from '../../assets/images/quickview-l2.jpg';
import img3 from '../../assets/images/quickview-l3.jpg';
import img4 from '../../assets/images/pro-hm1-4.jpg';
import img5 from '../../assets/images/pro-hm1-5.jpg';
import img6 from '../../assets/images/hm1-single-2.png';
import img7 from '../../assets/images/pro-hm1-7.jpg';
import img8 from '../../assets/images/pro-hm1-8.jpg';

const All_Products = ({clicked, setClicked, data, setData}) => {
    const products = [
        {
            url: img1,
            category: "chair",
            name:"Golden Easy Spot Chair.",
            price: "$210.00"
        },
        {
            url :img2,
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$250.00",
            oldPrice :"$270.00"
        },
        {
            url :img3,
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$200.00"
        },
        {
            url: img4,
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$250.00"
        },
        {
            url: img5,
            category: "chair",
            name:"Golden Easy Spot Chair.",
            price: "$210.00"
        },
        {
            url :img6,
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$260.00"
        //    oldPrice = "$270.00"
        },
        {
            url: img7,
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$240.00",
            oldPrice :"$290.00"
        },{
            url: img8,
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$280.00"
        }

    ];
    return(
        <div className="allProducts">
             <Content
             heading= "All Products"
             para1= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
             para2= "Lorem Ipsum has been the industry's standard dummy text"
             />
             <div className="CartItems">
                   <Carts products={products} data={data} setData={setData} clicked={clicked} setClicked={setClicked}/>
                </div>
        </div>
    )
};
export default All_Products;
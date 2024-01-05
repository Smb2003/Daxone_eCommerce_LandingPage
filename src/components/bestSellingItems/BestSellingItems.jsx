import Content from "./Content";
import Carts from "./Carts";
import img1 from '../../assets/images/quickview-l1.jpg';
import img2 from '../../assets/images/quickview-l2.jpg';
import img3 from '../../assets/images/quickview-l3.jpg';
import img4 from '../../assets/images/pro-hm1-4.jpg';
const BestSellingItems = ({clicked, setClicked, data, setData}) => {
    const products =[
        {
            url: img1,
            category: "chair",
            name: "Golden Easy Spot Chair.",
            price: "$210.00",
         //    oldPrice = "$230.00"
        },
        {
            url: img2,
            category: "chair",
            name:"Golden Easy Spot Chair.",
            price: "$210.00",
            oldPrice: "$230.00"
        },
        {
            url: img3,
            category: "chair",
            name: "Golden Easy Spot Chair.",
            price: "$250.00"
            //    oldPrice = "$230.00"
        },
        {
            url: img4,
            category: "chair",
            name: "Golden Easy Spot Chair.",
            price: "$320.00",
            oldPrice: "$120.00"
        }
    ];
    return(
        <div className="SellingItems">
            <Content
             heading= "Best Sell"
             para1= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
             para2= "Lorem Ipsum has been the industry's standard dummy text"
             />
             <div className="CartItems">
                <Carts products = {products} data={data} setData={setData} clicked={clicked} setClicked={setClicked}/>
                   
            </div>
        </div>
    )
};
export default BestSellingItems;
import Content from "./Content";
import Carts from "./Carts";

const BestSellingItems = () => {
    const products =[
        {
            url: "/src/assets/Images/quickview-l1.jpg",
            category: "chair",
            name: "Golden Easy Spot Chair.",
            price: "$210.00",
         //    oldPrice = "$230.00"
        },
        {
            url: "/src/assets/Images/quickview-l2.jpg",
            category: "chair",
            name:"Golden Easy Spot Chair.",
            price: "$210.00",
            oldPrice: "$230.00"
        },
        {
            url: "/src/assets/Images/quickview-l3.jpg",
            category: "chair",
            name: "Golden Easy Spot Chair.",
            price: "$250.00"
            //    oldPrice = "$230.00"
        },
        {
            url: "/src/assets/Images/pro-hm1-4.jpg",
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
                <Carts products = {products}/>
                   
            </div>
        </div>
    )
};
export default BestSellingItems;
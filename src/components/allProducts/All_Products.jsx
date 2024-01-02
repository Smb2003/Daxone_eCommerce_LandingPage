import Content from "../bestSellingItems/Content";
import Carts from "../bestSellingItems/Carts";
const All_Products = () => {
    const products = [
        {
            url: "/src/assets/Images/quickview-l1.jpg",
            category: "chair",
            name:"Golden Easy Spot Chair.",
            price: "$210.00"
        },
        {
            url :"/src/assets/Images/quickview-l2.jpg",
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$250.00",
            oldPrice :"$270.00"
        },
        {
            url :"/src/assets/Images/quickview-l3.jpg",
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$200.00"
        },
        {
            url :"/src/assets/Images/pro-hm1-4.jpg",
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$250.00"
        },
        {
            url: "/src/assets/Images/pro-hm1-5.jpg",
            category: "chair",
            name:"Golden Easy Spot Chair.",
            price: "$210.00"
        },
        {
            url :"/src/assets/Images/hm1-single-2.png",
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$260.00"
        //    oldPrice = "$270.00"
        },
        {
            url :"/src/assets/Images/pro-hm1-7.jpg",
            category :"chair",
            name:"Golden Easy Spot Chair.",
            price :"$240.00",
            oldPrice :"$290.00"
        },{
            url :"/src/assets/Images/pro-hm1-8.jpg",
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
                   <Carts products={products}/>
                </div>
        </div>
    )
};
export default All_Products;
import Button from "../../Buttton";

const DiscountCart = () => {
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:20,minHeight:150, }}>
            <div className="Discount_Img"></div>
            <div style={{margin:20}}>  
                <p style={{maxWidth:400}}>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.</p>
                <h1>Winter Discount <br />Up to 30%</h1>
                <p style={{maxWidth:400}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <Button label="SHOP NOW"/>
            </div>
        </div>
    )

};
export default DiscountCart;

const Carts = ({products, data ,setData,setClicked}) => {
    const ShowData = (Value) => {
        // console.log(Value.children );
      setData({
          ...data,
          ["image"]: Value.children[0].src,
          ["category"]: Value.children[1].innerText ,
          ["heading"]: Value.children[2].innerText ,
          ["price"]: Value.children[3].innerText ,
          ["Oldprice"] : Value.children[4].innerText, 
          
      })
       console.log(data);
       setClicked(true)
    }
        return(
        <>
            {
                products.map((items,index)=>{
                    const {url,category,name,price,oldPrice} = items;
                    return(
                        <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="Carts" key={index} onClick={(e)=>{ShowData(e.currentTarget)}}>
                            <img src={url} alt="Cart" style={{minWidth:250, height:190}} />
                            <p>{category}</p>
                            <h6>{name}</h6>
                            <span style={{marginRight:10}}>{price}</span>
                            <span style={{textDecoration:"line-through"}}>{oldPrice}</span><br />
                            {/* <button onClick={(e)=>{ShowData(e.currentTarget.parentElement)}}>Place Order</button> */}
                        </div>
                    )

                })
            }
           
        </>
    )
};
export default Carts;

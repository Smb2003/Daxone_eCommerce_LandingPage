const Carts = ({products}) => {
        return(
        <>
            {
                products.map((items,index)=>{
                    const {url,category,name,price,oldPrice} = items;
                    return(
                        <div className="Carts">
                            <img src={url} alt="Cart" style={{minWidth:250, height:190}} />
                            <p>{category}</p>
                            <h6>{name}</h6>
                            <span style={{marginRight:10}}>{price}</span>
                            <span style={{textDecoration:"line-through"}}>{oldPrice}</span>
                        </div>
                    )

                })
            }
           
        </>
    )
};
export default Carts;

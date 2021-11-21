import "./product.css"

const Product=({img,link})=> {
    return (
        <div className="p">
            <div className="p-browser">
                <p className="p-circle"></p>
                <p className="p-circle"></p>
                <p className="p-circle"></p>
              

            </div>
           <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />


           </a>
        </div>
    )
}

export default Product

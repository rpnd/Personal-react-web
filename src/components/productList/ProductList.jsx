import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList=()=> {
    return (
        <div className="pl">
          
            <div className="pl-texts">

                <h1 className="pl-title">create & inspire. It`s Reza</h1>
                <p className="pl-desc">
RPND is a creative portfolio that your work has been waiting
Beautiful homes, stunning portofolio styles &your work has
 been waiting.
                </p>
            </div>
 <div className="pl-list">
{products.map(item=>(


<Product key={item.id} img={item.img} link={item.link}/>
))}



 </div>
              
            </div>
       
    )
}

export default ProductList

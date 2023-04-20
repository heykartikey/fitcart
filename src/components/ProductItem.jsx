import { Link } from "react-router-dom";
import "./product-item.css"

const ProductItem = ({id, name, price, image}) => {
  return (
    <div className="card">
      <div className="inner">
        <div className="image">
          <img src={image} />
        </div>
        <div className="details">
          <Link to={`products/${id}`}>
            <div className="title">{name}</div>
          </Link>
          <div className="price">$ {price}</div>
        </div>
      </div>
    </div>
    // <div className="product-card">
    //   <img src="" />
    //   <div>
    //     <h2>Chair</h2>
    //     <span>4000</span>
    //   </div>
    // </div>
  )
}

export default ProductItem;


// [
//   {
//     "productId": 2,
//     "productName": "Chair",
//     "displayImage": null,
//     "displayImagePath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2810%29_0898.png",
//     "sideView": null,
//     "sideViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2826%29_88d4.png",
//     "aerialView": null,
//     "aerialViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2840%29_4c5e.png",
//     "backView": null,
//     "backViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2856%29_0f12.png",
//     "productPrice": 4000
//   }
// ]
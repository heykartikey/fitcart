import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./product.css"

const Product = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({
    "productId": 1,
    "productName": "Table",
    "displayImage": null,
    "displayImagePath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%281%29_e6ed.png",
    "sideView": null,
    "sideViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2826%29_d124.png",
    "aerialView": null,
    "aerialViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2840%29_04e5.png",
    "backView": null,
    "backViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2856%29_8bb2.png",
    "productPrice": 20000
  })

  const [page, setPage] = useState(1);

  useEffect(() => {
    const aborter = new AbortController();

    fetch(`https://localhost:7095/api/Furniture/GetById/${productId}`, {
      signal: aborter.signal
    }).then(r => r.json()).then(setProduct)

    return () => {
      aborter.abort()
    }
  }, [productId])

  return <div>
    <Navbar />

    <main>
      <div className="container">
        <div className="left">
          <div>
            <img src={product.displayImagePath} />
            <img src={product.sideViewPath} />
          </div>
          <div>
            <img src={product.aerialViewPath} />
            <img src={product.backViewPath} />
          </div>
        </div>
        <div className="right">
          <h1>{product.productName}</h1>
          <p>{product.productPrice}</p>
        </div>
      </div>
    </main>
  </div>
}

export default Product;

// https://localhost:7095/api/Furniture/GetById/1


// {
//   "productId": 1,
//   "productName": "Table",
//   "displayImage": null,
//   "displayImagePath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%281%29_e6ed.png",
//   "sideView": null,
//   "sideViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2826%29_d124.png",
//   "aerialView": null,
//   "aerialViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2840%29_04e5.png",
//   "backView": null,
//   "backViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2856%29_8bb2.png",
//   "productPrice": 20000
// }
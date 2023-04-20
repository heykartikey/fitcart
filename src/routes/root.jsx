import "./root.css"

import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const RECORDS_PER_PAGE = 10;

const data = [
  {
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
  },
  {
    "productId": 2,
    "productName": "Chair",
    "displayImage": null,
    "displayImagePath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2810%29_0898.png",
    "sideView": null,
    "sideViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2826%29_88d4.png",
    "aerialView": null,
    "aerialViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2840%29_4c5e.png",
    "backView": null,
    "backViewPath": "https://furniturecontainer.blob.core.windows.net/pawancontainer/Screenshot%20%2856%29_0f12.png",
    "productPrice": 4000
  }
]

const Root = () => {
  const [products, setProducts] = useState(data)
  const [page, setPage] = useState(1);

  useEffect(() => {
    const aborter = new AbortController();

    fetch(`https://localhost:7095/api/Furniture/getRecords?PageNumber=${page}&PageSize=${RECORDS_PER_PAGE}`, {
      signal: aborter.signal
    }).then(setProducts)

    return () => {
      aborter.abort()
    }
  }, [page])

  return <div>
    <Navbar setProducts={setProducts} />
    <main>
      {products.length > 0 ?
        <div className="products">
          {products.map(product =>
            <ProductItem id={product.productId} name={product.productName} price={product.productPrice} image={product.displayImagePath} />
          )
          }
        </div>
        : <div className="empty">No Item</div>
      }
      <div className="page-step">
        <button style={{
          visibility: page > 1 ? "visible" : "hidden"
        }} onClick={() => setPage(page => page - 1)}>Previous</button>
        <button onClick={() => {
          if (data.length > 0) {
            setPage(page => page + 1)
          }
        }}>Next</button>
      </div>
    </main>
  </div>
}

export default Root;
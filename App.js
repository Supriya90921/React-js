import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import ProductList from "./componets/ProductList";

function App() {
  const productListData = [
    {
      price: 99999,
      name: "iphone 14 pro max",
      quantity: 1,
    },
    {
      price: 9999,
      name: "realme",
      quantity: 0,
    },
  ];

//Hook 
  let [productList, setproductList] = useState(productListData)

const incrementQuantity = (index) =>{
  let newproductList = [...productList]
  newproductList[index].quantity ++
  setproductList(newproductList);
}
 return (
    <>
      <Navbar />
      <main className="container mt-4">
      <ProductList productList={productList} incrementQuantity= {incrementQuantity} />
      </main>
    </>
  );
}

export default App;

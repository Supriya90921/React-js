import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ProductList from "./componets/ProductList";
import AddItem from "./componets/AddItem";

function App() {
  const productListData = [
    {
      price: 99999,
      name: "iphone 14 pro max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "realme",
      quantity: 0,
    },
  ];

  //Hook
  let [productList, setproductList] = useState(productListData);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newproductList[index].quantity++;
  totalAmount += newproductList[index].price;
    setproductList(newproductList);
    setTotalAmount(totalAmount);
  };

  const decrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--;
      newTotalAmount -= newproductList[index].price;
    }
    setproductList(newproductList);
    setTotalAmount(newTotalAmount);
  };

  const resetCart = () => {
    let newproductList = [...productList];
    newproductList.map((products) => {
      products.quantity = 0;
    });
    setproductList(newproductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newproductList[index].quantity * newproductList[index].price;
    setTotalAmount(newTotalAmount);
    newproductList.splice(index, 1);
    setproductList(newproductList);
  };
  
  const addItem = (name, price) => {
    let newproductList = [...productList];
    newproductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setproductList(newproductList);  
  };

  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <AddItem  addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetCart={resetCart} />
    </>
  );
}

export default App;

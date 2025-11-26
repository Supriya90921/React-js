import "./App.css";
import Navbar from "./componets/Navbar";
import ProductList from "./componets/ProductList";

function App() {
  const productList = [
    {
      price: 99999,
      name: "iphone 14 pro max",
      Quantity: 1,
    },
    {
      price: 9999,
      name: "realme",
      Quantity: 0,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container m-4">
      <ProductList productList={productList} />
      </main>
    </>
  );
}

export default App;

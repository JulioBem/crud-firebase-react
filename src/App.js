/* eslint-disable array-callback-return */
import "./App.css";
import { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import imglogo from './assets/products_img.png'

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let productsArray = [];
      querySnapshot.forEach((doc) => {
        productsArray.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productsArray);
    });
    return () => unsub();
  }, []);

  const toggleComplete = async (product) => {
    await updateDoc(doc(db, "products", product.id), { bought: !product.bought });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
  };

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="global_container">
      <div className="forms_container">
        <img src={imglogo} alt="imagem logo"></img>
        <form className="searchbar">
          <input
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                  setSearchTerm(event.target.value);
              }}
          />
        </form>
        <AddProduct />
      </div>
      <div className="product_container">
        {products.filter((val) => {
          if (searchTerm === "") {
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((product) => (
          <Product
            key={product.id}
            product={product}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

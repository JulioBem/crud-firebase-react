import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "products"), {
      title,
      price,
      createdAt: new Date(),
      bought: false,
    });

    setTitle("");
    setPrice("");
    
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter product..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="input_container">
        <input
          type="number"
          placeholder="Enter price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddProduct;

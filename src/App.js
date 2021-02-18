import React, {useState } from "react";
import InputArea from './components/InputArea';
import ItemsList from './components/ItemsList';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("pcs");

  return (
    <div className="app-container">
      <header>
        <img src="" alt=""></img>
        <h1>Shopping List</h1>
      </header>
      <InputArea 
        inputText={inputText} 
        setInputText={setInputText} 
        items={items} setItems={setItems} 
        quantity={quantity} setQuantity={setQuantity} 
        unit={unit} setUnit={setUnit} 
      />
      <ItemsList items={items} setItems={setItems} />
      <footer>
        Simple Shopping List App created using React.
      </footer>
    </div>
  );
}

export default App;

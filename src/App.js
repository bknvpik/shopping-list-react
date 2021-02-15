import React, {useState } from "react";
import InputArea from './components/InputArea';
import ItemsList from './components/ItemsList';

function App() {
  return (
    <div className="app-container">
      <header>
        <img src="" alt=""></img>
        <h1>Shopping List</h1>
      </header>
      <InputArea />
      <ItemsList />
      <footer>
        Simple Shopping List App created using React.
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import DropdownMenu from './DropdownMenu';


const InputArea = ({inputText, setInputText, items, setItems, quantity, setQuantity, unit, setUnit}) => {
    return(
        <div id="input-area">
            <input type="text" name="new-item" placeholder="add new item..."></input>
            <input type="number" name="quantity" min="1"></input>
            <DropdownMenu />
            <button id="add-item-button">+</button>
        </div>
    );
};

export default InputArea;
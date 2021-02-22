import React from "react";
import uuid from 'react-uuid'
import DropdownMenu from './DropdownMenu';


const InputArea = ({inputText, setInputText, items, setItems, quantity, setQuantity, unit, setUnit}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const addNewItemHandler = (e) => {
        e.preventDefault();
        if(!inputText)
            return;
        setItems([
            ...items, {key: uuid(), name: inputText, checked: false, quantity: quantity, unit: unit}
        ]);
        setInputText("");
        setQuantity(1);
    };

    const setQuantityHandler = (e) => {
        setQuantity(e.target.value);
    }

    return(
        <div className="input-area">
            <form>
                <input type="text" name="new-item" placeholder="add new item..." value={inputText} onChange={inputTextHandler} ></input>
                <input type="number" name="quantity" min="1" value={quantity} onChange={setQuantityHandler} ></input>
                <DropdownMenu unit={unit} setUnit={setUnit}/>
                <button className="add-item-button" type="submit" onClick={addNewItemHandler}><i className="fas fa-plus"></i></button>
            </form>
        </div>
    );
};

export default InputArea;
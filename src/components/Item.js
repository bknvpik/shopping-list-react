import React from "react";

const Item = ({items, item, setItems, name, quantity, unit, checked}) => {
    const checkItemHandler = () => {
        setItems(items.map((el) => {
            if(el.key == item.key) {
                return {
                    ...item, checked: !item.checked
                }
            }
            return item;
        }));
    };

    const deleteItemHandler = () => {
        setItems(items.filter((el) => el.key !== item.key));
    };

    return(
        <div className={checked ? "item" : "item-checked"}>
            <div className="item-details">
                <p>{name}</p>
                <p>{quantity}</p>
                <p>{unit}</p>
            </div>
            <div className="item-buttons">
                <button className="check-button" onClick={checkItemHandler}><i className="fas fa-check"></i></button>
                <button className="delete-button" onClick={deleteItemHandler}><i className="fas fa-trash"></i></button>
            </div>
        </div>
    );
};

export default Item;
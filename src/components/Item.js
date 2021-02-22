import React from "react";

const Item = ({items, item, setItems, name, quantity, unit}) => {
    const checkItemHandler = () => {
        setItems(
            items.map(el => {
                if(el.key == item.key) {
                    return {
                        ...el, checked: !el.checked
                    };
                }
                return el;
            })
        );
    };

    const deleteItemHandler = () => {
        setItems(items.filter((el) => el.key !== item.key));
    };

    return(
        <div className="item">
            <div className="item-details">
                <div className={`${item.checked ? "item-checked": ""}`}>
                    <p><b>{name}</b></p>
                    <p>{quantity}<em> {unit}</em></p>
                    <hr></hr>
                </div>
            </div>
            <div className="item-buttons">
                <button className="check-button" onClick={checkItemHandler} style={item.checked ? {background: "rgb(41, 146, 37)"} : null}><i className="fas fa-check"></i></button>
                <button className="delete-button" onClick={deleteItemHandler}><i className="fas fa-trash"></i></button>
            </div>
        </div>
    );
};

export default Item;
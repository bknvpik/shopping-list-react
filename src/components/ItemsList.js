import React from "react";
import Item from './Item';

const ItemsList = ({items, setItems}) => {
    return(
        <div id="items-list">
            {items.map(item => (
                <Item
                    items={items}
                    item={item}
                    setItems={setItems}
                    key={item.key}
                    name={item.name}
                    quantity={item.quantity}
                    unit={item.unit}
                    checked={item.checked}
                />
            ))}
        </div>
    );
};

export default ItemsList;
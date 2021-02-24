import React from "react";
import Item from './Item';
import { useTransition, animated } from 'react-spring';

const ItemsList = ({items, setItems}) => {
    const transition = useTransition(items, items => items.key, {
        from: {opacity: 0, transform: 'scale(1.1)'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(0.9)'},
    });

    return(
        <div className="items-list">
            <div className="items-box">
                {transition.map(({item, key, props}) => (
                    <animated.div key={key} style={props}>
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
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default ItemsList;
import React, { useState } from "react";

const DropdownMenu = () => {
    const menuOptions = ['pieces', 'grams', 'kilograms', 'milliliters', 'liters'];

    const [click, setClick] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault();
        setClick(!click);
    };

    return(
    <div className="dropdown-menu" onClick={clickHandler}>
        <button className="menu-button">unit</button>
        {click ? (
            <div className="menu-dropped">
                {menuOptions.map(option => (
                    <button className="menu-option">{option}</button>
                ))}
            </div>
        ) : null}
    </div>
    );
};

export default DropdownMenu;
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import uuid from 'react-uuid'

const DropdownMenu = ({setUnit, unit}) => {
    const menuOptions = ['pieces', 'grams', 'kilograms', 'milliliters', 'liters'];

    const [open, setOpen] = useState(false);

    const spring = useSpring({
        opacity: open ? 1 : 0
    });

    const hoverHandler = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const leaveHandler = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    const setUnitHandler = (e) => {
        e.preventDefault();
        setUnit(e.target.innerHTML);
    }

    return(
    <div className="dropdown-menu" onMouseLeave={leaveHandler}>
        <div className="menu-button" onMouseEnter={hoverHandler}>{unit}</div>
        {open ? (
            <div className="menu-dropped">
                {menuOptions.map(option => (
                    <animated.div style={spring} key={uuid()}>
                        <button className="menu-option" onClick={setUnitHandler}>{option}</button>
                    </animated.div>
                ))}
            </div>
        ) : null}
    </div>
    );
};

export default DropdownMenu;
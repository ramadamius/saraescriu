import { useState } from 'react';
import './itemcount.css';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
const ItemCount = () => {

    const [count, setCount] = useState(0);

    const addItem = () => {
        setCount(count+1);
    }
    const removeItem = () => {
        count > 0 ? setCount(count-1) : setCount(count);
    }

    return (
        <div className="counter-wrapper">
            <a href="#" className="counterBtn reducer" onClick={removeItem}><FaMinusCircle/></a>
            <p className="counter-display">{count}</p>
            <a href="#" className="counterBtn increaser" onClick={addItem}><FaPlusCircle/></a>
        </div>
    );
}

export default ItemCount;
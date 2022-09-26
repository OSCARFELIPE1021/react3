import React, {useState} from "react";
import  './itemcount.css'


export const ItemCount = () =>{
    const[count, setcount] = useState(1);

    const decrease = () =>{
        setcount( count - 1);

    }
    

    const increase = () => {
        setcount ( count + 1);

    }
    return(
        <div className="counter">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button  onClick={increase}>+</button>
            
                <div>
                    <button className="botonagregar">agregar al carrito</button>
                </div>

        </div>
    
    );

}

export default ItemCount;

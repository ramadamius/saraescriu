import './widgetcart.css';
import { Store } from '../../../store';
import { useContext, useEffect, useState } from 'react';

const WidgetCart = ({show, action}) => {
    const [data,setData] = useContext(Store);
    
    const { items } = data
    useEffect(()=>{
        console.log('montado');
    },[items])

    const deleteAll = () => {
        setData({
            items: []
        })
    }

    const deleteItem= itemId => {
        const filteredItems = data.items.filter(item => item.id != parseInt(itemId));
        setData({
            items: filteredItems
        })
    }

    return ( 
        <div className={`widget-cart ${show ? 'open' : 'close'}`}>
            <div className="cartwidget-button">
                <a href="#" className="cart-widget-btn closeBtn" onClick={action}>
                    X 
                </a>
            </div>

            <h3 className="cart-title">Resumen del carrito</h3>

            <div className="delete-all-container">
                <input type='button' id='delete-all' className="deleteItem" onClick={deleteAll} value='Delete All'/>
            </div>

            <div className="information-cart-widget">
                <ul className="cart-items-list">
                {
                    data.items.map(item => 
                        <li className="cart-item-container">
                            <p className="item-title">{item.title}</p>
                            <img className='item-img' src={item.img} alt={item.title}/>
                            <div className="more-info">
                                <p className="item-qty">{`Cantidad: ${item.qty}`}</p>
                                <p className="item-size">{`Tamaño: ${item.sizes ? item.sizes : 'Talle único'}`}</p>
                                <p className="item-color">{`Color: ${item.colors ? item.colors:'Color único'}`}</p>
                                <input type="button" value='Borrar' className='deleteItem' onClick={()=> deleteItem(item.id)}/>
                            </div>
                        </li>
                    )
                }    
                </ul>
            </div>

        </div>
     );
}
 
export default WidgetCart;
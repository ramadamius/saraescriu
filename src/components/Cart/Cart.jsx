import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import './cart.css'

const Cart = ({ }) => {

    const [data, setData] = useContext(Store);
    const { items } = data;

    const deleteItem= itemId => {
        const filteredItems = data.items.filter(item => item.id != parseInt(itemId));
        setData({
            items: filteredItems
        })
    }

    const displayTotalItemAmount = () => {
        let total = 0;
        for (let i=0;i<items.length;i++){
            total += items[i].qty;
        }
        return total;
    }

    return (
        <>
            {
                items.length > 0 ?
                    <div className="cart-container">
                        <div className="cart-title">
                            <h2>Tu carrito</h2>
                            <p className="items-total">{
                                `Total de productos en el carrito: ${displayTotalItemAmount()}`
                            }</p>
                        </div>
                        <ul>
                            {
                                data.items.map(item =>
                                    <li className="cart-item">
                                        <p className="cart-item-title">{item.title}</p>
                                        <img className='cart-item-img' src={item.img} alt={item.title} />
                                        <div className="cart-more-info">
                                            <p className="cart-item-qty">{`Cantidad en el carrito: ${item.qty}`}</p>
                                            <p className="cart-item-size">{item.sizes ? `Tamaños: ${item.sizes}` : 'Talle único'}</p>
                                            <p className="cart-item-color">{item.colors ? `Colores: ${item.colors}` : 'Color único'}</p>
                                            <p className="cart-item-description">{`Descripción: ${item.description}`}</p>
                                            <input type="button" value='Borrar' className='cart-deleteItem' onClick={()=> deleteItem(item.id)}/>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div> :
    <div className="cart-container no-item">
        <h3 className="no-items-title">No has agregado nada aún, agrega un producto para proceder con la compra :)</h3>
        <Link to='/' className='return-home-btn'>Volver a Home</Link>
    </div>
}
        </>
    );
}

export default Cart;
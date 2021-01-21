import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { Store } from '../../store';
import './cart.css'

const Cart = ({ }) => {

    const [data, setData] = useContext(Store);
    const { items } = data;
    const db = getFirestore();

    const deleteItem= itemId => {
        const filteredItems = data.items.filter(item => item.id != itemId);
        setData({
            items: filteredItems
        })
    }

    const displayTotalPrice = () => {
        let total = 0;
        for (let i=0;i<items.length;i++){
            total += (items[i].data.qty*items[i].data.price);
        }
        return total;
    }

    const checkOut = () => {

    }

    return (
        <>
            {
                items.length > 0 ?
                    <div className="cart-container">
                        <div className="cart-title">
                            <h2>Tu carrito</h2>
                            <p className="items-total">{
                                `Total a pagar: €${displayTotalPrice()}`
                            }</p>
                        </div>
                        <ul>
                            {
                                data.items.map(item =>
                                    <li className="cart-item">
                                        <p className="cart-item-title">{item.data.title}</p>
                                        <img className='cart-item-img' src={item.data.img} alt={item.data.title} />
                                        <div className="cart-more-info">
                                            <p className="cart-item-qty">{`Cantidad en el carrito: ${item.data.qty}`}</p>
                                            <p className="cart-item-size">{item.data.sizes ? `Tamaños: ${item.data.sizes}` : 'Talle único'}</p>
                                            <p className="cart-item-color">{item.data.colors ? `Colores: ${item.data.colors}` : 'Color único'}</p>
                                            <p className="cart-item-description">{`Descripción: ${item.data.description}`}</p>
                                            <input type="button" value='Borrar' className='cart-deleteItem' onClick={()=> deleteItem(item.id)}/>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                        <div className="check-out">
                            <Link to='/checkout'> Check out</Link>
                        </div>
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
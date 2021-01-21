import { useContext, useState } from 'react';
import firebase from 'firebase/app';
import { Store } from '../../store';
import './checkout.css';
import { getFirestore } from '../../firebase';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [sale, setSale] = useState(false);
    const [saleId, setSaleId] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone_number: ''
    });

    const purchase = {
        user: formData,
        items: data.items,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const handleChangeInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmitCheckout = async (e) => {
        e.preventDefault();
        const purchaseDB = await db.collection('sales').add(purchase);
        setSaleId(purchaseDB.id);
        setSale(true);
    }

    return (
        <div className="checkout-container">
            {
                !sale ? <div className="form-container">
                    <h2 className="checkout-title">¡Últimos detalles para completar tu compra!</h2>
                    <form onSubmit={handleSubmitCheckout} className='checkout-form'>
                        <input type="text" value={formData.name} name='name' placeholder='Inserta tu nombre' onChange={handleChangeInput} />
                        <input type="text" value={formData.surname} name='surname' placeholder='Inserta tu apellido' onChange={handleChangeInput} />
                        <input type="email" value={formData.email} name='email' placeholder='Inserta tu email' onChange={handleChangeInput} />
                        <input type="tel" name="phone_number" placeholder='Inserta tu número de teléfono' onChange={handleChangeInput} />
                        <input type="button" value="Confirmar compra" onClick={handleSubmitCheckout} />
                    </form>
                </div> :
                    <div className="success-container">
                        <h2 className="successful-sale-title">¡Compra realizada con éxito!</h2>
                        <FaCheckCircle/>
                        <h4 className="successful-sale-subtitle">Detalles de tu compra:</h4>
                        <ul className="sale-detail-list">
                            {/* <li className="success-date">{purchase.date}</li> */}
                            <li className="success-id">
                                <span className="success-key">Id de la compra: </span>
                                {saleId}
                            </li>
                            <li className="success-mail">
                                {`Te llegará un mail a: ${purchase.user.email} con la fecha aproximada de entrega`}
                            </li>
                        </ul>
                        <Link to='/' className='back-to-home'>Volver a Home</Link>
                    </div>
            }
        </div>

    );
}

export default Checkout;
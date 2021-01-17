import { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import ProductBox from '../general/ProductBox/ProductBox';
import ProductDetail from '../ProductDetail/ProductDetail/ProductDetail';
import './shopnow.css';

const ShopNow = () => {
    const db = getFirestore();
    /***************************************************************************/
    const [cat, setCat] = useState('');
    const [categories, setCategories] = useState(['tops', 'accessories', 'all']);
    const [items, setItems] = useState([]);
    /***************************************************************************/

    const getCat = (category) => {
        category === 'all' ? category = '' : category = category;
        setCat(category);
    }

    const getProductsByCat = async () => {
        let products, arr = [];
        if (cat === '') {
            products = await db.collection('products').get();
        } else {
            products = await db.collection('products').where('category', '==', `${cat}`).get();
        }
        products.forEach(prod => arr.push({ id: prod.id, data: prod.data() }));
        setItems(arr);
    }

    useEffect(() => {
        getProductsByCat(cat);
    }, [cat]);

    return (
        <div className="shop-now-container">
            <div className="operatives-container">
                <h2 className="shop-now-title">Worldwide shipping</h2>
                <div className="category-container">
                    <ul className="category-list">
                        {
                            categories.map(category =>
                                <li className="category-item" onClick={(e) => getCat(category)}>{category}</li>
                            )
                        }
                    </ul>
                </div>
            </div>

            {items.length > 1 ? 
                <div className="items-container">
                    <ul className="items-list-container">
                        {
                            items.map(item =>
                                <li className="item-container-sn"><ProductBox item={item} /></li>
                            )
                        }
                    </ul>
                </div>
                : <h2 className="loading-products">Cargando productos ...</h2>
        }
        </div>
     );
}

export default ShopNow;
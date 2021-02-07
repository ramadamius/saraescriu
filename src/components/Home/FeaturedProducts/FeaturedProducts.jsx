import ProductBox from '../../general/ProductBox/ProductBox';
import './featuredproducts.css';
import { useEffect, useState } from 'react';
import { getFirestore } from '../../../firebase';

const FeaturedProducts = () => {

    const [items,setItems] = useState([]);
    const db = getFirestore();

    const getProducts = async () => {
        let arr = [];
        const docs = await db.collection('products').where('featured','==',true).get();
        docs.forEach(doc => arr.push({id:doc.id, data:doc.data()}));
        setItems(arr);
    }

    useEffect(async () => {
        await getProducts();
    },[]);

    return (
        <section className="featuredProducts">
            <div className="featured-products-container">
                <h3 className="featured-products-title"> Productos destacados</h3>
                <ul className="featured-products-list">
                    {
                        items.map(item => (
                            <li><ProductBox item={item}/></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default FeaturedProducts;
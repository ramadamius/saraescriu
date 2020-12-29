import ProductBox from '../../general/ProductBox/ProductBox';
import './featuredproducts.css';
import poleraAnna from '../../../assets/products/tops/poleraANNA.jpeg';
import theBBucketHat from '../../../assets/products/hats/thebbuckethat.jpeg';
import correasMascarillas from '../../../assets/products/accesories/correasMascarilllas.jpeg';
import sweaterindie from '../../../assets/products/hoodies/sweaterindie.jpeg';
import { useEffect, useState } from 'react';

/*This const simulates a data storage for products*/ 
const fakeData = [
    {
        product_id: 4,
        product_title: 'Correas MASCARILLAS',
        product_price: '€5.00',
        product_image: correasMascarillas,
        product_alt_msg: 'Imagen correa Mascarillas'
    },
    {
        product_id: 2,
        product_title: 'Polera ANNA',
        product_price: '€22.00',
        product_image: poleraAnna,
        product_alt_msg: 'Imagen polera Anna'
    },
    {
        product_id: 3,
        product_title: 'The B/BUCKET Hat',
        product_price: '€15.00',
        product_image: theBBucketHat,
        product_alt_msg : 'Imagen de the B/Bucket Hat'
    },
    {
        product_id: 1,
        product_title: 'Sweater INDIE',
        product_price: '€30',
        product_image: sweaterindie,
        product_alt_msg: 'Imagen de sweater Indie'
    }
];

const FeaturedProducts = () => {

    const [items,setItems] = useState([]);

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData);
        },2000);
    });

    useEffect(() => {
        getProducts
            .then(products => setItems(products));
    },[]);

    return (
        <section className="featuredProducts">
            <div className="featured-products-container">
                <h3 className="featured-products-title"> Productos destacados</h3>
                <ul className="featured-products-list">
                    {
                        items.map(item => (
                            <li><ProductBox productId= {item.product_id} title={item.product_title} img={item.product_image} alt={item.product_alt_msg} price={item.product_price}/></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default FeaturedProducts;
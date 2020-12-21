import { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import sweaterIndie from '../../../assets/products/hoodies/sweaterindie.jpeg';

const ProductDetailDM = () => {

    /* This data is being hardoced but it will be replaced by either an API or DB*/
    const item = {
        title: 'Sweater INDIE',
        price: '€30',
        img: sweaterIndie,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus non temporibus nesciunt impedit quaerat optio, voluptatibus eaque eius magni excepturi reiciendis voluptas a odio vitae expedita nulla veniam? Et!',
        sizes: ['S','M','L'],
        colors: ['verde','beige','rosa']
    }

    /* State for products, initially is set to an empty array */
    const [product,setProduct] = useState([]);
    
    const getProduct = () => {
        setProduct(item);
    }

    useEffect(() => {
        getProduct();
    },[]);

    return ( 
        <ProductDetail title={item.title} img={item.img} price={item.price} description={item.description} sizes={item.sizes} colors={item.colors}/>
     );
}
 
export default ProductDetailDM;
import { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../../firebase';



const ProductDetailDM = () => {

    const db = getFirestore();
    /* State for products, initially is set to an empty array */
    const [product,setProduct] = useState([]);
    const { productId } = useParams();

    const getProducts = async () => {
        const item = await db.collection('products').doc(productId).get();
        item.exists ? setProduct({id:item.id,data:item.data()}) : console.log('No items');
    }
    useEffect(async() => {
        await getProducts();
    },[]);

    return (
        product.data != undefined ? <ProductDetail product={product}/> : <h2>Loading</h2>
    )
}
 
export default ProductDetailDM;
import { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import sweaterIndie from '../../../assets/products/hoodies/sweaterindie.jpeg';
import poleraAnna from '../../../assets/products/tops/poleraANNA.jpeg';
import thebbuket from '../../../assets/products/hats/thebbuckethat.jpeg';
import correa from '../../../assets/products/accesories/correasMascarilllas.jpeg';
import { useParams } from 'react-router-dom';



const ProductDetailDM = () => {

    /* This data is being hardoced but it will be replaced by either an API or DB*/
    const items = [
        {
            id: 1,
            title: 'Sweater INDIE',
            price: '€30',
            img: sweaterIndie,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus non temporibus nesciunt impedit quaerat optio, voluptatibus eaque eius magni excepturi reiciendis voluptas a odio vitae expedita nulla veniam? Et!',
            sizes: ['S','M','L'],
            colors: ['verde','beige','rosa'],
            qty:0
        },
        {
            id: 2,
            title: 'Polera ANNA',
            price: '€22',
            img: poleraAnna,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus non temporibus nesciunt impedit quaerat optio, voluptatibus eaque eius magni excepturi reiciendis voluptas a odio vitae expedita nulla veniam? Et!',
            sizes: ['S','M','L'],
            colors: ['verde','beige','rosa'],
            qty:0
        },
        {
            id: 3,
            title: 'The B/BUCKET Hat',
            price: '€15',
            img: thebbuket,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus non temporibus nesciunt impedit quaerat optio, voluptatibus eaque eius magni excepturi reiciendis voluptas a odio vitae expedita nulla veniam? Et!',
            colors: ['verde','beige','rosa'],
            qty:0
        },
        {
            id: 4,
            title: 'Correas MASCARILLA',
            price: '€5',
            img: correa,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus non temporibus nesciunt impedit quaerat optio, voluptatibus eaque eius magni excepturi reiciendis voluptas a odio vitae expedita nulla veniam? Et!',
            colors: ['verde','beige','rosa'],
            qty:0
        }
    ]

    /* State for products, initially is set to an empty array */
    const [product,setProduct] = useState([]);
    const { productId } = useParams();
    
    const getProduct = () => {
        const selected_item = items.find(item => item.id === parseInt(productId));
        setProduct(selected_item);
    }

    useEffect(() => {
        getProduct();
    },[]);

    return ( 
        <ProductDetail product={product}/>
     );
}
 
export default ProductDetailDM;
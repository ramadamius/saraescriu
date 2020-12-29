import './productdetail.css';
import { FaShoppingBag } from "react-icons/fa";

const ProductDetail = ({ img, title, price, description, sizes, colors }) => {
    console.log(title,sizes,colors);
    return (
        <section className="product-detail-container">
            <img className="product-img" src={img} alt={title} />
            <div className="product-info-container">

                <div className="title-and-price">
                    <h3 className="product-name">{title}</h3>
                    <div className="price">
                        <p className="product-price-title product-detail-subtitle">Precio:</p>
                        <p className="product-price-val">{price}</p>
                    </div>
                </div>

                <div className="description-container">
                    <p className="product-description-title product-detail-subtitle">Descripción del producto:</p>
                    <p className="product-description">{description}</p>
                </div>

                <div className="sizes">
                    <p className="sizes-title product-detail-subtitle">Talles disponibles:</p>
                    <ul className="sizes-list">
                        {
                            sizes.length > 1
                                ? sizes.map(size => <li className="size">{size}</li>)
                                : <li className="size">Talle único</li>
                        }
                    </ul>
                </div>
             
                 <div className="colors">
                     <p className="colors-title product-detail-subtitle">Colores disponibles:</p>
                     <ul className="color-list">
                         {
                             colors.length > 1 
                                 ? colors.map(
                                     color => <div className="color-container">
                                                 <li className="color"><a href="#" className={`color-icon ${color}`}></a></li>
                                             </div>
                                     )  
                                 : <li className="color">Color único</li>
                         }
                     </ul>
                 </div> 

                <div className="add-to-cart-btn">
                    <a href="#" className="add-to-cart"><FaShoppingBag /><span>Comprar</span></a>
                </div>

            </div>
        </section>
    );
}

export default ProductDetail;
import ProductBox from '../../general/ProductBox/ProductBox';
import './featuredproducts.css';
import poleraAnna from '../../../assets/products/tops/poleraANNA.jpeg';
import theBBucketHat from '../../../assets/products/hats/thebbuckethat.jpeg';
import correasMascarillas from '../../../assets/products/accesories/correasMascarilllas.jpeg';
import sweaterindie from '../../../assets/products/hoodies/sweaterindie.jpeg';

const FeaturedProducts = () => {
    return ( 
        <section className="featuredProducts">
            <div className="featured-products-container">
                <h2 className="featured-products-title"> destacados</h2>
                <ul className="featured-products-list">
                    <li><ProductBox title="The B/BUCKET hat" img={theBBucketHat} alt="the b/bucket hat" price="€15,00"/></li>
                    <li><ProductBox title="Polera ANNA" img={poleraAnna} alt="polera anna" price="€22,00"/></li>
                    <li><ProductBox title="Correas MASCARILLAS" img={correasMascarillas} alt="correas mascarillas" price="€5,00"/></li>
                    <li><ProductBox title="Sweater INDIE" img={sweaterindie} alt="sweater INDIE" price="€30"/></li>
                </ul>
            </div>
        </section>
     );
}
 
export default FeaturedProducts;
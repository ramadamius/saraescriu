import './App.css';
import HeaderAndNav from './components/general/HeaderAndNav/HeaderAndNav';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import ProductDetailDM from './components/ProductDetail/ProductDetailDM/ProductDetailDM';
import Footer from './components/general/Footer/Footer';

function App() {
    return ( <
        div className = 'App' >
        <
        HeaderAndNav / >

        <
        ProductDetailDM / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;
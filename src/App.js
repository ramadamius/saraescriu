import './App.css';
import HeaderAndNav from './components/general/HeaderAndNav/HeaderAndNav';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import ProductDetailDM from './components/ProductDetail/ProductDetailDM/ProductDetailDM';
import Footer from './components/general/Footer/Footer';
import ComingSoon from './components/general/ComingSoon/ComingSoon';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

    return ( <
        div className = 'App' >
        <
        BrowserRouter >
        <
        HeaderAndNav / >

        <
        Switch >

        <
        Route exact path = '/' >
        <
        FeaturedProducts / >
        <
        /Route>

        <
        Route path = '/aboutUs' >
        <
        ComingSoon / >
        <
        /Route >

        <
        Route path = '/shopNow' >
        <
        ComingSoon / >
        <
        /Route>

        <
        Route path = '/slowBlogZone' >
        <
        ComingSoon / >
        <
        /Route>

        <
        Route path = '/contactUs' >
        <
        ComingSoon / >
        <
        /Route>

        <
        Route path = '/productDetail/:productId' >
        <
        ProductDetailDM / >
        <
        /Route>

        <
        Route path = '/cartReview' >
        <
        ComingSoon / >
        <
        /Route> <
        /Switch> <
        Footer / >
        <
        /BrowserRouter> < /
        div >
    );
}

export default App;
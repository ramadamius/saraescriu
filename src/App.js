import './App.css';
import HeaderAndNav from './components/general/HeaderAndNav/HeaderAndNav';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import ProductDetailDM from './components/ProductDetail/ProductDetailDM/ProductDetailDM';
import Footer from './components/general/Footer/Footer';
import ComingSoon from './components/general/ComingSoon/ComingSoon';
import ShopNow from './components/ShopNow/ShopNow';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Store } from './store';
import { useState } from 'react';


function App() {
    const [data, setData] = useState({
        items: [],
    });

    return ( <
        Store.Provider value = {
            [data, setData]
        } >
        <
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
        ShopNow / >
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
        Route path = '/cart' >
        <
        Cart / >
        <
        /Route> < /
        Switch > <
        Footer / >
        <
        /BrowserRouter> < /
        div >
        <
        /Store.Provider>
    );
}

export default App;
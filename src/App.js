import './App.css';
import Header from './components/general/Header/Header';
import NavBar from './components/general/NavBar/NavBar';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import ItemCount from './components/general/ItemCount/ItemCount';

function App() {
    return ( <
        div className = 'App' >
        <
        Header / >
        <
        NavBar / >

        <
        FeaturedProducts / >
        <
        /div>
    );
}

export default App;
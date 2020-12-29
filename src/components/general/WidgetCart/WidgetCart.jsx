import './widgetcart.css';

const WidgetCart = ({show, action}) => {
    return ( 
        <div className={`widget-cart ${show ? 'open' : 'close'}`}>
            <div className="information-cart-widget">
                <p>Coming soon</p>
            </div>

            <div className="cartwidget-button">
                <a href="#" className="cart-widget-btn closeBtn" onClick={action}>
                    Cerrar 
                </a>
            </div>
        </div>
     );
}
 
export default WidgetCart;
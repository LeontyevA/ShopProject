import { CartItem } from "./CartItem";

function CartList(props) {
    const {orders = [], handleCartShow = Function.prototype} = props;

    const totalPrice = orders.reduce((sum, el) => {return sum + el.quantity * el.price.finalPrice}, 0)
    
    return(
        <ul className="collection cart-list">
        <li className="collection-item active" >Корзина</li>
        {
          orders.length ? (orders.map(item => <CartItem key = {item.mainId} {...item}/> )) :
          (<li className="collection-item" >Корзина пуста</li>)
        }
        <li className="collection-item active">Общая стоимость {totalPrice} руб.</li>
        <i className="material-icons cart-close" onClick={handleCartShow}>close</i>
      </ul>        
    )
    
};

export {CartList};
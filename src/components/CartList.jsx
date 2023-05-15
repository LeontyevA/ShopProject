function CartList(props) {
    const {orders = []} = props;

    return(
        <ul className="collection">
        <li className="collection-item" active>Корзина</li>
        <li className="collection-itemactive">Общая стоимость</li>
      </ul>        
    )
    
};

export {CartList};
import { GoodItem } from "./GoogItem";

function GoodsList(props) {
    const {goods = [], addToCart = Function.prototype} = props;

    if (!goods.length)
    {
        return(<h3> Пусто! </h3>)
    }
    return ( <div className="goods">
        {goods.map((item) => (
        <GoodItem key={item.mainId} {...item} addToCart={addToCart}/>))}
    </div> )
}

export { GoodsList };
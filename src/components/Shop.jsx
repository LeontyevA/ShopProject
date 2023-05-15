import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [orders, setOrders] = useState([]);
    const [isCartShow, setIsCartShow] = useState(false);

	const addToCart = (item) => {
		const itemIndex = orders.findIndex(
			(itemOrder) => itemOrder.mainId === item.mainId
		);

		if (itemIndex < 0) {
			const newItem = { ...item, quantity: 1 };
			setOrders([...orders, newItem]);
		} else {
			const newOrders = orders.map((orderItem, index) => {
				if (index === itemIndex) {
					return { ...orderItem, quantity: orderItem.quantity + 1 };
				} else {
					return orderItem;
				}
			});
			setOrders(newOrders);
		}
	};

    const handleCartShow = () =>{
        setIsCartShow(!isCartShow);
    }

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
				setIsLoading(false);
			});
	}, []);

	return (
		<main className='content container'>
			<Cart quantity={orders.length} handleCartShow={handleCartShow} />
			{isLoading ? (
				<Preloader />
			) : (
				<GoodsList goods={goods} addToCart={addToCart} />
			)}
		</main>
	);
}

export { Shop };

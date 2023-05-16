import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [orders, setOrders] = useState([]);
	const [isCartShow, setIsCartShow] = useState(false);
	const [alertName, setAlertName] = useState('');

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
		setAlertName(item.displayName);
	};

	const removeFromCart = (itemId) => {
		const newOrders = orders.filter((itemOrder) => {
			return itemOrder.mainId !== itemId;
		});
		setOrders(newOrders);
	};

	const changeOrderQuantity = (mainId, cnt) => {
		const newOrders = orders.map((orderItem, index) => {
			if (orderItem.mainId === mainId) {
				return { ...orderItem, quantity: orderItem.quantity + cnt };
			} else {
				return orderItem;
			}
		});
		if (cnt < 0) {
			const newOrdersNoZero = newOrders.filter((itemOrder) => {
				return itemOrder.quantity !== 0;
			});
			setOrders(newOrdersNoZero);
		} else {
			setOrders(newOrders);
		}
	};

	const handleCartShow = () => {
		setIsCartShow(!isCartShow);
	};

	const closeAlert = () => {
		setAlertName('');
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
			{isCartShow && (
				<CartList
					orders={orders}
					handleCartShow={handleCartShow}
					removeFromCart={removeFromCart}
					changeOrderQuantity={changeOrderQuantity}
				/>
			)}
			{alertName && (<Alert displayName={alertName} closeAlert={closeAlert}/>)}
		</main>
	);
}

export { Shop };

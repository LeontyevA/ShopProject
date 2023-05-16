function CartItem(props) {
	const {
		removeFromCart = Function.prototype,
		changeOrderQuantity = Function.prototype,
		mainId,
		displayName,
		price,
		quantity,
	} = props;

	return (
		<li className='collection-item '>
			{displayName} X {quantity} = {price.finalPrice * quantity} руб.
			<span
				href='#!'
				className='secondary-content'
				onClick={() => removeFromCart(mainId)}
			>
				<i className='material-icons cart-delete'>close</i>
			</span>
			<span
				href='#!'
				className='secondary-content'
				onClick={() => changeOrderQuantity(mainId, 1)}
			>
				<i className='material-icons cart-delete'>add</i>
			</span>
			<span
				href='#!'
				className='secondary-content'
				onClick={() => changeOrderQuantity(mainId, -1)}
			>
				<i className='material-icons cart-delete'>remove</i>
			</span>
		</li>
	);
}

export { CartItem };

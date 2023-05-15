function CartItem(props) {
	const { mainId, displayName, price, quantity } = props;

	return (
		<li className='collection-item '>
			{displayName} X {quantity} = {price.finalPrice}
			<span href='#!' class='secondary-content'>
				<i class='material-icons cart-delete'>close</i>
			</span>
		</li>
	);
}

export { CartItem };

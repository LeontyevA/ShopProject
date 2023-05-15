function GoodItem(props) {
	const { mainId, displayName, displayDescription, displayAssets, price } =
		props;

	return (
		<div className='card' id={mainId}>
			<div className='card-image'>
				<img alt={displayName} src={displayAssets[0].full_background} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{displayName}</span>
				<p>
					{displayDescription}
				</p>
			</div>
			<div className='card-action'>
				<button className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price.finalPrice} руб.</span>
			</div>
		</div>
	);
}

export {GoodItem}
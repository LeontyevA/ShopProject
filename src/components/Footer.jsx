function Footer(props) {
	return (
		<footer className="page-footer blue darken-1">
			<div className="footer-copyright">
				<div className="container">
					{new Date().getFullYear()} Copyright Text
					<a className="grey-text text-lighten-4 right" href="#!">Репо</a>
				</div>
			</div>
		</footer>)

}

export {Footer}
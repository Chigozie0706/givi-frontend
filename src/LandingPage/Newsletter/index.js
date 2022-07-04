import "./style.css"
const Newsletter = () => {
	return (
		<>
		<div className="newsletter mt-5">
		<h5>OUR NEWSLETTER</h5>
			<p>For new products, please subscribe to our newsletter</p>
			<input type="text" className="newsletter_form" />
			<button>Subscribe</button>
		</div>
		</>
		)
}

export default Newsletter;
import styled from "styled-components"
import StarRatings from "../StarComponent"
import {Card, 
	 
	CardBody, 
	CardFooter} from "reactstrap"
import "./style.css"


const ProductCard = ({data = [], collection_name}) => {
	
	
	return(
		<Container>

		
		<h6>{collection_name}</h6>
		<ProductItems>
		
		{data.map((item, index) => (
	
		
			<Card style={{width: "96%"}} key={index} className="mb-2 shadow product_card">
				<CardBody className="card_body_img">
					<img src={item.image} alt="product"/>
				</CardBody>
				<CardFooter className="card_footer" style={{border:0}}>
					<p>{item.item_name}</p>
				<StarRatings />
				
					<p>{item.price}</p>
				
				</CardFooter>
			</Card>
			
			)) }

			
		</ProductItems>
		</Container>
	)
}

export default ProductCard;


const Container = styled.div`
padding: 0 3px 0 3px;
margin-top: 10px;
`

const ProductItems = styled.div`
display: grid;
// grid-gap: 10px;
grid-template-columns: repeat(6, minmax(0, 1fr));


@media(max-width: 768px){
	grid-template-columns: repeat(2, minmax(0, 1fr));
}
`


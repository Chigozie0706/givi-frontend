import {Card, CardBody, Row, Col} from "reactstrap"
import Logo3 from "../../Component/img/download.jpg"

const ProductDetails = () => {
	return(
		<>
			<Row>
				<Col md="8">
					<Row>
					<Card>
						<CardBody className="d-flex">
						<img src={Logo3} />
							
							<p>kjjskjks sbkbskjbkjsbs mnbbzk</p>
						</CardBody>
					</Card>
					</Row>

					<Row>
					<Card>
					<CardBody>
					<p>kjjskjks sbkbskjbkjsbs mnbbzk</p>
						
					</CardBody>
					</Card>
					</Row>
				</Col>

				<Col md="4">
				<Card>
					<CardBody>
					<p>kjjskjks sbkbskjbkjsbs mnbbzk</p>
						
					</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductDetails
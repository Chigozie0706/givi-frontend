import {FaStar} from "react-icons/fa"
import styled from "styled-components"

const Index = () => {
	const stars = Array(5).fill(0);
	return (
		<Container>
		{
			stars.map((_, index) => {
				return (
					<FaStar key={index} style={{color: "yellow"}}/>
				)
			})
		}
		</Container>
	)
}

export default Index

const Container = styled.div`

`


import styled from "styled-components"
import GiviLogo from "../../Component/img/givilogo.jpg"
import { BsCartDash } from "react-icons/bs";

const Header = () => {
	return (
		<Nav>
		<Logo src={GiviLogo} alt="logo"/>
		<NavSearchInput>
			<input type="text" placeholder="search for your bags, shoe, clothes"/>
			<button>Q</button>
		</NavSearchInput>

		<NavCart>
		<BsCartDash style={{color:"white", margin: "0 20px"}} size="20px"/>
		</NavCart>
		</Nav>
	)
}

export default Header


const  Nav = styled.nav`
height: 60px;
display: flex;
align-items: center;
border-bottom: 1px solid grey;
background: grey;
`

const Logo = styled.img`

height : 70px;
border-radius: 50%;
`

const NavSearchInput = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20px;

	input{
		width: 50%;
	}
`

const NavCart = styled.div`

`


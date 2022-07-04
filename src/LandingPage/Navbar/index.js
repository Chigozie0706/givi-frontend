import Logo1 from "../../Component/img/logo1.png"
import Logo2 from "../../Component/img/logo2.png"
import GiviLogo from "../../Component/img/givilogo.jpg"
import "./style.css"
import {Input} from "reactstrap"

import { BsCartDash } from "react-icons/bs";

const Navbar = () => {
const toggle=false
	return(
		<>
		<div className="d-flex justify-content-between" 
		style={{backgroundColor: "rgba(255, 185, 26, 1)", zIndex:2, width:"100%"}}>
			<div className="navbar_logo">
<img src={GiviLogo} width="50px" />
<input type="text" style={{width: "500px", marginLeft: "20px"}} placeholder="Search for an item"/>
<button>Q</button>
			</div>

			<div>
			</div>
			
<div>
<BsCartDash />
</div>
			
		</div>
		</>
	)
}

export default Navbar
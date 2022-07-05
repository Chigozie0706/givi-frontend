import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import CoverImage from "../../Component/img/cover_image.jpg"


const ImgSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	}

	return(
		<>
			<Carousel {...settings} >
				<Wrap>
					<img src={CoverImage} alt="sliders"/>
				</Wrap>

				<Wrap>
					<img src={CoverImage} alt="sliders"/>
				</Wrap>

				<Wrap>
					<img src={CoverImage} alt="sliders" />
				</Wrap>

				<Wrap>
					<img src={CoverImage} alt="sliders" />
				</Wrap>
			</Carousel>
		</>
	)
}

export default ImgSlider

const Carousel = styled(Slider)`
	.slick-list{
		overflow: visible;
	}
	button{
		z-index: 1;
	}
`
const Wrap = styled.div`
	img{
		border: 4px solid transparent;
		border-radius: 4px;
		object-fit: cover;
		width: 100%;
		height: 200px;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

	}
`

// import Navbar from "./LandingPage/Navbar"
import Header from "./LandingPage/Navbar/Header"
import ProductCard from "./Component/ProductCard"
// import Hero from "./LandingPage/Hero"
import ImageSlider from "./LandingPage/Hero/ImageSlider"
import NewsLetter from "./LandingPage/Newsletter"
import Footer from "./LandingPage/Footer"
// import ProductDetails from "./Component/ProductDetails"
import "./App.css"
import {data, collection1} from "./Component/ProductCard/data"

function App() {
  return (
    <>
      {// <Navbar />
      // <Hero />
  }
  <Header />
  <ImageSlider />
      <ProductCard data={data} collection_name ="Trackers"/>
      <ProductCard data={collection1} collection_name="Featured Product" />
      <NewsLetter />
      
      <Footer />
    </>
  );
}

export default App;

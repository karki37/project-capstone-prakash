
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./slider/slider";
import ProductsData, { SliderProducts } from "./data/products";
import TestimonialsData from "./data/testimonials";



export default function App() {
  return (
    <>
   <Header />
   <Hero/>
   <Slider />
   <Footer />
   <SliderProducts />
    <TestimonialsData />
   <ProductsData />
   </>
  )
}

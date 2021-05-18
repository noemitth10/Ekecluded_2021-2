import '../App.css';
import ImageSlider from './ImageSlider';
import { sliderData } from './SliderData';
import SomeBooks from './books/SomeBooks';

function Home() {
  return (
    <>
      <ImageSlider slides={sliderData}/>
      <hr/>
      <h6>Legfrissebb könyvek</h6>
      <SomeBooks/>
    </>
  );
}

export default Home;
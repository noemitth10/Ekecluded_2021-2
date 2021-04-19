import '../App.css';
import ImageSlider from './ImageSlider';
import { sliderData } from './SliderData';

function Home() {
  return (
    <>
      <ImageSlider slides={sliderData}/>
    </>
  );
}

export default Home;

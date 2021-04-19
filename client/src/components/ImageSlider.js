import React, {useState} from 'react';
import { sliderData } from './SliderData';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import '../ImageSlider.css';

function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return(
        <section className="slider">
            <FaChevronLeft className="left-arrow" onClick={prevSlide}/>
            <FaChevronRight className="right-arrow" onClick={nextSlide}/>
            {sliderData.map((slide, index) => {
                return (
                    <section>
                        <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt={slide.text} className="image"/>)}
                            {index === 0 && current === 0 ? (<p className="text-block1">{slide.text}</p>) : null}
                            {index === 1 && current === 1 ? (<p className="text-block2">{slide.text}</p>) : null}
                            {index === 2 && current === 2 ? (<p className="text-block2">{slide.text}</p>) : null}
                        </div>
                    </section>
                );
            })}
        </section>
    );
}

export default ImageSlider;
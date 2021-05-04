import React, {useState, useEffect} from 'react';
import { sliderData } from './SliderData';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import '../ImageSlider.css';

const delay = 10000;

function ImageSlider({ slides }) {
    const [index, setIndex] = useState(0);
    const length = slides.length;

    useEffect(() => {
        setTimeout(() =>
        setIndex((prevIndex) =>
        prevIndex === slides.length -1 ? 0 : prevIndex + 1),
        delay);

        return () => {};
    }, [index])

    const nextSlide = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    }

    const prevSlide = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return(
        <div className="slider">
            <FaChevronLeft className="left-arrow" onClick={prevSlide}/>
            <FaChevronRight className="right-arrow" onClick={nextSlide}/>
            {slides.map((slide, id) => {
                return (
                    <div className={id === index ? 'slide-active' : 'slide'} key={id}>
                        {id === index && (<img src={slide.image} alt={slide.text} className="image"/>)}
                        {id === 0 && index === 0 ? (<p className="text-block1">{slide.text}</p>) : null}
                        {id === 1 && index === 1 ? (<p className="text-block2">{slide.text}</p>) : null}
                        {id === 2 && index === 2 ? (<p className="text-block2">{slide.text}</p>) : null}
                    </div>
                );
            })}
            <div className="sliderDots">
                {slides.map((_, idx) => (
                <div key={idx} className={`sliderDot${index === idx ? " active" : ""}`}></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
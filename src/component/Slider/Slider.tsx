import * as React from "react";
import Slider from "react-slick";
import { useIdeaStore } from "../../Store/IdeaStore";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from "./Slider.module.css"
import SliderItem from "../SliderItem/SliderItem";
const IdeaSlider: React.FC = () => {

    const {idea ,deleteIdea}=useIdeaStore() 

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return (
        <div className={css.slider}>
             {idea.length>0 && <h2>Ideas in my list</h2>}
        <div className="slider-container">
          <Slider {...settings} >
            {idea.map((item) => (
              <div key={item.id}>
                 <SliderItem data={item}onDelete={deleteIdea}/>
              </div>
            ))}
            
          </Slider>
        </div>
        </div>
      );
    };
    
    export default IdeaSlider;
import React, { useState , useEffect } from "react";
import Slider from "react-slick";
import {useDispatch} from "react-redux";
import {getSlide} from "../actions/slide";

function Slide(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getSlide({page_type : 0}));
    }, []);


    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    return (
        <div className="mt-8">
            <h2> Slider</h2>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
}

export default Slide;

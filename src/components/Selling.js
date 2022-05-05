import React, {Component} from "react";
import Slider from "react-slick";
import ProductItem from "./ProductItem";

export default class Selling extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="mt-8">
                <h2> Bán chạy </h2>
                <Slider {...settings}>
                    {
                        (this.props.sellingProducts || []).map((product, index) => {
                            return (
                                <div key={index}>
                                    <ProductItem product={product}/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}
// Carousel Component => Collection of FATs which will be displayed when some product is added to the cart
// Currently this component is just a View / part of Presentation layer, hence it will get the FATs data, instead of productId that is getting updated
// It is NOT the responsibilty of this view to get the FATs, it will just render them if needed

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fat from "../card/fats/fat";
import type { CarouselProps } from '../../types';

function Carousel({ fats, productsQuantityMap, setProductsQuantityMap }: CarouselProps) {
    if (!fats || !Array.isArray(fats) || fats.length === 0) {
        return null;
    }

    const settings = {
        infinite: fats.length > 3,
        speed: 500,
        slidesToShow: Math.min(fats.length, 3),
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(fats.length, 2),
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {fats.map((fat) => (
                <Fat 
                    key={fat.id} 
                    fatProductInfo={fat} 
                    productsQuantityMap={productsQuantityMap} 
                    setProductsQuantityMap={setProductsQuantityMap} 
                />
            ))}
        </Slider>
    );
}

export default Carousel;

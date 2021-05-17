import Slider from 'react-slick';

import * as HS from './style/hero';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <HS.Container>
            <Slider {...settings} >
            <HS.HeroWrap>
                <HS.HeroImg>
                    <img src="./img/morelaptops.png" alt="" />
                </HS.HeroImg>
                <HS.HeroTxt>
                    <HS.HTitle>
                        Surface deals
                    </HS.HTitle>
                    <HS.HDesc>
                        Select Surface devices are on sale now--save while supplies last.
                        For help choosing the right Surface, book a personal shopping appointment with a Microsoft Store associate
                    </HS.HDesc>
                    <HS.HBtn>
                        Shop now
                    </HS.HBtn>
                    <HS.SnBtn>
                        Book an appointment
                    </HS.SnBtn>
                </HS.HeroTxt>
            </HS.HeroWrap>
            <HS.HeroWrap>
                <HS.HeroTxt>
                    <HS.HTitle>
                            New Surface Laptop 4
                    </HS.HTitle>
                    <HS.HDesc>
                            Do it all with a perfect balance of sleek, ultra-thin design,
                            multitasking speed, and improved performance
                    </HS.HDesc>
                    <HS.HBtn>
                        Shop now
                    </HS.HBtn>
                </HS.HeroTxt>
                <HS.HeroImg>
                    <img src="./img/laptops.png" alt="" />
                </HS.HeroImg>
                </HS.HeroWrap>
            </Slider>
</HS.Container>
    )
}
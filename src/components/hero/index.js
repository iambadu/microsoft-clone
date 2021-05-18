import Slide from "../slide";
import * as HS from './style/hero';


export default function Hero() {

    return (
        <>
            <HS.Container>
                <Slide>
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
                    <HS.HeroWrap inv>
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
                </Slide>
            </HS.Container>
            <HS.Container>
                <HS.Quicklinks>
                    <HS.QuickItem>
                        <HS.QuickLink>
                            <img src="./img/ms365.png" alt="" />
                        Choose your Microsoft 365
                    </HS.QuickLink>
                    </HS.QuickItem>
                    <HS.QuickItem>
                        <HS.QuickLink>
                            <img src="./img/surface.png" alt="" />
                        Shop Surface devices
                    </HS.QuickLink>
                    </HS.QuickItem>
                    <HS.QuickItem>
                        <HS.QuickLink>
                            <img src="./img/xbox.png" alt="" />
                        Buy Xbox games and consoles
                    </HS.QuickLink>
                    </HS.QuickItem>
                    <HS.QuickItem>
                        <HS.QuickLink>
                            <img src="./img/windows.png" alt="" />
                        Shop Windows 10
                    </HS.QuickLink>
                    </HS.QuickItem>
                    <HS.QuickItem>
                        <HS.QuickLink>
                            <img src="./img/pc.png" alt="" />
                        Find your next PC
                    </HS.QuickLink>
                    </HS.QuickItem>
                    <HS.QuickItem>
                        <HS.QuickLink>
                            <img src="./img/business.png" alt="" />
                        Shop Business
                    </HS.QuickLink>
                    </HS.QuickItem>
                </HS.Quicklinks>
            </HS.Container>
        </>
    )
}
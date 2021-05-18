import * as P from './styles/products';
import { Container, HeroWrap, HeroImg, HeroTxt, HTitle, HDesc, HBtn, SnBtn } from '../hero/style/hero'
import Slide from '../slide';



export default function Products() {
    return (
        <>
        <Container>
            <P.ProductList>
                <P.ProductItem>
                    <img src="./img/p-surface.png" alt="" />
                    <h3>Bundle and save up to $360</h3>
                    <p>Work and play virtually anywhere when you bundle a Surface Pro 7 with choice of select Type Cover.</p>
                    <P.ProdLink>Shop now</P.ProdLink>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/p-cloud.png" alt="" />
                    <h3>Microsoft 365</h3>
                    <p>Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription.</p>
                    <p><P.ProdLink>For up to 6 people</P.ProdLink> <br /> </p>
                    <P.ProdLink>For 1 person</P.ProdLink>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/p-laptop.png" alt="" />
                    <h3>Do more with Windows</h3>
                    <p>Shop tablets, laptops, all-in-ones, gaming PCs, and more.</p>
                    <P.ProdLink>Find your next PC</P.ProdLink>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/p-game.png" alt="" />
                    <h3>Xbox Game Pass Ultimate</h3>
                    <p>Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favorite game.</p>
                    <P.ProdLink>Join now</P.ProdLink>
                    <P.ProdLink>Compare all plans</P.ProdLink>
                </P.ProductItem>
            </P.ProductList>

                    <P.Response>
                        <h2>Microsoft's response to COVID-19</h2>
                        <p>Read how we’re responding to the COVID-19 outbreak, and get resources to help.</p>
                        <SnBtn>Learn more</SnBtn>
                    </P.Response>
            
            <HeroWrap text='#ffff' bg='#2f2f2f'>
                <HeroImg>
                    <img src="./img/albums.png" alt="" />
                </HeroImg>
                <HeroTxt>
                    <HTitle>
                        Asian American and Pacific Islander Heritage Month
                    </HTitle>
                    <HDesc>
                        Discover games, movies, and TV selected by Asian/Pacific Islander communities at Microsoft. Visit aka.ms/xaapi to learn about contributions and more.                    </HDesc>
                    <HBtn inv={true}>
                        Browse Games
                    </HBtn>
                    <SnBtn inv={true}>
                        Browse Movies & TV
                    </SnBtn>
                </HeroTxt>

            </HeroWrap>

            <P.ProductList>
                <P.ProductItem>
                    <img src="./img/surface-business.jpg" alt="" />
                    <h3>Surface for Business</h3>
                    <p>No matter what you do, there's a Surface to help you do it. Our product experts can help determine the best hardware, solutions, and pricing plan for your unique needs</p>
                    <P.ProdLink>Shop now</P.ProdLink>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/ms-teams.jpg" alt="" />
                    <h3>Microsoft Teams</h3>
                    <p>Chat, meet, call, and collaborate.</p>
                    <P.ProdLink>Learn More</P.ProdLink>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/ms-build.jpg" alt="" />
                    <h3>Microsoft Build</h3>
                    <p>Creator? Developer? Join us on May 25-27 ro hear what's next.</p>
                    <P.ProdLink>Register Now</P.ProdLink>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/p-game.png" alt="" />
                    <h3>Microsoft 365 for Business</h3>
                    <p>Stay a step ahead with powerful apps for productivity, connection, and security.</p>
                    <P.ProdLink>Shop now</P.ProdLink>
                </P.ProductItem>
            </P.ProductList>
            <Slide>
                <HeroWrap text='#fff' bg='#0f0f0f'>
                    <HeroImg>
                        <img src="./img/player.png" alt="" />
                    </HeroImg>
                    <HeroTxt>
                        <HTitle>
                            Innovating game day
                    </HTitle>
                        <HDesc>
                            Powered by Microsoft Azure, NBA CourtOptix leverages the power of AI to create next-level data and metrics--and give fans a fresh perspective                    </HDesc>
                        <HBtn inv>
                            Learn more
                    </HBtn>

                    </HeroTxt>
                </HeroWrap>
                <HeroWrap inv bg='#ccd5e6'>
                    <HeroTxt>
                        <HTitle>
                            A look inside datacenters
                    </HTitle>
                        <HDesc>
                            Take a 3D tour through an interactive website that explores technology powering the Microsoft Cloud
                    </HDesc>
                        <HBtn>
                            Explore datacenters
                    </HBtn>
                    </HeroTxt>
                    <HeroImg>
                        <img src="./img/field.png" alt="" />
                    </HeroImg>
                </HeroWrap>
            </Slide>
        </Container>
        </>
    )
}
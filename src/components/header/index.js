import * as H from './headerStyle';

export default function Header() {
    return (
        <H.Wrap>
            <H.Container>
                <H.NavWrap>
                    <H.Logo href="/">
                        <img src="/img/logo.png" alt="" />
                    </H.Logo>
                    <H.NavList>
                        <H.NavItem>
                            <H.NavLink href="/">Microsoft 365</H.NavLink>
                        </H.NavItem>
                        <H.NavItem>
                            <H.NavLink href="/">Office</H.NavLink>
                        </H.NavItem>
                        <H.NavItem>
                            <H.NavLink href="/">Windows</H.NavLink>
                        </H.NavItem>
                        <H.NavItem>
                            <H.NavLink href="/">Surface</H.NavLink>
                        </H.NavItem>
                        <H.NavItem>
                            <H.NavLink href="/">Xbox</H.NavLink>
                        </H.NavItem>
                        <H.NavItem>
                            <H.NavLink href="/">Deals</H.NavLink>
                        </H.NavItem>
                        <H.NavItem>
                            <H.NavLink href="/">Support</H.NavLink>
                        </H.NavItem>
                    </H.NavList>
                    <H.SMenuWrap>
                        <H.NavList>
                            <H.NavItem>
                                <H.DDownLink href="/">
                                    All Microsoft
                                </H.DDownLink>
                            </H.NavItem>
                        </H.NavList>
                </H.SMenuWrap>
                    <H.IconWrap>
                        <H.Search/>
                        <H.Cart/>
                        <H.Account/>
                    </H.IconWrap>
                </H.NavWrap>
            </H.Container>
        </H.Wrap>
    )
}
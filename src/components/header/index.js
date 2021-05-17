import { useEffect, useRef, useState } from 'react';

import * as H from './style/header';
import { nav, dropdown } from './navdata.json';

export function MobileDrop({data}) {
    const [mobdrop, setMobdrop] = useState(false);
            return (
                <div key={data.title}>
                    <H.MobiNavItem><H.MobiTitle drop={mobdrop} onClick={() => setMobdrop(!mobdrop)} >{data.title}</H.MobiTitle>
                    </H.MobiNavItem>
                    { mobdrop && <H.MbWrap>
                        {data.list.map((link) => {
                            return (
                                <H.MobiNavItem><H.MobiNavLink >{link}</H.MobiNavLink></H.MobiNavItem>
                            )
                        })}

                    </H.MbWrap>}
                </div>
            )



}

export default function Header() {
    const dropRef = useRef(null);
    const [showmenu, setShowmenu] = useState(false);
    const [showsearch, setShowsearch] = useState(false);
    const [mobshow, setMobshow] = useState(false);

    function handleDropDown() {
        setShowmenu(true);
    }

    function closeMenu(event) {
        if (!dropRef.current.contains(event.target)) {
            setShowmenu(false);
        }
    }


    useEffect(() => {
        if (showmenu === true) {
            document.addEventListener('click', closeMenu);
        }
        return () => {
            document.removeEventListener('click', closeMenu);
        }

    }, [showmenu]);
    return (
        <H.Wrap>
            <H.Container>
                <H.NavWrap>
                    <H.Nav show={mobshow} onClick={() => setMobshow(!mobshow)} />
                    <H.Logo href="/">
                        <img src="/img/logo.png" alt="" />
                    </H.Logo>
                    <H.NavList>
                        {nav.map(list => {
                            return (
                                <H.NavItem>
                                    <H.NavLink href="/">{list}</H.NavLink>
                                </H.NavItem>
                            )
                        })}
                    </H.NavList>
                    <H.SMenuWrap>
                        <H.NavList>
                            <H.NavItem>
                                <H.DDownLink smenu={showmenu} onClick={handleDropDown}>
                                    All Microsoft
                                </H.DDownLink>
                            </H.NavItem>
                        </H.NavList>
                    </H.SMenuWrap>
                    <H.IconWrap>
                        <H.Search onClick={() => setShowsearch(true)} />
                        <H.Cart />
                        <H.Account />
                    </H.IconWrap>
                </H.NavWrap>
                {showsearch && <H.SearchWrap>
                        <input type="text" name="" id="" />
                        <H.SearchBtn onClick={() => setShowsearch(false)}>Cancel</H.SearchBtn>
                        <H.Cancel onClick={() => setShowsearch(false)} />
                    </H.SearchWrap>
                }
                {showmenu && <H.DropDown ref={dropRef}>
                    {dropdown.map((nav) => {
                            return (
                                <H.DropList>
                                    <span>{nav.title}</span>
                                    { nav.list.map(item => {
                                        return (
                                            <H.SubList>
                                                <H.SubItem><H.SubLink href="#!">{item}</H.SubLink></H.SubItem>
                                            </H.SubList>
                                        )
                                    })
                                    }
                                </H.DropList>
                            )
                        })}
                </H.DropDown>}
            </H.Container>
            {mobshow &&
            <H.MobiNav>
                <H.MobiNavList>
                    {nav.map((item) => <H.MobiNavItem><H.MobiNavLink>{item}</H.MobiNavLink></H.MobiNavItem>)}
                    <H.MobiDrop>
                        {dropdown.map((item, i) => <MobileDrop key={i} data={item} /> )}
                    </H.MobiDrop>
                    <H.MobiNavItem><H.MobiNavLink>Microsoft 365</H.MobiNavLink></H.MobiNavItem>
                </H.MobiNavList>
            </H.MobiNav>
            }
        </H.Wrap>
    )
}

//




//

//

//









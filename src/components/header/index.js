import {useEffect, useRef, useState } from 'react';

import * as H from './headerStyle';

export default function Header() {
    const dropRef = useRef(null);
    const [showmenu, setShowmenu] = useState(false);
    const [showsearch, setShowsearch] = useState(false);

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
                    <H.Nav/>
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
                                <H.DDownLink smenu={showmenu} onClick={handleDropDown}>
                                    All Microsoft

                                </H.DDownLink>
                            </H.NavItem>
                        </H.NavList>
                    </H.SMenuWrap>
                    <H.IconWrap>
                        <H.Search onClick={()=> setShowsearch(true)} />
                        <H.Cart />
                        <H.Account />
                    </H.IconWrap>
                </H.NavWrap>
                {
                    showsearch && <H.SearchWrap>
                    <input type="text" name="" id="" />
                    <H.SearchBtn onClick={() => setShowsearch(false)}>Cancel</H.SearchBtn>
                    <H.Cancel onClick={() => setShowsearch(false)} />
</H.SearchWrap>
                    }
                {showmenu && <H.DropDown ref={dropRef}>
                    <H.DropList>
                        <span>Software</span>
                        <H.SubList>
                            <H.SubItem><H.SubLink href="#!">Windows Apps</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">OneDrive</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Outlook</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Skype</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">OneNote</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Microsoft Teams</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Microsoft Edge</H.SubLink></H.SubItem >
                        </H.SubList>
                    </H.DropList>
                    <H.DropList>
                        <span>PCs & Devices</span>
                        <H.SubList>
                            <H.SubItem><H.SubLink href="#!">Computers</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Shop Xbox</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Accessories</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">VR & mixed reality</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Phones</H.SubLink></H.SubItem>
                        </H.SubList>
                    </H.DropList>
                    <H.DropList>
                        <span>Entertainment</span>
                        <H.SubList>
                            <H.SubItem><H.SubLink href="#!">Xbox Game Pass</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Xbox Live Gold</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Xbox games</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">PC games</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Windows digital games</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Movies & TV</H.SubLink></H.SubItem>
                        </H.SubList>
                    </H.DropList>
                    <H.DropList>
                        <span>Business</span>
                        <H.SubList>
                            <H.SubItem><H.SubLink href="#!">Microsoft Azure</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Microsoft Dynamics 365</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Microsoft 365</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Microsoft Industry</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Data platform</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Microsoft Advertising</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Power Platform</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Shop Business</H.SubLink></H.SubItem>
                        </H.SubList>
                    </H.DropList>
                    <H.DropList>
                        <span>Developer & IT</span>
                        <H.SubList>
                            <H.SubItem><H.SubLink href="#!">.NET</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Visual Studio</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Windows Server</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Windows Dev Center</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Docs</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Power Apps</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">HoloLens 2</H.SubLink></H.SubItem>
                        </H.SubList>
                    </H.DropList>
                    <H.DropList>
                        <span>Other</span>
                        <H.SubList>
                            <H.SubItem><H.SubLink href="#!">Microsoft Rewards</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Free downloads & security</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Education</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Virtual workshops and training</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Gift cards</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Licensing</H.SubLink></H.SubItem>
                            <H.SubItem><H.SubLink href="#!">Microsoft Experience Center</H.SubLink></H.SubItem>
                        </H.SubList>
                    </H.DropList>
                </H.DropDown>}
            </H.Container>
        </H.Wrap>
    )
}

//




//

//

//









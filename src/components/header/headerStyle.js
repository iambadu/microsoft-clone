import styled from 'styled-components/macro'

export const Wrap = styled.div`
width:100%;
`;

export const Container = styled.div`
max-width: 1400px;
margin:0 auto;
padding: 0 5%;
@media (max-width: 859px) {
    padding: 0 15px;
    margin:0;
}
`;

export const NavWrap = styled.div`
display: flex;
align-items:flex-start;
`;

export const Logo = styled.a`
width: 137px;
padding: 16px 5px 16px 10px;
img {
    width: 108px;
    margin-top:-3px;
}
`;
export const NavList = styled.ul`
display: flex;
margin:0;
padding:0;
`;

export const NavItem = styled.li`
list-style:none;

`;

export const NavLink = styled.a`
font-size:14px;
height:48px;
display:inline-block;
padding: 16px 8px 10px;
position:relative;
&:hover::before{
    content:"";
    position:absolute;
    bottom:10px;
    left:8px;
    right:8px;
    width:calc(100%-16px);
    height: 2px;
    background: var(--txtcolor);
}
`;
export const SMenuWrap = styled.div`
margin-left:auto;
`;

export const DDownLink = styled(NavLink)`
padding-right:20px;
::before{

    width:calc(100% - 26px)!important;
}
&::after {
       position: absolute;
    margin: auto;
    top:50%;
    right: 6px;
    bottom:calc(50% + 2px) ;
    content:"";
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    border-right: 1px solid var(--txtcolor);
    border-bottom: 1px solid var(--txtcolor);
}
`;
export const IconWrap = styled.div`
display:flex;
padding-left:25px;
`;

export const Icon = styled.button`
&:focus{
    outline: 0;
    border: 1px solid dashed;
}
background-size: 16px!important;
width:36px;
cursor:pointer;
align-self:stretch;
padding: 13px 9px 19px;
height:48px;
border:none;
`;
export const Search = styled(Icon)`
background: url('/img/search.png') no-repeat center center;
`;
export const Cart = styled(Icon)`
background: url('/img/cart.png') no-repeat center center;
`;
export const Account = styled(Icon)`
width:44px;
background-size: 32px!important;
background: url('/img/account.png') no-repeat center center;

`;
















// Gray
// colors.coolGray
// 50
// #F9FAFB
// 100
// #F3F4F6
// 200
// #E5E7EB
// 300
// #D1D5DB
// 400
// #9CA3AF
// 500
// #6B7280
// 600
// #4B5563
// 700
// #374151
// 800
// #1F2937
// 900
// #111827
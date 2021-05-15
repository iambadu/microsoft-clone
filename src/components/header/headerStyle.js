import styled from 'styled-components/macro'

const mobsize = '950px';

export const Wrap = styled.div`
width:100%;
`;

export const Container = styled.div`
max-width: 1400px;
margin:0 auto;
padding: 0 4%;
@media (max-width: ${mobsize}) {
    padding: 0 15px;
    margin:0;
}
`;

export const NavWrap = styled.div`
display: flex;
align-items:flex-start;
`;

export const Logo = styled.a`
@media (max-width: ${mobsize}) {
    margin-left: auto;
}
width: 137px;
padding: 16px 5px 16px 10px;
img {
    width: 108px;
    margin-top:-3px;
}
`;
export const NavList = styled.ul`
@media (max-width: ${mobsize}) {
    display:none;
}
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
padding: 18px 8px 10px;
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

export const IconWrap = styled.div`
display: flex;
width: fit-content;
flex-wrap: no-wrap;
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

export const SearchWrap = styled.div`
padding: 5px 10px 10px 140px;
@media (max-width: ${mobsize}) {
padding-left:0;
}
top: -50px;
width: 100%;
position: relative;
z-index: 1400;
display: flex;
flex: 1 0 auto;
height: 50px;
box-sizing: border-box;
input {
    display:block;
    width:100%;
    height: 36px;
    z-index: 1400;
    padding: 8px 15px;
    font-size:14px;
    background: url('./img/search.png') no-repeat;
    background-position:  bottom 50% right 10px;;
    background-size: 16px;
    border: 2px solid black;
}
&::after{
    position:absolute;
    background: #fff;
    @media (max-width: ${mobsize}) {
left:0;
}
    left:140px;
    z-index: 700;
    top:0;
    height:auto;
    content: "";
    bottom:0;
    right:0;
}
`;

export const SearchBtn = styled.button`
@media (max-width: ${mobsize}) {
display: none
}
height: 36px;
margin-left:10px;
padding:8px 30px;
font-size:14px;
z-index: 1400;
display:flex;
align-items:center;
justify-content:center;
background:white;
border: 1px solid black;
`;

export const Search = styled(Icon)`
background: url('/img/search.png') no-repeat center center;
`;
export const Cancel = styled(Icon)`
@media (min-width: ${mobsize}) {
display: none
}
z-index: 1400;
padding: 9px 15px!important;
height:36px;
margin-left: 5px;
background-size: 24px!important;
background: url('/img/cancel.png') no-repeat center center;
`;
export const Nav = styled(Icon)`
@media (min-width: ${mobsize}) {
display: none
}
background: url('/img/nav.png') no-repeat center center;
background-size:20px!important;
`;
export const Cart = styled(Icon)`
background: url('/img/cart.png') no-repeat center center;
`;
export const Account = styled(Icon)`
width:44px;
background-size: 32px!important;
background: url('/img/account.png') no-repeat center center;
`;

export const DDownLink = styled(NavLink)`
@media(max-width:${mobsize}) {
    display: none;
}
padding-right:20px;
margin-right:15px;
position:relative;
cursor:pointer;
background: ${props => props.smenu && '#F3F4F6'};
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

export const DropDown = styled.ul`
position: relative;
top:-7px;
background: #F3F4F6;
margin: 0;
display:flex;
padding:0;
padding-right:24px;
border-bottom: 2px solid var(--txtcolor);
`;

export const DropList = styled.li`
list-style:none;
font-size: 13px;
width:100%;
span {
    padding: 18px 0 18px 24px;
    font-weight: bold;
    display:block;
}
`;
export const SubLink = styled.a`
    padding: 12px 0 12px 24px;
    display:block;
    &:hover{
        text-decoration:underline;
    }
`;
export const SubList = styled.ul`
display:flex;
flex-direction:column;
margin:0;
padding:0;
`;
export const SubItem = styled.li`
list-style:none;
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
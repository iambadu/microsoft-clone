import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs';

export const Container = styled.div`
max-width: 1400px;
margin: 0 auto;
padding: 0 4%;
@media (min-width: 768) and (max-width: 1100px) {
width: 100%;
background: #D8D7D7;
}
`;
export const HeroImg = styled.div`
width: 50%;
img {
width: 100%;
display:block;
/* height: fit-content; */
}
`;

export const HeroTxt = styled.div`
width: 40%;
padding-left: 5%;
`;

export const HBtn = styled.a`
position:relative;
padding: 10px 30px;
background: #000;
color: #fff;
font-weight: 600;
display: inline-block;
&::after{
    top: 14px;
    right: 18px;
    position: absolute;
    content:"";
    height:6px;
    width:6px;
    transform: rotate(-45deg);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
}
`;

export const SnBtn = styled(HBtn)`
background:transparent;
color:#000;
&::after{
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
}
`;
export const HTitle = styled.h2`
font-size: ${rfs(24)};
font-weight: 600;
margin:0;
`;
export const HDesc = styled.p`
line-height: 1.5;
padding: 15px 0;
`;
export const HeroWrap = styled.div`
display: flex!important;
padding: 0 4%;
background: #f5f5f5;
align-items:center;
width:100%;
`;

// QUICKLINKS
export const Quicklinks = styled.ul`
padding:0;
margin:0;
display:flex;
`;

export const QuickItem = styled.li`
list-style:none;
`;
export const QuickLink = styled.ul`
&:hover {
    text-decoration: underline;
}
`;
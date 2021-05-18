import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs';

export const Container = styled.div`
max-width: 1400px;
margin: 0 auto;
padding: 0 4%;
@media (min-width: 768px) and (max-width: 1100px) {
width: 100%;
padding: 0;
margin:0;
}
`;
export const HeroImg = styled.div`
width: 50%;
img {
width: 100%;
display:block;
/* height: fit-content; */
}
@media (max-width: 768px) {
width: 100%;
}
`;

export const HeroTxt = styled.div`
width: 40%;
padding-left: 5%;
@media (max-width: 768px) {
width: 100%;
padding: 60px 15px;
text-align:center;
}
`;

export const HBtn = styled.a`
position:relative;
padding: 10px 30px;
background: ${props => props.inv ? '#fff' : '#000'};
color: ${props => props.inv ? '#000' : '#fff'};
font-weight: 600;
display: inline-block;
&::after{
    top: 15px;
    right: 18px;
    position: absolute;
    content:"";
    height:6px;
    width:6px;
    transform: rotate(-45deg);
    border-right: 2px solid ${props => props.inv ? '#000' : '#fff'};
    border-bottom: 2px solid ${props => props.inv ? '#000' : '#fff'};
}
`;

export const SnBtn = styled(HBtn)`
background:transparent;
color:${props => props.inv ? '#fff' : '#000'};
&::after{
    border-right: 2px solid ${props => props.inv ? '#fff' : '#000'};
    border-bottom: 2px solid ${props => props.inv ? '#fff' : '#000'};
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
color: ${props => props.text ? props.text : '#000'};
background:${props => props.bg ? props.bg : '#f5f5f5'};
align-items:center;
width:100%;
@media (min-width: 768px) and (max-width: 1100px) {
padding: 0;
}
@media (max-width: 768px) {
flex-direction:${props => props.inv ? 'column-reverse' : 'column'}!important;
justify-content:center;
align-items:center;
}
`;

// QUICKLINKS
export const Quicklinks = styled.ul`
padding:35px 30px;
@media (max-width: 768px) {
    padding: 20px 10px;
}
margin:0;
display:flex;
flex-wrap:wrap;
`;

export const QuickItem = styled.li`
list-style:none!important;
@media (min-width: 768px) and (max-width: 1100px) {
width: 33.333%;
}
`;
export const QuickLink = styled.a`
display:flex;
flex-direction:column;
align-items:center;
@media (max-width: 768px) {
flex-direction:row;
width:100%;
padding: 10px;
}
img {
    width:40px;
    height:40px;
    display:block;
    margin-right: 10px;
    margin-bottom:10px;
}
padding: 10px 20px;
font-weight:600;
text-align:center;
&:hover {
    text-decoration: underline;
}
`;
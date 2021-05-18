import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs';
import { SnBtn } from '../../hero/style/hero';

export const ProductList = styled.div`
padding: 20px 0;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const ProductItem = styled.div`
padding: 10px;
h3 {
    color: #222;
    margin-bottom:5px;
}
img {
    width:100%;
}
p {
    line-height:1.4;
}
`;
export const ProdLink = styled(SnBtn)`
padding-left:0;
display: inline-block;
&::after {
    border-color: blue;
}
color: blue;
`;

export const Response = styled.div`
h2 {
    font-size:${rfs(38)};
    font-weight: 600;
    margin:0;
    padding-bottom:15px;
}
margin:25px 0;
padding: 20px 15px;
background: #E9E7E7;
text-align:center;
`;
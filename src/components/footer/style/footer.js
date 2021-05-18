import styled from 'styled-components/macro';

export const FootWrap = styled.div`
background: #f2f2f2;
margin-top: 48px;
color:#616161;
`;
export const FootWrpList = styled.ul`
padding: 25px 10px;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const FootWrpItem = styled.li`
list-style:none;
`;
export const FootTitle = styled.p`
font-weight:600;
padding-right:5px;
`;
export const FootList = styled.ul`
padding-bottom:15px;
display:flex;
flex-direction:column;
`;

export const FootItem = styled.li`
list-style:none;
`;

export const FootLink = styled.a`
color:#616161;
font-size: 13px;
display:inline-block;
padding: 8px 0;
`;

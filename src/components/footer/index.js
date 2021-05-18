import { Container } from '../hero/style/hero';
import { FootTitle, FootWrpItem, FootWrpList, FootItem, FootLink, FootList, FootWrap } from './style/footer';

import { footer } from '../../utils/navdata.json';

export default function Footer() {
    return (
        <FootWrap>
            <Container>
                <FootWrpList>
                    {
                        footer.map(item => {
                            return (
                                <FootWrpItem>
                                    <FootList>
                                        <FootTitle>{item.title}</FootTitle>
                                        {item.list.map(link => {
                                            return (
                                                <FootItem>
                                                    <FootLink>{link}</FootLink>
                                                </FootItem>
                                            )

                                        })}

                                    </FootList>
                                </FootWrpItem>
                            )
                        })
                    }
                </FootWrpList>
            </Container>
        </FootWrap>
    )
}
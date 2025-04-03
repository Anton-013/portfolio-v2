import React from "react";
import { IconList } from "../../components/iconList/IconList";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FlexWrap>
                    <S.TextBlock>
                        <S.PhoneBlock>
                            <S.Text>Call me:</S.Text>
                            <S.Tel>123-456-789</S.Tel>
                        </S.PhoneBlock>
                        <S.EmailBlock>
                            <S.Text>Email:</S.Text>
                            <S.Email>xxx@xyz.com</S.Email>
                        </S.EmailBlock>
                    </S.TextBlock>
                    <IconList />
                </S.FlexWrap>
            </Container>
        </S.Footer>
    )
}


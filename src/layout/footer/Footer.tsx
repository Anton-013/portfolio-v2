import React from "react";
import styled from "styled-components";
import { IconList } from "../../components/iconList/IconList";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrap>
                    <Contacts>
                        <TextBlock>
                            <PhoneBlock>
                                <Text>Call me:</Text>
                                <Tel>123-456-789</Tel>
                            </PhoneBlock>
                            <EmailBlock>
                                <Text>Email:</Text>
                                <Email>xxx@xyz.com</Email>
                            </EmailBlock>
                        </TextBlock>
                    </Contacts>
                    <IconList />
                </FlexWrap>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    min-height: 150px;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    align-items: center;
    padding: 40px 0;
`

const FlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 56px;
    row-gap: 40px;

    @media ${theme.media.tablet} {
        justify-content: space-around;
    }
`

const TextBlock = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 164px;

    @media ${theme.media.tablet} {
        column-gap: 100px;
    }
`

const Contacts = styled.div`
    display: flex;
    gap: 30px;
`

const PhoneBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const EmailBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.span`
    
`

const Tel = styled.a.attrs(() => (
    {
        type: "tel",
    }
))`
    
`

const Email = styled.a.attrs(() => (
    {
        type: "email",
    }
))`
    
`
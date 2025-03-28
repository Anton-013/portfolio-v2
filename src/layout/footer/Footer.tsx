import React from "react";
import styled from "styled-components";
import { IconList } from "../../components/iconList/IconList";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Contacts>
                        <PhoneBlock>
                            <Text>Call me:</Text>
                            <Tel>123-456-789</Tel>
                        </PhoneBlock>
                        <EmailBlock>
                            <Text>Email:</Text>
                            <Email>xxx@xyz.com</Email>
                        </EmailBlock>
                    </Contacts>
                    <IconList />
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    min-height: 150px;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    align-items: center;
`

const Contacts = styled.div`
    display: flex;
    gap: 30px;
`

const PhoneBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 162px;
`

const EmailBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.span`
    
`

const Tel = styled.a.attrs( () => (
    {
        type: "tel",
    }
))`
    
`

const Email = styled.a.attrs( () => (
    {
        type: "email",
    }
))`
    
`
import React from "react";
import styled from "styled-components";
import { IconList } from "../../components/iconList/IconList";

export const Footer = () => {
    return (
        <StyledFooter>
            <Contacts>
                <Phone>
                    <Text>Call me:</Text>
                    <Text>123-456-789</Text>
                </Phone>
                <Email>
                    <Text>Email:</Text>
                    <Text>xxx@xyz.com</Text>
                </Email>
            </Contacts>
            <IconList />
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: grey;
    display: flex;
    justify-content: space-around;
`

const Contacts = styled.div`
    display: flex;
    gap: 30px;
`

const Phone = styled.div`
    display: flex;
    flex-direction: column;
`

const Email = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.span`
    
`
import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { IconList } from "../../components/iconList/IconList";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo />
                    <Menu />
                    <IconList />
                </FlexWrapper>

            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    position: fixed;
    width: 100%;
`
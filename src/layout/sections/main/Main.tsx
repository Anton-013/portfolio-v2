import React from "react";
import photo from "../../../assets/imeges/photo.jpeg";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <BlockText>
                        <MainTitle>Lorem ipsum dolor amet</MainTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                        <Button>Let’s Begin</Button>
                    </BlockText>
                    <PhotoBorder>
                        <Photo src={photo} alt="" />   
                    </PhotoBorder>                                    
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 80vh;
    background-color: #2f4b69;
`

const BlockText = styled.div`
    display: flex;
    flex-direction: column;
`

const MainTitle = styled.h1`
    text-align: left;
    font-family: Poppins;
    font-weight: 600;
    font-size: 54px;
    line-height: 100%;
    letter-spacing: 0%;
`

const Text = styled.p`
    text-align: left;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-top: 15px;
    margin-bottom: 60px;
`

const Photo = styled.img`
    width: 370px;
    height: 440px;
    object-fit: cover;
    /* border: 10px solid skyblue;
    border-image: ${theme.colors.accent};
    border-image-slice: 1; */
    border-radius: 50px 0 50px 0;
    margin: 5px;
`

const PhotoBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${theme.colors.accent};
    border-radius: 55px 0 55px 0;
`
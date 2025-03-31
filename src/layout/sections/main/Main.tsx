import React from "react";
import photo from "../../../assets/imeges/photo.jpeg";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} columnGap={"40px"} rowGap={"50px"} wrap={"wrap-reverse"}>
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
    min-height: 100vh;
    background-color: #2f4b69;
    display: flex;
    align-items: center;
`

const BlockText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 673px;
`

const MainTitle = styled.h1`
    ${font({family: '"Poppins"', weight: 600, Fmax: 54, Fmin: 36})}
    text-align: left;
    line-height: 100%;
    letter-spacing: 0%;
`

const Text = styled.p`
    ${font({family: "'Poppins'", weight: 500, Fmax: 18, Fmin: 16})}
    text-align: left;
    line-height: 100%;
    letter-spacing: 0%;

    margin-top: 15px;
    margin-bottom: 60px;

    @media ${theme.media.mobile} {
        margin-top: 25px;
        margin-bottom: 40px;
    }
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

    @media ${theme.media.mobile} {
        width: 325px;
        height: 390px;
    }
`

const PhotoBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${theme.colors.accent};
    border-radius: 55px 0 55px 0;
`
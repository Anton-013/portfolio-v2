import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const TimelineVertical = () => {
    return (
        <StyledTimeline>
            <ContainerRight>
                <Content>
                    <ContentTitle>2017</ContentTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                </Content>
            </ContainerRight>
            <ContainerRight>
                <Content>
                    <ContentTitle>2019</ContentTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                </Content>
            </ContainerRight>
            <ContainerRight>
                <Content>
                    <ContentTitle>2021</ContentTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                </Content>
            </ContainerRight>
            <ContainerRight>
                <Content>
                    <ContentTitle>2023</ContentTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                </Content>
            </ContainerRight>
        </StyledTimeline>
    )
}

const StyledTimeline = styled.div`
    display: none;
    position: relative;
    max-width: 328px;
    margin: 0 auto;

    &::after {
        content: '';
        position: absolute;
        width: 6px;
        background-image: ${theme.colors.accent};
        top: 40px;
        bottom: 20px;
        /* left: 50%; */
        /* margin-left: 9px; */
    }

    @media ${theme.media.tablet} {
        display: block;
    }
`

const Content = styled.div`
    padding: 20px 30px;
    position: relative;
    border-radius: 6px;
`

const ContainerRight = styled.div`
    padding: 10px 0;
    position: relative;
    background-color: inherit;
    width: 100%;

    &::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        left: -9px;
        background-color: white;
        top: 30px;
        border-radius: 50%;
        z-index: 1;
    }
`

const ContentTitle = styled.h2`
    font-weight: 600;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-bottom: 10px;
`

const Text = styled.p`
    ${font({weight: 500, Fmax: 18, Fmin: 16})}
    line-height: 100%;
    letter-spacing: 0%;
`
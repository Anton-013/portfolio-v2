import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const TimelineHorizon = () => {
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
    position: relative;
    max-width: 1142px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    &:before {
        content: '';
        position: absolute;
        height: 8px;
        left: 12%;
        right: 12%;
        top: 50px;
        background-image: ${theme.colors.accent};
        z-index: 1;
    }
`

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        background-color: white;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        z-index: 1;
    }
`

const ContentTitle = styled.h2`
    font-weight: 600;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-bottom: 40px;
`

const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    line-height: 1.5em;

    max-width: 260px;
`
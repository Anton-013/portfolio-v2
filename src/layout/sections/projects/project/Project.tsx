import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    src: string
    title: string
    text: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>              
                <Image src={props.src} alt="" />
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Button>Look It Up</Button>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    border: 1px solid #A39D9D;
    border-radius: 50px 0 50px 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    &>*:last-child {
        align-self: flex-start;
    }

    max-width: 550px;
    max-height: 670px;
    background-color: ${theme.colors.primaryBg};
    padding: 25px 25px 40px 25px;
`

const Image = styled.img`
    max-width: 500px;
    max-height: 280px;
    object-fit: cover;
    border-radius: 24px 8px 8px 8px;
    margin-bottom: 40px;
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 30px;
    line-height: 89%;
    letter-spacing: 0%;
    margin-bottom: 68px;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 4px;
        left: -74px;
        right: -74px;
        bottom: -23px;        
        background-image: ${theme.colors.accent};

        position: absolute;
    }
`

const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    margin-bottom: 50px;
    text-align: start;
`

import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

// Projects

const Projects = styled.section`

`

// Project

const Project = styled.div`
    border: 1px solid #A39D9D;
    border-radius: 50px 0 50px 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    &>*:last-child {
        align-self: flex-start;
    }

    max-width: 550px;
    width: 100%;
    max-height: 670px;
    background-color: ${theme.colors.primaryBg};
    padding: 25px 25px 40px 25px;
`

const Image = styled.img`
    max-width: 500px;
    width: 100%;
    max-height: 280px;
    object-fit: cover;
    border-radius: 24px 8px 8px 8px;
    margin-bottom: 40px;
`

const Title = styled.h3`
    ${font({weight: 600, lineHeight: 0.89, Fmax: 30, Fmin: 24})}
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
    ${font({weight: 500, Fmax: 18, Fmin: 16})}
    letter-spacing: 0%;
    margin-bottom: 50px;
    text-align: start;
`


export const S = {
    Projects,
    Project,
    Image,
    Title,
    Text,
}
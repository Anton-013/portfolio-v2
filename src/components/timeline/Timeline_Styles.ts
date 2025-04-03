import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

// TimelineHorizon

const TimelineHorizon = styled.div`
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

    @media ${theme.media.tablet} {
        display: none;
    }
`

const ContentHorizon = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerHorizon = styled.div`
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

const ContentTitleHorizon = styled.h2`
    font-weight: 600;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-bottom: 40px;
`

const TextHorizon = styled.p`
    ${font({ weight: 500, Fmax: 18, Fmin: 16 })}
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    line-height: 1.5em;

    max-width: 260px;
`

// TimelineVertical

const TimelineVertical = styled.div`
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
    }

    @media ${theme.media.tablet} {
        display: block;
    }
`

const ContentVertical = styled.div`
    padding: 20px 30px;
    position: relative;
    border-radius: 6px;
`

const ContainerVertical = styled.div`
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

const ContentTitleVertical = styled.h2`
    font-weight: 600;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-bottom: 10px;
`

const TextVertical = styled.p`
    ${font({weight: 500, Fmax: 18, Fmin: 16})}
    line-height: 100%;
    letter-spacing: 0%;
`

export const S = {
    TimelineHorizon,
    ContentHorizon,
    ContainerHorizon,
    ContentTitleHorizon,
    TextHorizon,
    TimelineVertical,
    ContentVertical,
    ContainerVertical,
    ContentTitleVertical,
    TextVertical,
}
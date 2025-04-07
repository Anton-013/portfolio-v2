import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"

const Technologies = styled.section`
    position: relative;
`

const Text = styled.h3`
    ${font({weight: 600, Fmax: 44, Fmin: 27})}
    line-height: 100%;
    letter-spacing: 0%;

    margin-top: 120px;
    margin-bottom: 70px;

    @media ${theme.media.tablet} {
        margin-top: 85px;
        margin-bottom: 40px;
    }
`

const IconListTech = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;

    @media ${theme.media.mobile} {
        scale: 0.6;
    }
`

export const S = {
    Technologies,
    Text,
    IconListTech,
}
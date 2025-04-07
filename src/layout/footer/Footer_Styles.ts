import styled from "styled-components"
import { theme } from "../../styles/Theme"



const Footer = styled.footer`
    min-height: 150px;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    align-items: center;
    padding: 40px 0;
    position: relative;
`

const FlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 56px;
    row-gap: 40px;

    @media ${theme.media.tablet} {
        justify-content: space-around;
    }
`

const TextBlock = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 164px;

    @media ${theme.media.tablet} {
        column-gap: 100px;
    }
`

const PhoneBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const EmailBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.span``

const Tel = styled.a.attrs(() => (
    {
        type: "tel",
    }
))``

const Email = styled.a.attrs(() => (
    {
        type: "email",
    }
))``

export const S = {
    Footer,
    FlexWrap,
    TextBlock,
    PhoneBlock,
    EmailBlock,
    Text,
    Tel,
    Email,
}
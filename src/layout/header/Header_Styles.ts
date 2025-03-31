import styled from "styled-components"
import { theme } from "../../styles/Theme"


const Header = styled.header`
    background-color: ${theme.colors.primaryBg};
    position: fixed;
    width: 100%;
    z-index: 99999999;
`

export const S = {
    Header,
}
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common"

export const Button = styled.button`
    ${font({family: '"Poppins"', weight: 600, Fmax: 20, Fmin: 18})}
    width: 240px;
    height: 60px;
    background-image: ${theme.colors.accent};
    border-radius: 30px;
    color: ${theme.colors.font};
    
    line-height: 100%;
    letter-spacing: 0%;

    &:hover {
        border: 2px solid rgb(0, 9, 27);
        font-size: 19px;
    }

    &:active {
        border: 4px solid rgb(0, 9, 27);
        font-size: 18px;
    }
`
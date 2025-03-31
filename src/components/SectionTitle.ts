import React from "react";
import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    ${font({weight: 600, Fmax: 46, Fmin: 32})}
    line-height: 100%;
    letter-spacing: 0%;

    margin-bottom: 70px;

    @media ${theme.media.tablet} {
        margin-bottom: 30px;
    }
`
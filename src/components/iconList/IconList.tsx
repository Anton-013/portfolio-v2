import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const IconList: React.FC = () => {
    return (
        <StyledIconList>
            <li>
                <a href="">
                    <Icon iconId="gitHub" width="32" height="32" viewBox="0 0 32 32" />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId="linkedin" width="32" height="32" viewBox="0 0 32 32" />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId="telegram" width="35" height="30" viewBox="0 0 35 30" />
                </a>
            </li>
        </StyledIconList>
    )
}

const StyledIconList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    svg:hover {
        scale: 0.9;
    }
`
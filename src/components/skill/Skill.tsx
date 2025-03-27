import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../FlexWrapper";

export const Skill = () => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <SkillTitle>Html</SkillTitle>
                <ProgressBar>
                    <Progress />
                </ProgressBar>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 80%;
`

const SkillTitle = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-left: 20px;
    margin-bottom: 10px;
`

const ProgressBar = styled.div`
    display: flex;
    width: 100%;
    height: 18px;
    border-radius: 9px;
    background-color: ${theme.colors.progressBg};
`

const Progress = styled.div`
    width: 50%;
    height: 18px;
    border-radius: 9px;
    background-color: white;
`
import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../FlexWrapper";
import { font } from "../../styles/Common";

type SkillPropsType = {
    skillName: string
    skillProcent: string
}

type ProgressPropsType = {
    procent?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <SkillTitle>{props.skillName}</SkillTitle>
                <ProgressBar>
                    <Progress procent={props.skillProcent}/>
                </ProgressBar>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 80%;
`

const SkillTitle = styled.span`
    ${font({weight: 600, Fmax: 24, Fmin: 22})}
    line-height: 100%;
    letter-spacing: 0%;

    margin-left: 20px;
    margin-bottom: 8px;
`

const ProgressBar = styled.div`
    display: flex;
    width: 100%;
    height: 18px;
    border-radius: 9px;
    background-color: ${theme.colors.progressBg};
`

const Progress = styled.div<ProgressPropsType>`
    width: ${props => props.procent || "1%"};
    height: 18px;
    border-radius: 9px;
    background-image: ${theme.colors.accent};
`
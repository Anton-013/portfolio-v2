import React from "react";
import styled from "styled-components";
import { Skill } from "../skill/Skill";

const skillData = [
    {
        skillName: "Html",
        skillProcent: "80%",
    },
    {
        skillName: "Css, Sass",
        skillProcent: "60%",
    },
    {
        skillName: "React",
        skillProcent: "50%",
    },
    {
        skillName: "Styled components",
        skillProcent: "75%",
    },
]

export const SectionProgress: React.FC = () => {
    return (
        <StyledSectionProgress>

            {skillData.map((s, index)=>{
                return <Skill 
                    skillName={s.skillName}
                    skillProcent={s.skillProcent}
                    key={index}/>
            })}

        </StyledSectionProgress>
    )
}

const StyledSectionProgress = styled.div`
    max-width: 900px;
    width: 100%;

    div {
        margin-bottom: 15px;
    }
`
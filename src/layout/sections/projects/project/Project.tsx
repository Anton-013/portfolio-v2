import React from "react";
import { Button } from "../../../../components/Button";
import { S } from "../Projects_Styles";
import { Fade } from "react-awesome-reveal";

type ProjectPropsType = {
    src: string
    projectTitle: string
    projectText: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <Fade delay={300} cascade>
                <S.Image src={props.src} alt="" />
                <S.Title>{props.projectTitle}</S.Title>
                <S.Text>{props.projectText}</S.Text>
                <Button>Look It Up</Button>
            </Fade>
        </S.Project>
    )
}


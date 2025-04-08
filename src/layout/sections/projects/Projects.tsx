import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectImg1 from "../../../assets/imeges/project.png";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";

const projectData = [
    {
        src: projectImg1,
        projectTitle: "PROJECT 1",
        projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        src: projectImg1,
        projectTitle: "PROJECT 2",
        projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        src: projectImg1,
        projectTitle: "PROJECT 3",
        projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        src: projectImg1,
        projectTitle: "PROJECT 4",
        projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify="space-around" wrap="wrap" rowGap={"60px"} columnGap={"20px"}>

                    {projectData.map((p, index) => {
                        return (
                            <Project
                                src={p.src} key={index}
                                projectTitle={p.projectTitle}
                                projectText={p.projectText} />
                        )
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    )
}


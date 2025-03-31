import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectImg1 from "../../../assets/imeges/project.png";
import { Container } from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify="space-around" wrap="wrap" rowGap={"60px"} columnGap={"20px"}>
                    <Project
                        src={projectImg1}
                        projectTitle={"PROJECT 1"}
                        projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                    <Project
                        src={projectImg1}
                        projectTitle={"PROJECT 2"}
                        projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                    <Project
                        src={projectImg1}
                        projectTitle={"PROJECT 3"}
                        projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                    <Project
                        src={projectImg1}
                        projectTitle={"PROJECT 4"}
                        projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #aa6464;
`
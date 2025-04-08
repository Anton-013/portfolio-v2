import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { TimelineHorizon } from "../../../components/timeline/TimelineHorizon";
import { TimelineVertical } from "../../../components/timeline/TimelineVertical";

export const timelineData = [
    {
        Title: "2017",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
    },
    {
        Title: "2019",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
    },
    {
        Title: "2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
    },
    {
        Title: "2023",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
    },
]

export const Experience: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyledExperience id={"about"}>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                {width < breakpoint ? <TimelineVertical /> : <TimelineHorizon />}
            </Container>
        </StyledExperience>
    )
}

const StyledExperience = styled.section`
    
`
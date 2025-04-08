import React from "react";
import photo from "../../../assets/imeges/photo.jpeg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>

            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} columnGap={"40px"} rowGap={"50px"} wrap={"wrap-reverse"}>

                    <S.BlockText>
                        <S.MainTitle>Lorem ipsum dolor amet</S.MainTitle>
                        <S.Text>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Typewriter
                                options={{
                                    strings: ["A Web Developer", "A Frontend Developer", "A Web Designer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                }}
                            />
                        </S.Text>
                        <Button>Let’s Begin</Button>
                    </S.BlockText>

                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.02}
                        gyroscope={true}
                    >
                        <S.PhotoBorder>
                            <S.Photo src={photo} alt="Photo" />
                        </S.PhotoBorder>
                    </Tilt>

                </FlexWrapper>
            </Container>

        </S.Main>
    )
}

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn: React.FC = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
                    <Icon iconId={"arrowGoTop"} height={"20"} width={"20"} viewBox={"0 0 24 24"} />
                </StyledGoTopBtn>
            )}
        </>
    )
}

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`
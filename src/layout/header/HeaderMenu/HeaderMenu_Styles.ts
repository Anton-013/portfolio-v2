import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"

// Menu

const Menu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

    li:hover {
        scale: 0.9;
    }
`

// DesktopMenu

const DesktopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
`

// MobileMenu

const MobileMenu = styled.nav`

`

const Popup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;    
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    `}

    li {
        margin-bottom: 20px;
    }

    &:ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    li:hover {
        scale: 0.9;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 70px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

export const S = {
    Menu,
    DesktopMenu,
    MobileMenu,
    Popup,
    BurgerButton,
}
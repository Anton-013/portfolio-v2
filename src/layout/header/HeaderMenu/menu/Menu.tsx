import React from "react";
import { S } from "../HeaderMenu_Styles";

const items = [
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Technologies",
        href: "technologies",
    },
    {
        title: "About me",
        href: "about",
    },
]

export const Menu: React.FC = () => {
    return (
        <S.Menu>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <S.NavLink 
                                activeClass="active"
                                to={item.href}
                                smooth={true}
                                spy={true}
                                >{item.title}</S.NavLink>
                        </li>
                    )
                })}
            </ul>
        </S.Menu>
    )
}


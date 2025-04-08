import React from "react";
import { Icon } from "../icon/Icon";
import { S } from "../../layout/header/HeaderMenu/HeaderMenu_Styles";

export const Logo: React.FC = () => {
    return (
        <S.NavLink activeClass="active" to="home" smooth={true}>
            <Icon iconId={"logo"}/>
        </S.NavLink>
    )
}
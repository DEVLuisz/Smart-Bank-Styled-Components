import React from "react";
import ThemeOn from "../assets/images/themeOn.svg";
import ThemeOff from "../assets/images/themeOff.svg";
import { Icon } from "./Icon";

const Claro = <Icon src={ThemeOn} alt="Tema Claro" />;
const Escuro = <Icon src={ThemeOff} alt="Tema Escuro" />;

export default (({tema}) => (tema ? Escuro : Claro))
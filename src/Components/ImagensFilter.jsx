import React from "react";
import alimentacao from "../assets/images/alimentacao.svg"
import outros from "../assets/images/outros.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/alimentacao.svg"
import { IconTheme } from "./Icon";

export default (type) => {
  const Images = {
    Restaurante: <IconTheme src={alimentacao} alt="Restaurante"/>,
    Utilidades: <IconTheme src={utilidades} alt="Utilidades"/>,
    Saude: <IconTheme src={saude} alt="Saude"/>,
    Transporte: <IconTheme src={transporte} alt="Transporte"/>,
    default: <IconTheme src={outros} alt="default/Outros"/>,
  };

  return Images[type] || Images.default;
}
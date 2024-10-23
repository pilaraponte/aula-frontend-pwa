import React, { useState } from "react";

const MostrarMultiplicacao = ({numeroUm, numeroDois}) => {

    const num1 = isNaN(Number(numeroUm)) ? 0 : Number(numeroUm);
    const num2 = isNaN(Number(numeroDois)) ? 0 : Number(numeroDois);

    const resultado = num1 * num2;

    return (
       
            <div>
             A soma de {numeroUm} * {numeroDois} é {resultado};
            </div>

        
)}

export default MostrarMultiplicacao;
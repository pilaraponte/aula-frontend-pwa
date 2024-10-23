import React, { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";

const BotaoIncrementarDecrementar = () => {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  const decrementar = () => {
    setNumero(numero - 1);
  };

  return (
    <div>
      <Principal titulo="Botão Incrementador e Decrementador" voltarPara="/">
        <BotaoCustomizado aoClicar={decrementar} cor="primaria">
          Menos Um_
        </BotaoCustomizado>
        <h1>O número é: {numero}</h1>
        <BotaoCustomizado aoClicar={incrementar} cor="secundaria">
          Mais Um
        </BotaoCustomizado>
      </Principal>
    </div>
  );
};

export default BotaoIncrementarDecrementar;

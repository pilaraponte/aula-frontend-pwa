import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";

const BotaoContador = () => {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  return (
    <Principal titulo={"Botão Contador"} voltarPara={"/"}>
      <div>
      <BotaoCustomizado aoClicar={incrementar} cor={"primaria"}>
       Contador é: {numero}
      </BotaoCustomizado>
      </div>
    </Principal>
  );
};

export default BotaoContador;

import Principal from "../../comum/componentes/Principal/Principal";
import MostrarSoma from "./MostrarSoma/MostrarSoma";
import MostrarSubtracao from "./MostrarSubtracao/MostrarSubtracao";
import MostrarDivisao from "./MostrarDivisao/MostrarDivisao";
import MostrarMultiplicacao from "./MostrarMultiplicacao/MostrarMultiplicacao";
import MostrarMeuNomeCompleto from "./MostrarMeuNomeCompleto/MostrarMeuNomeCompleto";
import MostrarProduto from "./MostrarProduto/MostrarProduto";
import MostrarNumerosPares from "./MostrarNumerosPares/MostrarNumerosPares";


const PaginaDesafioComponentes = () => {
 
  return (

    <Principal titulo="Desafio de Componentes" voltarPara="/">

      <h3>
        Cria um componente chamado MostrarSoma que deve receber dois números como propriedade e mostrar a soma dos números conforme exemplo: A soma de 11 + 12 é: 23
      </h3>
      <MostrarSoma numeroUm="11" numeroDois="12" />
      <hr />

      <h3>
        Cria um componente chamado MostrarSubtracao que deve receber dois números como propriedade e mostrar a subtração dos números conforme exemplo: A subtração de 10 - 2 é: 8
      </h3>
      <MostrarSubtracao numeroUm="10" numeroDois="2" />
     <hr/> 

      <h3>
        Cria um componente chamado MostrarDivisao que deve receber dois números como propriedade e mostrar a divisão dos números conforme exemplo: A divisão de 50 / 10 é: 5
      </h3>
      <MostrarDivisao numeroUm="50" numeroDois="10" />
     <hr/> 
     
      <h3>
      Cria um componente chamado MostrarMultiplicacao que deve receber dois números como propriedade e mostrar a multiplicação dos números conforme exemplo: A multiplicação de 10 * 10 é: 100
      </h3>
      <MostrarMultiplicacao numeroUm="10" numeroDois="10" />
     <hr/> 

      <h3>
      Cria um componente chamado MostrarMeuNomeCompleto que deve receber como propriedade o seu nome, seu sobrenome e mostrar conforme o exemplo: O meu nome completo é: Thiago Anastacio Cordeiro

      </h3>
      <MostrarMeuNomeCompleto nome="Maria Pilar" sobrenome="Aponte" />
     <hr/> 
      
      <h3>
      Cria um componente chamado MostrarProduto que deve receber como propriedade o produto:

      </h3>
      <MostrarProduto />
      <hr/> 

      <h3>
      Cria um componente chamado MostrarProduto que deve receber como propriedade o produto:

      </h3>
      <MostrarNumerosPares />
      <hr/>         

    </Principal>
  );
};

export default PaginaDesafioComponentes;

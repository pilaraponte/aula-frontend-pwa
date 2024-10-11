<<<<<<< HEAD
import './Rodape.css';

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape_root">
      <h6>
        Copyright © {anoAtual} - Todos os direitos
        reservados.
      </h6>
    </footer>
  );
=======
    import './Rodape.css'

function Rodape(){

    const anoAtual = new Date().getFullYear()

    return <footer className="rodape_root">Copyright © {anoAtual} - Todos os direitos reservados - Pilar Aponte</footer>
>>>>>>> bd0b5718edf035bf3a8cdcedde8a2d226201852e
}

export default Rodape;
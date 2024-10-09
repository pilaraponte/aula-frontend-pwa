import Avatar from '../Avatar/Avatar';
import './Cabecalho.css';

function Cabecalho() {
    return (
    <header className="cabecalho_root">
    <img src="/public/vite.svg" height={40} />
    <Avatar nome='Pilar Aponte'/>
    </header>
    );
}

export default Cabecalho;
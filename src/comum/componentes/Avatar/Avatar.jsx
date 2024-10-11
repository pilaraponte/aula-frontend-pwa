<<<<<<< HEAD
import './Avatar.css';

const Avatar = (props) => {
  const [primeiroNome, segundoNome] = props.nome.split(' ');

  return (
    <div className="avatar_root">
      {primeiroNome[0] + segundoNome[0]}
    </div>
  );
};

export default Avatar;
=======

import "./Avatar.css";

const Avatar = (props) =>{

    return(

        <div className="avatar_root">{props.nome}</div>
    );
};

export default Avatar;
>>>>>>> bd0b5718edf035bf3a8cdcedde8a2d226201852e

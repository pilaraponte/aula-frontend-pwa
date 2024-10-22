import './MostrarNumerosPares.css';

const MostrarNumerosPares = (numero) => {

    const numeros = [1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48];

    return (
        <div className='MostrarNumerosPares'>
            Os números pares são:
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero}</li> 
                ))}
            </ul>
        </div>
    );
};


export default MostrarNumerosPares;


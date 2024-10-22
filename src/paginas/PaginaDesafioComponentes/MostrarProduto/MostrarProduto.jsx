import './MostrarProduto.css';

const MostrarProduto = () => {
    const produto = {
        nome: 'TV Samsung 55"',
        preco: 2999.90,
        estoque: 345,
    };

    return (
        <div className="produtos">
            <ul>
                <li><strong>Nome:</strong> {produto.nome}</li>
                <li><strong>Preço:</strong> R${produto.preco}</li>
                <li><strong>Estoque:</strong> {produto.estoque}</li>
            </ul>
        </div>
    );
};

export default MostrarProduto;

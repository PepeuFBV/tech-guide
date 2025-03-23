// versão básica
function SaudacaoSeletiva = ({ nome }) => {
    if (nome === 'Mundo') {
        return <h1>Olá, {nome}!</h1>;
    } else {
        return <h1>Não gosto de você, {nome}!</h1>;
    }
};

// versão avançada
function SaudacaoSeletiva = ({ nome }) => {
    return {
        nome === 'Mundo'
        ? <h1>Olá, {nome}!</h1>
        : <h1>Não gosto de você, {nome}!</h1>
};
};

// O uso é o mesmo independente da versão!
<Saudacao nome="Mundo" />;
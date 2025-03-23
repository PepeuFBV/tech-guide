// isso é outra forma de declarar o tipo das props,
// sem necessariamente criar uma interface
const Caixa = ({ children }: { children: React.ReactNode }) => {
    return <div className="p-4 border border-gray-500">{children}</div>;
};

// Uso:
<Caixa>
    <p>Texto dentro da caixa!</p>
    <button>Botão aqui!</button>
</Caixa>;
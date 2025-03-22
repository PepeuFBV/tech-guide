import { useState, useEffect } from "react";

const ContadorColorido = () => {
    const [contador, setContador] = useState(0);
    const [cor, setCor] = useState("black");

    useEffect(() => {
        const cores = ["red", "green", "blue", "purple", "orange"];
        setCor(cores[Math.floor(Math.random() * cores.length)]);
    }, [contador]);

    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)} style={{ background: cor }}>
                Aumentar
            </button>
        </div>
    );
};
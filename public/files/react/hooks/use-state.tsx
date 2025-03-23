import { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState<number>(0)

    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        </div>
    )
}
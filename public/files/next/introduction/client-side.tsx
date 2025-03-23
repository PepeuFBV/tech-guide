'use client'

import React, { useState } from 'react'

export default function ClientSide() {
    const [contador, setContador] = useState<number>(0) // usar algum hook do React requer que o seu componente ou página seja client side

    return (
        <div>
            <p>O contador foi pressionado {contador} vezes!</p>
            <button onClick={() => setContador(contador + 1)}>Pressione-me!</button>
        </div>
    )
}
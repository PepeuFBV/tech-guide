// Esse código vai dar erro, pois estamos retornando mais de um elemento
function Button() {
    return (
        <h1>Button</h1>
        <button>Click me</button>
    )
}

// Além de circular com uma div, podemos utilizar um fragment.
// Esse código não vai dar erro, pois tecnicamente 
// estamos retornando apenas um elemento

function Button() {
    return (
        <>
            <h1>Button</h1>
            <button>Click me</button>
        </>
    )
}
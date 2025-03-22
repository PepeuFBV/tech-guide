function Button() {
    return (
        <div className="button-header">
            <h1>Button</h1>
            <button>Click me</button>
        </div>
    )
}

function App() {
    const buttons = Array(1000).fill(0)
    return (
        <div>
            {buttons.map((_, index) => <Button key={index} />)}
        </div>
    )
}
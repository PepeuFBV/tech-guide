function Button() {
    return (
        <div className="button-header">
            <h1>Button</h1>
            <button>Click me</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <Button />
            <Button />
            <Button />
        </div>
    )
}
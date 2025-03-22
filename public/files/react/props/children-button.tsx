interface ButtonProps {
    children: React.ReactNode;
    isPrimary?: boolean;
    onClick: () => void;
}

function Button({ children, isPrimary, onClick }: ButtonProps) => {
    const style = isPrimary ? 'bg-green-500' : 'bg-gray-500';
    return <button className={style} onClick={onClick}>{children}</button>;
}

// Uso:
<Button isPrimary onClick={() => alert('Clicou!')}>
    Clique aqui!
</Button>;
interface ButtonProps {
    isPrimary: boolean;
    text: string;
    onClick: () => void;
}

function Button({ isPrimary, text, onClick }: ButtonProps) => {
    const style = isPrimary ? 'bg-green-500' : 'bg-gray-500';
    return <button className={style} onClick={onClick}>{text}</button>;
}

// Uso:
<Button text="Clique aqui!" isPrimary onClick={() => alert('Clicou!')} />;
enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
}

interface ButtonProps {
    label: string
    variant?: ButtonType
    onclick?: () => void
    color: string
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
}

const sizeClasses = {
    sm: 'py-2 px-4 mx-4 text-sm',
    md: 'py-3 px-6 mx-4 text-base',
    lg: 'py-4 px-8 mx-4 text-lg',
};

const variantClasses = {
    [ButtonType.Primary]: 'bg-blue-500 text-white hover:bg-blue-700',
    [ButtonType.Secondary]: 'bg-gray-500 text-white hover:bg-gray-700',
    [ButtonType.Tertiary]: 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-100',
};

function Button(props: ButtonProps) {
    const { label, variant = ButtonType.Primary, onclick, color, size = 'md', disabled = false } = props;

    const buttonClasses = `${variantClasses[variant]} ${sizeClasses[size]} ${color} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
        <button onClick={onclick} disabled={disabled} className={buttonClasses}>{label}</button>
    );
}

export default Button;
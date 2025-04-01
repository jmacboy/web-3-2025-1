type ButtonProps = {
    title: string;
    onClick?: () => void;
}
export const Button = ({ title, onClick }: ButtonProps) => {
    return (
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={onClick}>{title}</button>
    );
}
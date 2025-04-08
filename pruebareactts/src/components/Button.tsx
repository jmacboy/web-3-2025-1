import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    variant?: "primary" | "success" | "danger";
    type?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>["type"];
}
export const Button = ({ title, onClick, type, variant = "primary" }: ButtonProps) => {
    return (
        <button type={type}
            className={
                `text-white py-1 px-4 rounded cursor-pointer ${variant === "primary" ? "bg-blue-500 hover:bg-blue-600" : variant === "success" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`
            } onClick={onClick}>{title}</button>
    );
}
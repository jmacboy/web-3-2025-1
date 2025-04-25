type Props = {
    children: React.ReactNode;
}
export const FormField = ({ children }: Props) => {
    return (
        <div className="my-2 formfield">
            {children}
        </div>
    );
}
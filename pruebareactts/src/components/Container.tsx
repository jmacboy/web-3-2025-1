
type Props = {
    children: React.ReactNode
}
export const Container = ({ children }: Props) => {
    return (
        <div className="mx-5 my-5">
            {children}
        </div>
    );
}
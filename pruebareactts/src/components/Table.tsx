type TableProps = {
    children: React.ReactNode;
}
export const Table = ({ children }: TableProps) => {
    return (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden my-2 border-collapse">
            {children}
        </table>
    );
}
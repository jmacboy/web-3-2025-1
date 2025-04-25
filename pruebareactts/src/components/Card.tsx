type CardProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ title, children, className }: CardProps) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-sm bg-white ${className}`}>
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <div className="text-gray-600 mt-2">{children}</div>
            </div>
        </div>
    );
}
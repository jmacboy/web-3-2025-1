type CardProps = {
    title: string;
    children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
    return (
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <div className="text-gray-600 mt-2">{children}</div>
            </div>
        </div>
    );
}
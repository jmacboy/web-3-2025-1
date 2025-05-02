type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactNode
}
export const Select = (props: Props) => {
    return (
        <select
            {...props}
            className="rounded-xs w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            {props.children}
        </select>
    );
}
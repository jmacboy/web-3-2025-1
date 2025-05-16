type Props = React.InputHTMLAttributes<HTMLInputElement> & {

}
export const FileInput = (props: Props) => {
    return (
        <div className="my-4">
            <label className="px-4 py-2 bg-white text-black border border-black rounded-lg cursor-pointer hover:bg-black hover:text-white transition duration-300">
                Seleccionar archivo
                <input
                    type="file"
                    className="hidden"
                    {...props}
                />
            </label>
        </div>
    );
}
type Props = {
    itemCount: number;
    page: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}
export const Pagination = ({ itemCount, page, pageSize, onPageChange }: Props) => {
    const pagesCount = Math.ceil(itemCount / pageSize);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination flex justify-start">
                <li className="page-item flex">
                    <button className="py-1 mx-2 px-4 border-1 rounded border-blue-500 page-link" aria-label="Start" onClick={() => { onPageChange(1) }}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Start</span>
                    </button>
                </li>
                {Array.from({ length: pagesCount }, (_, index) => (
                    <li key={index} className={`flex page-item ${index + 1 === page ? 'bg-blue-500 text-white' : ''}`}>
                        <button className="py-1 mx-2 px-4 border-1 rounded border-blue-500 page-link" onClick={() => { onPageChange(index + 1) }}>
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button className="flex mx-2 py-1 px-4 border-1 rounded border-blue-500 page-link" onClick={() => {
                        onPageChange(pagesCount)
                    }} aria-label="Last">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Last</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
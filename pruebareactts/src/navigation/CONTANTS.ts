export const URLS = {
    HOME: '/',
    MATERIAS: {
        CREATE: '/materias/create',
        EDIT: "/materias/:id",
        UPDATE: (id: string) => {
            return `/materias/${id}`
        }
    }
}
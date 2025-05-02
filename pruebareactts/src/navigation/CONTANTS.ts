export const URLS = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    MATERIAS: {
        CREATE: '/materias/create',
        EDIT: "/materias/:id",
        UPDATE: (id: string) => {
            return `/materias/${id}`
        }
    },
    ALUMNOS: {
        LIST: '/alumnos',
        CREATE: '/alumnos/create',
        EDIT: "/alumnos/:id",
        UPDATE: (id: string) => {
            return `/alumnos/${id}`
        }
    },
    INSCRIPCIONES: {
        CREATE: '/inscripciones',
    }
}
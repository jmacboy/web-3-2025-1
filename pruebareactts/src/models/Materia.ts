export interface Materia {
    id: string;
    nombre: string;
    codigo: string;
    creditos: number;
}
export interface MateriaPage {
    count: number;
    next: string;
    previous: null;
    results: Materia[];
}
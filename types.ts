
export type Page = 'inicio' | 'servicios' | 'centro' | 'contacto';
export type Theme = 'light' | 'dark';

export interface NavLink {
    name: string;
    page: Page;
}
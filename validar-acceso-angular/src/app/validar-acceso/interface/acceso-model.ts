export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  fechaCreacion?: string;
  fechaModificacion?: string;
  creadoPor?: string;
  modificadoPor?: string;
  eliminado?: boolean;
  rol?: string;
}

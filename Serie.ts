export class Serie {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    vinculo: string;
    imagen: string;
    

    constructor(id: number, nombre: string, canal: string, temporadas:number, descripcion: string, vinculo: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.vinculo = vinculo;
        this.imagen = imagen;
        
    }
  }
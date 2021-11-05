// Mateo Rodriguez 192391  & Alejandro Vazquez 283635

class Sistema {
    constructor() {
        this.listaMarcas = [];
        this.listaCelulares = [];
    }

    agregarMarca(marca) {

        this.listaMarcas.push(marca);
    }

    agregarCelular(Celular) {

        this.listaCelulares.push(Celular);
    }

}
class Marca {

    constructor(nombre, comentarios) {
        this.nombre = nombre;
        this.comentarios = comentarios;
    }
    toString() {

        return this.nombre + " " + this.comentarios;

    }
}

class Celular {
    constructor(Marca, modelo, descripcion, precio, pantalla, memoria, sistemaOperativo) {
        this.marca = marca;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.pantalla = pantalla;
        this.memoria = memoria;
        this.sistemaOperativo = sistemaOperativo;
    }

    toString() {

        return this.marca + this.modelo + this.descripcion + this.precio + this.pantalla + this.memoria + this.sistemaOperativo;
    }
}
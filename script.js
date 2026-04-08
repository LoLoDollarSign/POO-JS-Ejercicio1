// 1. Definición de la clase Persona usando la palabra clave 'class' [1]
class Persona {
    // El constructor inicializa las propiedades nombre, edad y ciudad [2, 3]
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre; // 'this' se refiere al objeto actual que se está creando [3]
        this.edad = edad;
        this.ciudad = ciudad;
    }

    // Método presentarse() que devuelve un string con la información [1, 2]
    presentarse() {
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
    }
}

// 2. Creación de 3 instancias diferentes usando la palabra clave 'new' [4, 5]
const persona1 = new Persona("Ana", 28, "Mendoza");
const persona2 = new Persona("Luis", 35, "San Rafael");
const persona3 = new Persona("María", 22, "Godoy Cruz");

// 3. Llamada al método presentarse() para cada objeto [6, 7]
console.log(persona1.presentarse());
console.log(persona2.presentarse());
console.log(persona3.presentarse());
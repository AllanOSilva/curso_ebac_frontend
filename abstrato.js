class Vehicle {
    constructor(fabricante, modelo, ano) {
      this.fabricante = fabricante;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    getDetails() {
      return `${this.ano} ${this.fabricante} ${this.modelo}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(fabricante, modelo, ano, portas) {
      super(fabricante, modelo, ano);
      this.portas = portas;
    }
  
    getDetails() {
      return `${super.getDetails()} - ${this.portas} portas`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(fabricante, modelo, ano, hasSidecar) {
      super(fabricante, modelo, ano);
      this.hasSidecar = hasSidecar;
    }
  
    getDetails() {
      return `${super.getDetails()} - Sidecar: ${this.hasSidecar ? 'Sim' : 'Não'}`;
    }
  }
  
  const App = () => {
    const car1 = new Car('Toyota', 'Corolla', 2020, 4);
    const car2 = new Car('Honda', 'Civic', 2019, 2);
    const motorcycle1 = new Motorcycle('Harley-Davidson', 'Street 750', 2021, true);
  
    
  }
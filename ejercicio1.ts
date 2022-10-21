
//Mas simple de lo que estaba no se que se le podia hacer.
//Cree una clase Animal para englobar a las dos especies, otra no se me ocurrio.

class Animal {
  protected name: string;
}

class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }

  public makeSound(): void {
    console.log('wuff wuff\n');
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }

  public makeSound(): void {
    console.log('meow meow\n');
  }
}

let minino: Cat = new Cat('Pocky');
minino.makeSound(); // -> meow meow

let firulais: Dog = new Dog('Pocky');
firulais.makeSound(); // -> wuff wuff
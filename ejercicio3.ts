class Ferreteria {
protected name :string;
protected address :string;
protected phone :number;

public constructor(name:string, address:string, phone:number ){
    this.name = name;
    this.address = address;
    this.phone = phone;
}
public getName():string{
    return this.name;
}
public getAddress():string{
    return this.address;
}
public getPhone():number{
    return this.phone;
}
}

class Empleado extends Ferreteria{
    private firstName :string;
    private age :number;
    private salary :number;

    public constructor(firstName:string, age:number, salary:number, name:string, address:string, phone:number ){
        super(name, address, phone);
        this.firstName = firstName;
        this.age = age;
        this.salary = salary;
}
public getFirstName():string{
    return this.firstName;
}
public getAge():number{
    return this.age;
}
public getSalary():number{
    return this.salary;
}
}


let ferreteria : Ferreteria = new Ferreteria("El Indio", "Santagada y 9 de Julio", 2921454545);
let empleado : Empleado = new Empleado("Juan", 34, 70500, "El Indio", "Santagada y 9 de Julio", 2921454545);

console.log(ferreteria);
console.log(empleado);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - ")
console.log("Direccion: ",ferreteria.getAddress());
console.log("Nombre de la ferreteria: ",ferreteria.getName());
console.log("Telefono: ",ferreteria.getPhone());
console.log("Nombre del empleado: ",empleado.getFirstName());
console.log("Edad: ",empleado.getAge());
console.log("Salario: ",empleado.getSalary());


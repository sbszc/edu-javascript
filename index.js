class Person{
    constructor(id){
        this._id = id
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }
}

class Employee extends Person{
    constructor(id, salary){
        super(id)
        this._salary = salary
    }

    get salary(){
        return this._salary
    }

    set salary(salary){
        this._salary = salary
    }
}

const hello = () => {
    const empl = new Employee(1, 1000);
    document.writeln(JSON.stringify(empl));
    empl.id = 2;
    empl.salary = 2000;
    document.writeln(`id: ${empl.id}`);
    document.writeln(`salary: ${empl.salary}`);
    document.writeln(JSON.stringify(empl));
}

document.write('<button id="demo">Write object</button>');
document.getElementById("demo").addEventListener("click", hello);
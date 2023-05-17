// super class
class Animal { 
    name: string;

    constructor(name: string){
        this.name = name;
    }

    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}
// sub class
class Dog extends Animal{ 
    getName(): string{
        return `Dog name is ${this.name}.`
    }
}

let dog = new Dog('Mike')
console.log(dog.getName());


function sleep(animal: Animal): void {
    console.log(`${animal.name} goes to sleep`);
}
sleep(dog);

class Snake extends Animal {
    leg: number = 0;

    constructor(name: string){
        super(name);
    }

    move(distanceInMeters = 5) {
        super.move(distanceInMeters)
    }

    poison(){
        console.log('shoot poison');
    }
}

class Horse extends Animal {
    leg: number = 4;
    run() {
        console.log("start running");
    }
}

let horse = new Horse('horse');
horse.run();

let snake: Animal = new Snake('snake');
// snake.poison(); // 使えない


// access modifiers
// Default : public
// static, readonly

class Dog2 {
    constructor(name: string, readonly age: number){}
}

class Employee {
    private readonly fullNameMaxLength = 10;
    private name = '';

    
    get fullName() : string { 
        return this.name
    }

    set fullName(newName : string) { // set の　名前はプロパティ名と一致しないように、無限loopに落ち込む

        if(newName && newName.length > this.fullNameMaxLength){
            throw new Error('名前は1～10字の間で書いてください。')
        }

        this.name = newName;
    }
    
}

let employee: Employee = new Employee();
employee.fullName = 'Adam Smith'
if(employee.fullName){
    console.log(employee.fullName)
}







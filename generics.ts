interface man {
    name,
    age
}
interface women {
    height,
    weight
}
class personT<T> implements man, women {// Class is the generic of type T
    name = 'Sachin';
    age = 40;
    height = '5 feet';
    weight = '50 kg';

    humanDetails(){
       return `He is ${this.name} and ${this.age}, she weighs ${this.weight} and height ${this.height}`;
    }

}

var Person = new personT();

document.write(Person.humanDetails());
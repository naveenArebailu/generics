var personT = (function () {
    function personT() {
        this.name = 'Sachin';
        this.age = 40;
        this.height = '5 feet';
        this.weight = '50 kg';
    }
    personT.prototype.humanDetails = function () {
        return "He is " + this.name + " and " + this.age + ", she weighs " + this.weight + " and height " + this.height;
    };
    return personT;
}());
var Person = new personT();
document.write(Person.humanDetails());

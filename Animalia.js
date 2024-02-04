// constructor function for the Kingdom Animalia
function KingdomAnimalia () {
    this.name = "Kingdom Animalia";
    this.type = "Animalia";
    this.characteristics = [];
}


// prototype method to add characteristics to an animal
KingdomAnimalia.prototype.addcharacteristics = function(characteristics) {
    this.characteristics.push(characteristics);
};


// constructor function for then Phylum Chordata
function PhylumChordata () {
    this.name = "Phylum Chordata";
    this.type = "Chordata";
    this.characteristics = [];
}


// inherit from Animalia
PhylumChordata.prototype = Object.create(PhylumChordata.prototype);
PhylumChordata,prototype.constructor = PhylumChordata;


// constructor function for the Class Mammalia
function ClassMammalia () {
    PhylumChordata.call(this, name, type, characteristics);
    this.liveBirth = true;
    this.hasFur = true;
    this.hasLegs = true;
    this.hasTail = true; 
}


// inherit from Chordata
ClassMammalia.prototype = Object.create(ClassMammalia.prototype);
ClassMammalia,prototype.constructor = ClassMammalia;


// instances of animals
var horse = new ClassMammalia("Horse");
horse.addcharacteristics("Herbivorous");
horse.addcharacteristics("Mane");
horse.addcharacteristics("Fur");

var dog = new ClassMammalia("Dog");
dog.addcharacterisitcs("Omnivorous");
dog.addcharacteriswtics("Mane");
dog.addcharacteristics("Fur");

var fox = new ClassMammalia("Fox");
fox.addcharacterisitcs("Omnivorous");
fox.addcharacteriswtics("Mane");
fox.addcharacteristics("Fur");

var goat = new ClassMammalia("Goat");
goat.addcharacterisitcs("Herbivorous");
goat.addcharacteriswtics("Mane");
goat.addcharacteristics("Fur");

// displaying information
console.log("Animal Kingdom");
console.log("--------------");
console.log("Horse:", horse);
console.log("Dog:", dog);
console.log("Fox:", fox);
console.log("Goat:", goat);
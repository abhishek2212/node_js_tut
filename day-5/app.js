var events=require('events');
var util=require('util');

/*
var myEmitter=new events.EventEmitter();
myEmitter.on('someEvent',function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent','Hi this is abhishek tiwari.');
*/
var Person=function(name){
    this.name=name;
};

util.inherits(Person,events.EventEmitter);
var james=new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var People=[james,mary,ryu];

People.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+' said: '+mssg);
    });
});

james.emit('speak','hey dudes');
ryu.emit('speak', 'I want a curry');
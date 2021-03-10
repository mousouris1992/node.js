

var user = {
    name: 'Andrew',
    sayHi: () => { console.log(`Hi. My name is: ${this.name}`);},
    sayHi2(){ 
        console.log(arguments);
        console.log(`Hi. My name is: ${this.name}`);
    }
};


user.sayHi2(1,2,3);
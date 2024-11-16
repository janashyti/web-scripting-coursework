let obj1 = {
    x: 1,
    text: "jana",
    arr: [1,2,3],
    obj: {z: 1, o: "hola"}
}

let obj2 = Object.create(Object.prototype)
obj2.j = 1;
obj2.i = "string";
for ( let prop in obj2) {
    console.log(prop + ": " + obj2[prop])
}

let propNames = Object.getOwnPropertyNames(obj2)
console.log(propNames)

let obj2Prototype = Object.getPrototypeOf(obj2)
let propNames2 = Object.getOwnPropertyNames(obj2Prototype)
console.log(propNames2)

let obj3 = {
    name: "Jana",
    lastname: "Shyti",
    age: 19
}

let obj4 = Object.create(obj3)
    obj4.major = "CS";
    obj4.year = 2;


let obj5 = Object.create(obj4)
    obj5.season = "winter";
    obj5.number = 31;


    for (let prop in obj5) {
        console.log(prop + ": " + obj5[prop])
    }

    console.log("name" in obj5)
    console.log("lastname" in obj5)
    console.log("age" in obj5)
    console.log("major" in obj5)
    console.log("year" in obj5)

    console.log("Are Inherited Properties Own Properties?")
    console.log(obj5.hasOwnProperty("major"))
    console.log(obj5.hasOwnProperty("year"))
    console.log(obj5.hasOwnProperty("name"))
    console.log(obj5.hasOwnProperty("lastname"))
    console.log(obj5.hasOwnProperty("age"))

    console.log("Are The Inherited Properties Enumerable?")
    console.log(obj5.propertyIsEnumerable("major"))
    console.log(obj5.propertyIsEnumerable("year"))
    console.log(obj5.propertyIsEnumerable("name"))
    console.log(obj5.propertyIsEnumerable("lastname"))
    console.log(obj5.propertyIsEnumerable("age"))

    console.log(Object.keys(obj5))

    let obj9 = {x:2, y: 3}
    let obj10 = {x: 1, o: 4}

    //COPYING WHITH OVERRIDING
   /* for(let key of Object.keys(obj9)){
        obj10[key] = obj9[key]
    }
    console.log(obj10)

  

   function addPropertiesWithoutOverwritting(first, second) {
    for (var key2 in second) {
       if (second.hasOwnProperty(key2) || !first.hasOwnProperty(key2)) {
          first[key2] = second[key2];
       }
    }
    return first;
 }
 console.log(addPropertiesWithoutOverwritting(obj10, obj9))
 console.log(Object.assign(obj10, obj9))*/


 for (var keys in obj9) {
    obj10.hasOwnProperty(keys) || (obj10[keys] = obj9[keys]);
  };
  console.log(obj10)

  Object.keys(obj9).forEach(key => {
    if (!obj10.hasOwnProperty(key)) {
      obj10[key] = obj9[key];
    }
  });
  console.log(obj10)

 let group1 = {
    month: "December",
    number: 12
 }

 let group2 = Object.create(group1)
 group2.month = "November";
 group2.number = 11;

 let s = JSON.stringify(group2)
 console.log(s)


 let group3 = JSON.parse(JSON.stringify(group1))
 console.log(group3)


 let data = {
    name: "Oni",
    age: 10,
    toString: () => {
        return data.name + ", " + data.age
 }
}
 console.log(data.toString())

 let mayssa = "boring"
 let laura = "annoying"
 let friends = {laura, mayssa}
console.log(friends)

let friendship = {
    times: "fun",
    years: 4
}

let college = {...friends, ...friendship}
console.log(college)

let circle = {
    radius: 1,

    get circumference(){
        return this.radius * Math.PI * 2
    },

    set circumference(x){
        circumference = x * Math.PI * 2
    }

}

console.log(circle.radius)
console.log(circle.circumference)
circle.radius = 2
console.log(circle.circumference)
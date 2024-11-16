console.log("Jana Shyti")

console.log("\u{1F600}");

let schedule = {semester: "fall", classes: 6};
console.log(schedule);
schedule.workinghours = 10;
console.log(schedule);
schedule.jobs = {tutoring: 3, IT: 5, Academic_Coach: 2};
console.log(schedule); 

let numbers = [1, 2, 3, 4];
console.log(numbers);
numbers[4] = 5;
console.log(numbers.length);
console.log(numbers);
numbers[numbers[length - 1]] = 13;
console.log(numbers[length - 1]);

let points = [{x: 1, y: 1}, {x: 3, y: 3}];
console.log(points);

let digit = 2;
console.log("digit1: " + digit);
digit++;
console.log("digit2: " + digit);
digit *= 31;
console.log("digit3: " + digit);

let num1 = 7;
let num2 = 4;
let sum = num2 + num1;
console.log(sum);
num2 = 3;
console.log(sum);

let comp1 = num1 != num2;
console.log(comp1);
let comp2 = num1 !== num2;
console.log(comp2);
let try1 = (num1 > num2) && (num1 < 3);
console.log(try1);
let try2 = (num1 > num2) || (num1 < 3);
console.log(try2);

console.log("initial number: " + 34);
function minus3(x){
    return x - 3;
}
console.log ("result: " + minus3(34));

function divideby2(x){
 return x/2;
}
console.log("initial number: " + 34);
console.log("result: " + minus3(divideby2(34)))

let array = [];
array.push(1, 3, 5, 7, 9);
console.log("array: " + array);
array.reverse();
console.log("array: " + array);

points.dist = function() { 
    let p1 = this[0]; 
    let p2 = this[1]; 
    let a = p2.x-p1.x; 
    let b = p2.y-p1.y; 
    return Math.sqrt(a*a +b*b);
};
console.log("distance: " + points.dist());

function average(array){
    let sum = 0;
    for (let x of array){
        sum += x;
    }
    return sum/array.length;
}
console.log("The average: " + average(array));

class Point { 
    constructor(x, y) { 
    this.x = x; 
    this.y = y; 
    } 
    distance() { 
    return Math.sqrt( 
    this.x * this.x + 
    this.y * this.y 
    );
    }
   }
   
   let p = new Point(1, 1);
   console.log(p.distance());

   let a = 3;
   let b = 1;
   (a).toString();
   (b).toString();
console.log(a + b);

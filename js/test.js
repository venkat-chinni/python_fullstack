console.log("hello world")
let student_name = "Krishna"
console.log("Student name is:"+student_name)
let student_age = 21
let course_name = "python full stack"
console.log("Student age is:" +student_age,"Course_name is:"+course_name)
let fee = 100000
let discount = 15
let discounted_fee = fee - (fee * discount/100)
console.log("Discounted fee is:" + discounted_fee)

let age=18
if(age>=18){
    console.log("eligible for admission")
}
else{
    console.log("not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("iteration number: " + i)
}
const pi = 3.14
console.log("value of pi is: " + pi)
let student = {
    name: "Krishna",
    age: 21,
    course: "python full stack",
    fee: 10000
}
console.log("student details: ",student)
function greetStudent(name){
    console.log("hello " + name + ", welcome to NRIIT learning management system")
}
greetStudent(student_name)
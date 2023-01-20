let name1 = prompt("name")
let age1 = prompt("age")
let name2 =  prompt("name")
let age2 = prompt("age")

let user1 = {
    name: name1,
    age: age1
};
let user2 = {
    name: name2,
    age: age2
};
if( age1 > age2){
    console.log(name1 ,"katta" ,name2 ,"dan")
}else{console.log(name1 ,"kichik" ,name2 ,"dan")}
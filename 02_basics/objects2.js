//singleton
//const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = 1;
tinderUser.name = "ALen";
tinderUser.add = "Mumbai";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email:"krishna43kashyap@gmail.com",
    fullName:{
       userFullname:{
        firstName:"Alen",
        lastName:"R Kasyap"
       }
    }
}
//console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"E"};

//const obj3 = Object.assign({},obj1,obj2);//obje1 and obje2 will be inside{} and result will be for sure and object {} ye target hota h waki ke sare objects source hote h ismka mtlv hum for shure obkject hi return krenge

const obj3 = {...obj1,...obj2}

//console.log(obj3);


const user =[{id:1,email:"krishna43"},{id:2,email:"krishna43"},{id:3,email:"krishna43"}];

//console.log(user[2]);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    course:"Java",
    price:999,
    courseInstructor:"Hitesh"
};

const {courseInstructor,price} = course;
console.log(price);
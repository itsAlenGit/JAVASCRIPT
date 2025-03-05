//object and be define in two ways
//1.object literal
//2.construcotr(singleton) jb boj ko hum construtor se banate h to wo singleton obj banta h(apne tarah ka ek hio object hai)


//Object literal

const mySmbl = Symbol("key1");

const jsUser = {
    name:"Alen r Kasyap",
    Age:28,
    "Full name":"Laxmi narayan kashyap",
    [mySmbl]: "mySym1",//this is how you can acces a Symble
    Add:"Mumbai,Gaoregaon",
    Work:"Music composer and singer"
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["Full name"]);//this is the new way to access the element of an object.
console.log(jsUser[mySmbl]);

jsUser.name ="ALEN R KASYAP";
Object.freeze(jsUser);//agter freezing you cant not modifie object's elements;
jsUser.Work = "Music teacher";
console.log(jsUser);

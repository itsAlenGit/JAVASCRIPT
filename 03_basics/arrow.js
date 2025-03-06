const user = {
    user:"Hitesh",
    price:999,
    userDetails:function(){
        console.log(`${this.user}, welcome to the coder space`);
        console.log(this);//this current context(vlaues) ko deta h.
    }
}

// user.userDetails();
// user.user = "Alen";
// user.userDetails();
// console.log(this);// globel context ko reffer kta h yani ke node context. agr hum browers me this use krnge to ye Window object ko dega

// function chai(){
//     let name = "Hitesh"
//     console.log(this.name);//this is not working here it is giving output as undefined
// }
// chai();

const chai = () =>{
    let name = "Hitesh";
    console.log(this.name);// this is also giving undifined
}
//chai();

//======================================Arrow Functio======================================

// const addTwo = (num1,num2) =>{
//   return num1 + num2;
// }

//console.log(addTwo(5,8));

//now dusra tarifa arrow functio likhne ka jisme imlicitly retrun hoa yni ke hum man lete h ye return krega hi karega

//const addTwo = (num1,num2) => num1 +num2; // ye bydefault return krta h. "return" keayword likhne ki jarurt nhi h.

const addTwo = (num1,num2) => ({username:"Hitesh"});
console.log(addTwo(6,4));
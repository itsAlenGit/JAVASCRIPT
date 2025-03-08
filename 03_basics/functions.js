function sayMyName(){
    console.log("A");
    console.log("L");
    console.log("E");
    console.log("N");
    
}

console.log(sayMyName);

function calculateCartPrice(valu1,value2,...num){//rest operator(...) this combines all the values.

    return num;
}

// console.log(calculateCartPrice(200,233,344,566));

const user = {

    name:"Hitesh",
    price:199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.name} and its price ${anyObj.price}`);

}
handleObject(user);

const myArray = [200,300,400,500];

function returnSecondEle(getArray){

    return getArray[1];

}

//console.log(returnSecondEle(myArray));

console.log(returnSecondEle([1,2,3,4]));
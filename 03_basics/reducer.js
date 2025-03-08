// const arr1 = [1,2,3,4,5];

// const initialValue = 0 ;

// const result = arr1.reduce( (acc , currValue) =>
//      {   console.log(`acc ${acc} and currValue : ${currValue }`);
//          acc + currValue},initialValue);

// console.log(result);


const shoppingCart = [
    {
        itemName:"Js",
        price:2999
    },
    {
        itemName:"py",
        price:999
    },
    {
        itemName:"ruby",
        price:1999
    },
    {
        itemName:"c++",
        price:4999
    }
]

 const total = shoppingCart.reduce( (acc,item) => (acc+item.price),0);

 console.log("Final total is : ",total);
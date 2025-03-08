//Immedialty invoekd function expression
 (function chai(){
    // named iffe
    console.log(`DB connected!`);
 })(); // globle vaiable and globle polution ko hatane k liye iffe ka use krte hain and agr 2 baar iffe funciton likhna h to ; lagana padega tabhi next funciton excute hoga


// 2 iife likhne ho to semicolan ; lagana padega dono ke bich me

 ((name) =>{
    //simple iife
    console.log(`DB connected 2 ${name}`);
 } )('Alen')

 
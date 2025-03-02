"use strict";// this mean use all the older code as newwe version

//alert(3+3);//we are using node js not browser

console.log(typeof undefined);// would ne undefined;
console.log(typeof null);//object

//==================Data Types======================================================

/*
There are 2 types of datatype
1. Primitive datatype:-
    1.String
    2. Number
    3. Boolean (true / false)
    4. null (iska matlab hai empty or zero nahi hai)
    5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
    6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
    7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

2. Preference datatype (Non Primitive datatype)
    1. Array ( [ ] )
    2. Object ( { } )
    3. Function ( function( ){ } )
*/



//========================Stack and heap==============================================

// Stack(Primitive data ) Heap(Non- primitive 0r refferenced)
/*


Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/
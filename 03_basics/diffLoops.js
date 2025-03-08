// // const arr = ["js","ruby","py","java"];

// // //Higher order loops in array

// // // arr.forEach( (item)=>{
// // //     console.log(item);
// // // });

// // // function printMe(item){
// // //     console.log(item);
// // // }

// // // arr.forEach(printMe); // you onlyu need to pass refferenc rest of the work it will do it by your self

// // // arr.forEach( (item,index,arr)=>{
// // //       console.log(item,index,arr);
// // // })

// // // const myCoding = [{
// // //     langu:"JavaScript",
// // //     file:"JS"
// // // },{
// // //     langu:"C++",
// // //     file:"CPP"
// // // },{
// // //     langu:"Python",
// // //     file:"Py"
// // // }]

// // // myCoding.forEach( (items)=>{
// // //     console.log(items.langu,items.file);
// // // })

// //  const values = arr.forEach( (item)=>{
// //    console.log(item);
// //    return item
// // })

// // console.log(values);//forEach dont return any value


const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const numbers = myNums.filter( (num)=> { // when we use () so it it will return implicitly but when we uses {} we need to return explicitly
// //     return num > 4
// // });

// //console.log(numbers);

// const newNum =[];

// myNums.forEach( (num)=>{

//     if(num > 4){

//         newNum.push(num);
//     }

// })

// console.log(newNum);



const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
    pages: 281,
    ISBN: "978-0-06-112008-4"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
    pages: 328,
    ISBN: "978-0-452-28423-4"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishedYear: 1925,
    pages: 180,
    ISBN: "978-0-7432-7356-5"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: 1951,
    pages: 214,
    ISBN: "978-0-316-76948-0"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    pages: 279,
    ISBN: "978-0-19-953556-9"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937,
    pages: 310,
    ISBN: "978-0-618-00221-3"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publishedYear: 1997,
    pages: 309,
    ISBN: "978-0-590-35340-3"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophical Fiction",
    publishedYear: 1988,
    pages: 208,
    ISBN: "978-0-06-231500-7"
  }
];


const userBook = books.filter( (bk) => (bk.genre == 'Fiction')  )

//console.log(userBook);

//====================== map function ===================================

 //const newNums =myNums.map( (num) => num + 10);

 // chaninig....
 const newNums = myNums
                    .map( (num) => num * 20)
                    .map( (num) => num + 2)
                    .map( (num) => num + 100)
                    .filter( (num) => num > 200)
 console.log(newNums);



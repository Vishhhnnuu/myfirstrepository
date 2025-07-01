console.log("hello World");
function sayHello(){
    console.log("hello from sayhello function");
}
sayHello();
console.log("this is a simple javascript code");
console.log("one");
console.log("two");
setTimeout(()=>{
console.log("HelloWorld");
},5000 );
console.log("three");
console.log("four");




callback
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,hut){
    hut(a,b);
}
calculator(5,10,sum);

calculator(5,10,(a,b)=>{
console.log(a+b);
});

 console.log("one");
console.log("two");
setTimeout(()=>{
console.log("HelloWorld", 5000);
console.log("three");
console.log("four");




function getdata(dataid){
    setTimeout(()=>{
        console.log("fetching data for id:", dataid);
    },5000);
}

getdata(1);
getdata(2);
getdata(3);





function getdata(dataid,getnextdata){
    setTimeout(()=>{
         console.log("fetching data for id",dataid);
         if(getnextdata){
            getnextdata();
         }
      },2000);
        };    


getdata(1,()=>{
    console.log ("getting data 2.......")
    getdata(2,()=>{
          console.log("getting data 3...")
          getdata(3);
    })
});






const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve("data fetched successfully");
        } else {
            reject("error fetching data");
        }
    }, 2000);
});

mypromise
    .then((data) => {
        console.log("promise resolved with data:", data);
    })
    .catch((error) => {
        console.error("promise rejected with error:", error);
    });





 function getdata(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("fetching data for id",dataid);
            resolve("success");
        },2000);
        
    });
 }
 let result=getdata(123);
 result;
 getdata(101)
 .then(result=>{
    console.log("first fetch",result);
    return getdata(102);
 })
.then(result=>{
    console.log("second fetch",result);
    return getdata(103);
})
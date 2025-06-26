// DOM in  javascript
document.title="DOM in JavaScript";
document.getElementById("header").innerHTML="Hello World!";
document.getElementById("header").style.color="black";
document.body.style.backgroundColor ="skyblue";
document.getElementById("para").style.color="green";
document.getElementById("para").style.fontSize="30px";
document.getElementsByClassName("ET")[0].style.color="red";
document.getElementsByClassName("ET")[0].style.fontSize="30px";
let ele= document.querySelectorAll(".eb");
ele[0].style.color="red";
ele[0].style.fontSize="30px";
ele[1].style.color="green";
ele[1].style.fontSize="30px";
ele[2].style.color="grey";
ele[2].style.fontSize="30px";

function changeBackground( ){
    if (document.body.style.backgroundColor==="lightgreen") {
        document.body.style.backgroundColor="lightblue";
    }
    else if(document.body.style.backgroundColor==="lightblue") {
        document.body.style.backgroundColor="lightyellow";
    }
    else {
    document.body.style.backgroundColor="lightgreen";
    }
}
function changeText(){
    document.getElementById("clg").innerHTML="CMRCET";
    document.getElementById("clg").style.color="coral";
    document.getElementById("clg").style.fontSize="30px";
    document.getElementById("clg").style.backgroundColor="white";
    document.getElementById("clg").style.textAlign="center";
}
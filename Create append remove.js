let aish = document.createElement("p");
aish.textContent="I am Chitti";

aish.innerHTML = "Black Sword";
aish.style.color = "brown";
aish.style.fontFamily = "Arial";
aish.style.textAlign = "center"
aish.style.fontSize = "30px";
document.getElementById("vasi").appendChild(aish);

setTimeout(() => {
    let pro = document.getElementsByClassName("same")[2];
    if (pro) {
        pro.remove();
    }
},2000);
let newheading = document.createElement("h2");
newheading.innerHTML = "this is the new heading added by JS";
newheading.style.color = "purple";
newheading.style.fontSize = "25px";
document.body.appendChild(newheading);

setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "This Text is added  after 3 seconds";
    newText.style.color = "green";
    document.body.appendChild(newText);
},3000)
let mylist =document.createElement("ul");
for (let i = 0; i<=3 ; i++)
{
    let item = document.createElement("li");
    item.textContent = "Item " + i ;
    item.style.color = "blue";
    item.style.fontSize = "18px";
    mylist.appendChild(item);
}
document.body.appendChild(mylist);






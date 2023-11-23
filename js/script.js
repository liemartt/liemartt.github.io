if(localStorage.cartCounter!="undefined"&&localStorage.cartCounter!=undefined)
    document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);
else {
    localStorage.cartCounter = 0;
    document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);
}
if(localStorage.cart=="undefined"||localStorage.cart==undefined){
    localStorage.cart = "";
}


function truncate(str, maxlength){
    if (str.length<=maxlength){
        return str;
    }
    else{
        return str.substr(0, maxlength)+"...";
    }
}
function truncateStrings(){
    const els = document.getElementsByClassName("book-card-text");
    for(i = 0;i<els.length;i++){
        els.item(i).textContent = truncate(els.item(i).textContent, 30)
    }
}
truncateStrings();

function Accumulator(startingValue){
    this.value = startingValue;
    this.incrementValue = ()=>{
        this.value++;
        cartCounter.textContent = this.value;
    }
    this.read = ()=>{
        let numberOfBooks = prompt("Сколько книг вы хотите купить?");
        this.value+=Number(numberOfBooks);
        cartCounter.textContent = this.value;
    }
}
let accumulator = new Accumulator(0);

const addToCartButtons = document.getElementsByClassName("addToCart");
for(var i = 0;i<addToCartButtons.length;i++){
    addToCartButtons.item(i).onclick = ()=>{
        accumulator.read();
    };
}

function burgerMenu(){
    if(localStorage.cartCounter == "undefined"){
        localStorage.cartCounter = 0;
    }
    const button = document.querySelector("#menu-toggle");
    const label = document.querySelector("#menu-button");
    const firstLine = document.querySelector(".firstLine");
    const secondLine = document.querySelector(".secondLine");
    const thirdLine = document.querySelector(".thirdLine");
    var isOpen = false;
    button.onclick = ()=>{
        isOpen = !isOpen;
        if(isOpen){
            document.querySelector("#main").style.filter = "blur(10px)";
            firstLine.style.transform = "rotate(-45deg)";
            firstLine.style.top = "13px";
            firstLine.style.backgroundColor = "red";
            thirdLine.style.backgroundColor = "red";
            thirdLine.style.transform = "rotate(45deg)";
            secondLine.style.backgroundColor = "transparent";
            document.querySelector(".menu").style.opacity = 1;
            document.querySelector(".menu").style.transform = "translateY(0%)";
        }
        else{
            document.querySelector("#main").style.filter = "blur(0px)";
            firstLine.style.transform = "rotate(0deg)";
            firstLine.style.top = "0px";
            thirdLine.style.transform = "rotate(0deg)";
            secondLine.style.backgroundColor = "black";
            firstLine.style.backgroundColor = "black";
            thirdLine.style.backgroundColor = "black";
            document.querySelector(".menu").style.opacity = 0;
            document.querySelector(".menu").style.transform = "translateY(-1000%)";
        }
    }
}
burgerMenu();
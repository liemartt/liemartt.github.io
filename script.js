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
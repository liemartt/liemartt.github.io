
var cart = [];
function deleteBook(book){
    let section = document.querySelector(".books");
    cart.forEach(x=>console.log(x.name))
    let index = cart.findIndex(x=>x.name==book.name);
    cart.splice(index, 1);
    localStorage.cart = cart.map(x=>JSON.stringify(x)).join(";");

    localStorage.cartCounter = Number(localStorage.cartCounter)-1;
    document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);
    section.innerHTML = "";
    loadCartPage();
}
function addBook(book){
    let section = document.querySelector(".books");
    localStorage.cart = localStorage.cart+";"+JSON.stringify(book)+";";
    console.log(localStorage.cart)
    localStorage.cartCounter = Number(localStorage.cartCounter)+1;
    document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);

    section.innerHTML = "";
    loadCartPage();
}


function loadCartPage(){
    // localStorage.cart = "";
    // localStorage.cartCounter = 0;
    let localStorageBooks = localStorage.cart.split(";");
    cart = [];
    console.log(localStorageBooks)
    localStorageBooks.forEach(x=>{
        if(x!=""&&x!="undefined") cart.push(JSON.parse(x))
    });
    let usedBooks = [];
    let section = document.querySelector(".books");
    
    if(localStorage.cartCounter == undefined){
        localStorage.cartCounter = 0;
    }
    let finalPrice = 0;
    for(let book of cart){
        if(book==null) continue;
        
        let bookCount = cart.filter(x=>x.name==book.name).length;
        if(!(usedBooks.includes(book.name))){
            let div = document.createElement("div");
            div.classList.add("book-card");
            let img = document.createElement("img");
            img.src = book.img;
            img.classList.add("book-image");
            let divBookDetails = document.createElement("div");
            divBookDetails.classList.add("book-details");
            let title = document.createElement("h2");
            title.textContent = book.name;
            title.id = "title";
            let author = document.createElement("p");
            author.textContent = book.author;
            let price = document.createElement("p");
            price.textContent = book.price+"p";
            let count = document.createElement("p");
            count.textContent = "Количество: "+ bookCount;
            count.id = "count";
            let buttonDelete = document.createElement("button");
            buttonDelete.textContent = "-";
            let buttonAdd = document.createElement("button");
            buttonAdd.textContent = "+";
            buttonDelete.onclick = () => deleteBook(book);
            buttonAdd.onclick = ()=>addBook(book);
            divBookDetails.appendChild(title);
            divBookDetails.appendChild(author);
            divBookDetails.appendChild(price);
            divBookDetails.appendChild(count);
            div.appendChild(img);
            div.appendChild(divBookDetails);
            div.appendChild(buttonDelete);
            div.appendChild(buttonAdd);
            section.appendChild(div);
            finalPrice+=Number(book.price*bookCount);
            usedBooks.push(book.name);
        }
    }
    if(finalPrice==0){
        let p = document.createElement("p");
        p.textContent = "Здесь пусто..";
        p.style.fontSize = "x-large";
        section.appendChild(p);
    }
    else {
        let button = document.createElement("button");
        button.id = "button_clear_cart";
        button.textContent = "Очистить корзину"
        section.appendChild(button);
        document.querySelector("#button_clear_cart").onclick = ()=> {
            localStorage.cart = undefined;
            localStorage.cartCounter = 0;
            location.reload();
        }
    }
    document.querySelector(".total").querySelector("p").textContent = "Итого: "+finalPrice+"руб.";
    document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);

}
loadCartPage();



function burgerMenu(){
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

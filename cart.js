function getBookByName(name){
    for(let book of books){
        if(book.name==name) return book;
    }
    return null;
}

button_clear_cart.onclick = ()=> {
    localStorage.cart = undefined;
    location.reload();
}

function deleteBook(book){
    let section = document.querySelector(".books");
    let index = cart.findIndex(x=>x.name==book.name);
    cart.splice(index, 1);
    localStorage.cart = cart.map(x=>x.name).join(";");
    location.reload();
    // section.removeChild(book);
}

let cart = [];
function loadCartPage(){
    let section = document.querySelector(".books");
    let finalPrice = 0;
    for(let bookName of localStorage.cart.split(";")){
        let book = getBookByName(bookName);
        if(book==null) continue;
        cart.push(book);
        let bookCount = cart.filter(x=>x.name==book.name).length;
        if(bookCount>1){
            let bookCards = section.querySelectorAll(".book-card");
            for(let i = 0;i<bookCards.length;i++){
                if(bookCards.item(i).querySelector("#title").textContent==book.name){
                    bookCards.item(i).querySelector("#count").textContent = "Количество: "+bookCount;
                }
            }
            finalPrice+=Number(book.price);
            continue
        }

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
        count.textContent = "Количество: "+ 1;
        count.id = "count";
        let button = document.createElement("button");
        button.textContent = "Удалить";
        button.onclick = () => deleteBook(book);
        divBookDetails.appendChild(title);
        divBookDetails.appendChild(author);
        divBookDetails.appendChild(price);
        divBookDetails.appendChild(count);
        div.appendChild(img);
        div.appendChild(divBookDetails);
        div.appendChild(button);
        section.appendChild(div);
        finalPrice+=Number(book.price);
    }
    document.querySelector(".total").querySelector("p").textContent = "Итого: "+finalPrice+"руб.";
}
loadCartPage();


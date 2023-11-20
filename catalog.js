let names = ["Тень ветра", "Игра престолов", "Столкновение цивилизаций", "Тысяча сияющих солнц", "Гарри Поттер и философский камень", "1984", "Атлант расправил плечи", "Мастер и Маргарита", "Милый друг", "Алхимик", "451 градус по фаренгейту", "Гарри Поттер и узник Азкабана", "Три товарища", "Дневник Анны Франк", "Песнь Льда и Пламени: Игра престолов", "Маленький принц"];
let authors = ["Карлос Руис Сафон", "Джордж Р. Р. Мартин", "Сэмюэл Хантингтон", "Халед Хоссейни", "Дж. К. Роулинг", "Джордж Оруэлл", "Айн Рэнд", "Михаил Булгаков", "Стивен Кинг", "Пауло Коэльо", "Рэй бредбери", "Дж. К. Роулинг", "Эрих Мария Ремарк", "Анна Франк", "Джордж Р. Р. Мартин", "Антуан де Сент-Экзюпери"];
let prices = ["1500", "800", "1200", "950", "600", "1700", "2000", "1300", "500", "900", "1100", "750", "1400", "1800", "1600", "1000"];
var books = [];
function Book(name, author, price, img){
    this.name = name;
    this.author = author;
    this.price = price;
    this.img = img;
}

function createBooks(){
    for(let i = 0; i<names.length; i++){
        books.push(new Book(names[i], authors[i], prices[i], "book-images/book"+(i+1)+".jpg"));
    }
}
createBooks()

function placeBooks(){
    const sectionWithBooks = document.querySelector(".books");

    for(let book of books){
        let div = document.createElement("div");
        div.classList.add("book-card");
        let img = document.createElement("img");
        img.classList.add("book-image");
        img.src = book.img;
        let title = document.createElement("p");
        title.classList.add("title");
        let price = document.createElement("p");
        price.classList.add("price");
        let buttons = document.createElement("div");
        buttons.classList.add("card-buttons");
        let addToCartButton = document.createElement("button");
        let buyButton = document.createElement("button");
        addToCartButton.classList.add("card-button");
        addToCartButton.textContent = "В корзину";
        buyButton.classList.add("card-button");
        buyButton.textContent = "Купить";
        buttons.appendChild(addToCartButton);
        buttons.appendChild(buyButton);
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(buttons);

        title.textContent = book.name;
        price.textContent = book.price+"p";
        sectionWithBooks.appendChild(div);

        addToCartButton.onclick = ()=>{
            document.querySelector("#cartCounter").textContent =  Number(document.querySelector("#cartCounter").textContent)+1;

            localStorage.cart = localStorage.cart+";"+book.name;
        }
    }
}
placeBooks()

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




const boxes = document.querySelectorAll('.book-card');

function CheckBoxes() {
    const trig = (window.innerHeight/2.8);
    for (const box of boxes){
        const topOfBox = box.getBoundingClientRect().top;
        if(topOfBox < trig){
            box.classList.add('active');
        }
    }
};

CheckBoxes();
window.addEventListener('scroll', CheckBoxes);

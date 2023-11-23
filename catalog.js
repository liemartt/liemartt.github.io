var names = [
    "1. 1984",
    "2. Война и мир",
    "3. Преступление и наказание",
    "4. Гарри Поттер и философский камень",
    "5. Мастер и Маргарита",
    "6. Новый порядок",
    "7. Зеленая миля",
    "8. Властелин колец",
    "9. Три товарища",
    "10. Мечтают ли андроиды об электроовцах?",
    "11. Великий Гэтсби",
    "12. Маленький принц",
    "13. Гарри Поттер и узник Азкабана",
    "14. Атлант расправил плечи",
    "15. Крестный отец",
    "16. Сто лет одиночества",
    "17. Гарри Поттер и Кубок огня",
    "18. Метро 2033",
    "19. Анна Каренина",
    "20. Гарри Поттер и Дары Смерти",
    "21. Тень горы",
    "22. Дневник Анны Франк",
    "23. Маугли",
    "24. Война миров",
    "25. Герой нашего времени",
    "26. Игра престолов",
    "27. Тринадцатая сказка",
    "28. Пикник на обочине",
    "29. Поднять корабль",
    "30. Лолита"
];
  
var authors = [
    "Джордж Оруэлл",
    "Лев Толстой",
    "Фёдор Достоевский",
    "Джоан Роулинг",
    "Михаил Булгаков",
    "Неизвестный Автор",
    "Стивен Кинг",
    "Дж.Р.Р. Толкиен",
    "Эрих Мария Ремарк",
    "Филип К. Дик",
    "Фрэнсис Скотт Фицджеральд",
    "Антуан де Сент-Экзюпери",
    "Джоан Роулинг",
    "Айн Рэнд",
    "Марио Пьюзо",
    "Габриэль Гарсиа Маркес",
    "Джоан Роулинг",
    "Дмитрий Глуховский",
    "Лев Толстой",
    "Джоан Роулинг",
    "Грегори Дэвид Робертс",
    "Анна Франк",
    "Редьярд Киплинг",
    "Герберт Уэллс",
    "Михаил Лермонтов",
    "Джордж Мартин",
    "Диана Сеттерфилд",
    "Аркадий и Борис Стругацкие",
    "Владимир Набоков"
];
var prices = [
    1200,  
    800,   
    1500,  
    4500,  
    2700,  
    3000,  
    900,   
    4200,  
    1000,  
    3500,  
    500,   
    800,   
    1200,  
    1800,  
    2500,  
    4000,  
    1000,  
    300,   
    1500,  
    5500,  
    3000,  
    700,   
    400,   
    900,   
    1200,  
    2000,  
    1700,  
    450,   
    5600,
    3450  
];
  
var books = [];

function Book(name, author, price, img){
    this.name = name;
    this.author = author;
    this.price = price;
    this.img = img;
}

function createBooks(){
    for(let i = 0; i<names.length; i++){
        books.push(new Book(names[i].split(".").at(1), authors[i], prices[i], "book-images/book"+(i+1)+".jpg"));
    }
}
createBooks()

function arrayFilter(minValue, maxValue, books){
    booksCopy = Object.assign([], books)
    if(minValue!=undefined&&minValue!=null&&minValue!=""){
        booksCopy = booksCopy.filter(x=>x.price>=minValue);
    }
    if(maxValue!=undefined&&maxValue!=null&&maxValue!="") {
        booksCopy = booksCopy.filter(x=>x.price<=maxValue);
    }
    return booksCopy;
}


function placeBooks(fliteredBooks, sortAscending, sortDescending){
    if(localStorage.cartCounter == "undefined"){
        localStorage.cartCounter = 0;
    }
    const sectionWithBooks = document.querySelector(".books");
    sectionWithBooks.innerHTML = "";
    document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);
    if(sortAscending) fliteredBooks.sort((a,b)=>a.price-b.price);
    else if(sortDescending) fliteredBooks.sort((a,b)=>b.price-a.price);
    let counter = 0;
    for(let book of fliteredBooks){
        if (counter==0) sectionWithBooks.innerHTML = sectionWithBooks.innerHTML + "<div id = 'newBooks' class='books-type'><p>Новинки</p></div>"
        if (counter==10) sectionWithBooks.innerHTML = sectionWithBooks.innerHTML + "<div id = 'popularBooks' class='books-type'><p>Популярные</p></div>"
        if (counter==20) sectionWithBooks.innerHTML = sectionWithBooks.innerHTML + "<div id = 'classicBooks' class='books-type'><p>Классика</p></div>"
        counter++;
        let div = document.createElement("div");
        div.classList.add("book-card");
        let img = document.createElement("img");
        img.classList.add("book-image");
        img.src = book.img;
        let title = document.createElement("p");
        title.classList.add("title");
        let author = document.createElement("p");
        author.textContent = book.author;
        author.style.fontSize = "medium";
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
        div.appendChild(author);
        div.appendChild(price);
        div.appendChild(buttons);

        title.textContent = book.name;
        price.textContent = book.price+"p";
        sectionWithBooks.appendChild(div);

        addToCartButton.onclick = ()=>{
            if(localStorage.cart=="undefined") localStorage.cart = JSON.stringify(book)+";";
            else  localStorage.cart = localStorage.cart+JSON.stringify(book)+";";
            localStorage.cartCounter = Number(localStorage.cartCounter)+1;
            document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);
        }
    }
}
placeBooks(books, false,false);

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


function filter(){
    const button = document.querySelector(".filter");
    const filterButton = document.querySelector("#submit-filter");
    const minValue =  document.querySelector("#minPrice");
    const maxValue =  document.querySelector("#maxPrice");
    const sortAscending =  document.querySelector(".sort-ascending");
    const sortDescending =  document.querySelector(".sort-descending");
    const priceDiv = document.querySelector(".price-filter");
    const main = document.querySelector("#main");
    let isOpen = true;
    button.onclick = ()=>{
        isOpen = !isOpen
        if(!isOpen){
            priceDiv.style.transform = "translateX(10%)";
            main.style.filter = "blur(100px)";
        }
        else{
            priceDiv.style.transform = "translateX(-100%)";
            main.style.filter = "blur(0px)"
        }
    }
    filterButton.onclick = ()=>{
        if(sortAscending.checked)
            placeBooks(arrayFilter(minValue.value, maxValue.value, books), sortAscending, false);
        
        else if (sortDescending.checked) placeBooks(arrayFilter(minValue.value, maxValue.value, books), false, sortDescending)
        else placeBooks(arrayFilter(minValue.value, maxValue.value, books), false, false)
    }


    
}
filter()





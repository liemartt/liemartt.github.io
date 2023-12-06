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
    "10. Мечтают ли андроиды?",
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
const totalSlides = 10;
var currentIndex1 = 0;
var currentIndex2 = 0;
var currentIndex3 = 0;

function updateSlider(slider, currentIndex) {
    width = document.documentElement.offsetWidth<=800?220:450;
  slider.style.transform = `translateX(${-currentIndex * width}px)`;
}

function nextSlide(slider, n) {
    let numberOfVisibleBooks = document.documentElement.offsetWidth<=800?1:4;

    if(n==1){
        currentIndex1++;
        if (currentIndex1 > totalSlides - numberOfVisibleBooks) {
            currentIndex1 = 0;
        }
        updateSlider(slider, currentIndex1);

    }
    else if(n==2){
        currentIndex2++;
        if (currentIndex2 > totalSlides - numberOfVisibleBooks) {
            currentIndex2 = 0;
        }
        updateSlider(slider, currentIndex2);

    }
    else if(n==3){
        currentIndex3++;
        if (currentIndex3 > totalSlides - numberOfVisibleBooks) {
            currentIndex3 = 0;
        }
        updateSlider(slider, currentIndex3);

    }
  
}

function prevSlide(slider, n) {
    let numberOfVisibleBooks = document.documentElement.offsetWidth<=800?1:4;

    if(n==1){
        currentIndex1--;
        if (currentIndex1 <0) {
            currentIndex1 = totalSlides - numberOfVisibleBooks;
        }
        updateSlider(slider, currentIndex1);

    }
    else if(n==2){
        currentIndex2--;
        if (currentIndex2 <0) {
            currentIndex2 = totalSlides - numberOfVisibleBooks;
        }
        updateSlider(slider, currentIndex2);

    }
    else if(n==3){
        currentIndex3--;
        if (currentIndex3 <0) {
            currentIndex3 = totalSlides - numberOfVisibleBooks;
        }
        updateSlider(slider, currentIndex3);

    }
}

function placeBooks(fliteredBooks, sortAscending, sortDescending){
    if(localStorage.cartCounter == "undefined"){
        localStorage.cartCounter = 0;
    }
    const sectionWithBooks1 = document.querySelector(".slideshow-container-1");
    const sectionWithBooks2 = document.querySelector(".slideshow-container-2");
    const sectionWithBooks3 = document.querySelector(".slideshow-container-3");
    const slider1 = document.querySelector(".slider1");
    const slider2 = document.querySelector(".slider2");
    const slider3 = document.querySelector(".slider3");
    sectionWithBooks1.innerHTML = "";
    sectionWithBooks2.innerHTML = "";
    sectionWithBooks3.innerHTML = "";
    document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);
    if(sortAscending) fliteredBooks.sort((a,b)=>a.price-b.price);
    else if(sortDescending) fliteredBooks.sort((a,b)=>b.price-a.price);
    let counter = 0;

    for(let book of fliteredBooks){
        
        counter++;
        let div = document.createElement("div");
        div.classList.add("fade");
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
        addToCartButton.classList.add("card-button");
        let imgCart = document.createElement("img");
        imgCart.classList.add("imgCart");
        imgCart.src = "images/shopping_cart.png";
        addToCartButton.appendChild(imgCart)
        buttons.appendChild(addToCartButton);
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(price);
        div.appendChild(buttons);

        title.textContent = book.name;
        price.textContent = book.price+"p";
        if(counter<=10){
            div.classList.add("mySlides-1");
            slider1.appendChild(div);
            
        }
        else if(counter<=20){
            div.classList.add("mySlides-2");
            slider2.appendChild(div);
        }
        else{
            div.classList.add("mySlides-3");
            slider3.appendChild(div);
        }

        addToCartButton.onclick = ()=>{
            console.log("123")
            if(localStorage.cart=="undefined") localStorage.cart = JSON.stringify(book)+";";
            else  localStorage.cart = localStorage.cart+JSON.stringify(book)+";";
            localStorage.cartCounter = Number(localStorage.cartCounter)+1;
            document.querySelector("#cartCounter").textContent =  Number(localStorage.cartCounter);
        }
    }

    let prev = document.createElement("a");
    prev.classList.add("prev");
    prev.textContent = "←"
    prev.onclick = ()=>prevSlide(document.querySelector(".slider1"), 1);
    sectionWithBooks1.appendChild(prev);
    let prev2 = document.createElement("a");
    prev2.classList.add("prev");
    prev2.textContent = "←"
    prev2.onclick = ()=>prevSlide(document.querySelector(".slider2"), 2);
    sectionWithBooks2.appendChild(prev2);
    let prev3 = document.createElement("a");
    prev3.classList.add("prev");
    prev3.textContent = "←"
    prev3.onclick = ()=>prevSlide(document.querySelector(".slider3"), 3);
    sectionWithBooks3.appendChild(prev3);


    let next = document.createElement("a");
    next.classList.add("next");
    next.textContent = "→"
    next.onclick = ()=>nextSlide(document.querySelector(".slider1"), 1);
    sectionWithBooks1.appendChild(next);
    let next2 = document.createElement("a");
    next2.textContent = "→"
    next2.classList.add("next");
    next2.onclick = ()=>nextSlide(document.querySelector(".slider2"), 2);
    sectionWithBooks2.appendChild(next2);
    let next3 = document.createElement("a");
    next3.textContent = "→"
    next3.classList.add("next");
    next3.onclick = ()=>nextSlide(document.querySelector(".slider3"), 3);
    sectionWithBooks3.appendChild(next3);
    sectionWithBooks1.appendChild(slider1);
    sectionWithBooks2.appendChild(slider2);
    sectionWithBooks3.appendChild(slider3);
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




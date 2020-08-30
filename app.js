document.addEventListener('DOMContentLoaded', () => {

let book = [
    {
    name: 'page1',
    img: 'img/page1.png'
    },
    {
    name: 'page2',
    img: 'img/page2.png'
    },
    {
    name: 'page3',
    img: 'img/page3.png'
    }
] 

const main_page = document.querySelector('.main_page');// with this variable I have conttrol of
                                                    // div with class .main_page

let mainImg = document.getElementById('myImage') // similar to HTML tag <img>. this var-ble creates <img> tag in HTML Document
mainImg.setAttribute('src', book[0].img) // making attribute to <img> tag through JavaScript    
main_page.appendChild(mainImg);// appending <img> tag to the div with class main_page
let next = document.getElementById('next');
let start = document.getElementById('start');

let count = 0;

start.addEventListener('click', () => {
count = 0;
if(mainImg.getAttribute('src') != book[count]){
    mainImg.src = book[count].img
}})

next.addEventListener('click', () => {
    if((count+1) < book.length ){
        turnPage(count);
        count++;
    }})

const turnPage = (count) =>{
    if (mainImg.getAttribute("src") == book[count].img) {
        mainImg.src = book[count + 1].img
    }
}

const timeCounter = () => {

}

})
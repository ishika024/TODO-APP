let todoList = [];
let addList = document.querySelector(".addList");
let close = document.querySelector(".close");
let itemObject;
let list;
let count = 0;

function newCard() {
    let blur = document.querySelector(".blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".popup1");
    popup.classList.toggle('active');
    
}

function newItem() {
    let blur = document.querySelector(".blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".popup");
    popup.classList.toggle('active');
}

function addCard() {
    let inputItem = document.querySelector("#input1");
    let cardSection = document.querySelector(".createCard");
    if (inputItem.value===""){
        alert("Enter Title");
        return;
    }else{
     itemObject = {
        title: inputItem.value
    };
    todoList.push(itemObject);
    newCard();
    
    const cardContent = `<div class="card" id="${itemObject.id}">
    <div class="card1" onclick="enlargeCard(event)">
        <p class="card2" id="cardtle">${itemObject.title}</p>
        <hr class = "hr">
    </div>
    <div class="container ">
        <ul class="list">
        </ul>
    </div>
    <div class="btn">
    <div class="add1 icon1" onclick="newItem(); cardSelection(event)"><i class="fas fa-plus-circle"></i></div>
    <div class="delete icon1" onclick="removeCard(event)"><i class="fa fa-trash"
            aria-hidden="true"></i></div>
</div>
</div>`
    cardSection.innerHTML += cardContent; 
}
}

function enlargeCard(event){
    let cards = document.querySelectorAll(".card");
    let backbtn = document.querySelector(".Btn");
    let cardhead = document.querySelector(".Head-Card");
    let headtitle = document.querySelector(".head");
    let addlist = document.querySelector(".addList");
    headtitle.classList.add("inactive");
    backbtn.classList.add("active");
    cardhead.classList.add("active");
    addlist.classList.add("inactive");
    cards.forEach(card=>{
        if(!(event.path[1].getAttribute("id")===card.getAttribute("id") ||event.path[2].getAttribute("id")===card.getAttribute("id"))){
            card.style.display="none";    
        }else{
            let cardtitle=card.childNodes[1].textContent;
            cardhead.innerHTML=`<p class="card1">${cardtle}</p>`;
        }
    })
}

function back(){
    let cards = document.querySelectorAll(".card");
    let backbtn = document.querySelector(".Btn");
    let cardhead = document.querySelector(".Head-Card");
    let headtitle = document.querySelector(".head");
    let addlist = document.querySelector(".addList");
    headtitle.classList.remove("inactive");
    backbtn.classList.remove("active");
    cardhead.classList.remove("active");
    addlist.classList.remove("inactive");
    cards.forEach(card=>{
            card.style.display="initial";
    })
    cardhead.classList.remove("active");
    cardhead.innerHTML="";
}

function cardSelection(event) {
    let cardId = event.path[3].getAttribute("id");
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (card.getAttribute("id") === cardId) {
            list = card.getElementsByClassName("list")[0];
        }
    })
}

function addItem(listItem) {
    let inputListItem = document.querySelector("#input");
    let listItemObject;
    if (inputListItem.value===""){
        alert("Enter list");
        return;
    }else{
    listItemObject = {
        id: count++,
        list: inputListItem.value
    }
    newItem();
    const List = `<li class="list1" id="${listItemObject.id}">
                            <p class="list2">${listItemObject.list}</p>
                            <div class="markDone">
                                <p onclick="markDone(event)">Mark Done</p>
                            </div>
                        </li>`;
    listItem.innerHTML += List ;
    }
}

function markDone(event){
    let listItem = event.path[2].getAttribute("id");
    let listItems = document.querySelectorAll(".list1");
    listItems.forEach(list=>{
        if(list.getAttribute('id')===listItem){
            list.childNodes[3].style.display="none";
            list.style.color="red";
            list.style.textDecoration="line-through";
            list.style.textAlign="center";
            list.style.fontSize="40px";
        }
    })
}

function removeCard(event) {
    let removeId = event.path[3].getAttribute("id");
    document.getElementById(removeId).remove();
}
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const span = document.getElementById("span");

let currUser = JSON.parse(localStorage.getItem("currUser"));

if(currUser == null){
    alert("You're not logged in");
    window.location.href = "user log in.html";
}

span.innerText = `${currUser.fname}`;

two.style.display = "none";
three.style.display = "none";
four.style.display = "none";
five.style.display = "none";
six.style.display = "none";

function dispFood(){
    div1.innerHTML = `
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    fetch("http://localhost:1234/food").then(res=>res.json())
    .then((data)=>{
        div1.style.display = "none";
        if (one.style.display = "none") {
            one.style.display = "block";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
        }
        for (let index = 0; index < data.length; index++) {
            const el = data[index];
            div2.innerHTML += `
            <div class='divv'>
                <div class='div'>
                    <img src="${el.foodImg}">
                </div>
                <h3>${el.name}</h3>
                <span>Price: ₦${el.price}</span><br>
                <span>Available stock: ${el.stock}</span>
                <div class="asd">
                    <button class="add" onclick="orderItem(${el.id})">Order</button>
                    <button onclick="showOne(${el.id})" class="add">Show More</button>
                </div>
                </div>
            `;
        }
    }).catch((err)=>{
    })
}

dispFood();

function disSnacks(){
    div1.innerHTML = `
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    fetch("http://localhost:1234/food").then(res=>res.json())
    .then((data)=>{
        let found =  data.filter((el)=> el.category == "snack");
        if (two.style.display = "none") {
            one.style.display = "none";
            two.style.display = "block";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
        }
        div1.style.display = "none";
        for (let index = 0; index < found.length; index++) {
            const el = found[index];
            div3.innerHTML += `
            <div class='divv'>
                <div class='div'>
                    <img src="${el.foodImg}">
                </div>
                <h3>${el.name}</h3>
                <span>Price: ₦${el.price}</span><br>
                <span>Available stock: ${el.stock}</span>
                <div class="asd">
                    <button class="add" onclick="orderItem(${el.id})">Order</button>
                    <button onclick="showOne(${el.id})" class="add">Show More</button>
                </div>
                </div>
            `;
        }
    }).catch((err)=>{
    })
}

function disSwallow(){
    div1.innerHTML = `
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    fetch("http://localhost:1234/food").then(res=>res.json())
    .then((data)=>{
        let found =  data.filter((el)=> el.category == "swallow")
        div1.style.display = "none";
        if (three.style.display = "none") {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "block";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
        }
        for (let index = 0; index < found.length; index++) {
            const el = found[index];
            div4.innerHTML += `
            <div class='divv'>
                <div class='div'>
                    <img src="${el.foodImg}">
                </div>
                <h3>${el.name}</h3>
                <span>Price: ₦${el.price}</span><br>
                <span>Available stock: ${el.stock}</span>
                <div class="asd">
                    <button class="add" onclick="orderItem(${el.id})">Order</button>
                    <button onclick="showOne(${el.id})" class="add">Show More</button>
                </div>
                </div>
            `;
        }
    }).catch((err)=>{
    })
}

function disDrinks(){
    div1.innerHTML = `
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    fetch("http://localhost:1234/food").then(res=>res.json())
    .then((data)=>{
        let found =  data.filter((el)=> el.category == "drink")
        div1.style.display = "none";
        if (four.style.display = "none") {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "block";
            five.style.display = "none";
            six.style.display = "none";
        }
        for (let index = 0; index < found.length; index++) {
            const el = found[index];
            div5.innerHTML += `
            <div class='divv'>
                <div class='div'>
                    <img src="${el.foodImg}">
                </div>
                <h3>${el.name}</h3>
                <span>Price: ₦${el.price}</span><br>
                <span>Available stock: ${el.stock}</span>
                <div class="asd">
                    <button class="add" onclick="orderItem(${el.id})">Order</button>
                    <button onclick="showOne(${el.id})" class="add">Show More</button>
                </div>
                </div>
            `;
        }
    }).catch((err)=>{
    })
}

function disFood(){
    div1.innerHTML = `
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    fetch("http://localhost:1234/food").then(res=>res.json())
    .then((data)=>{
        let found =  data.filter((el)=> el.category == "food")
        div1.style.display = "none";
        if (five.style.display = "none") {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "block";
            six.style.display = "none";
        }
        for (let index = 0; index < found.length; index++) {
            const el = found[index];
            div6.innerHTML += `
            <div class='divv'>
                <div class='div'>
                    <img src="${el.foodImg}">
                </div>
                <h3>${el.name}</h3>
                <span>Price: ₦${el.price}</span><br>
                <span>Available stock: ${el.stock}</span>
                <div class="asd">
                    <button class="add" onclick="orderItem(${el.id})">Order</button>
                    <button onclick="showOne(${el.id})" class="add">Show More</button>
                </div>
            </div>
            `;
        }
    }).catch((err)=>{
    })
}

function disSoups(){
    div1.innerHTML = `
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    fetch("http://localhost:1234/food").then(res=>res.json())
    .then((data)=>{
        let found =  data.filter((el)=> el.category == "soup")
        div1.style.display = "none";
        if (six.style.display = "none") {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "block";
        }
        for (let index = 0; index < found.length; index++) {
            const el = found[index];
            div7.innerHTML += `
            <div class='divv'>
                <div class='div'>
                    <img src="${el.foodImg}">
                </div>
                <h3>${el.name}</h3>
                <span>Price: ₦${el.price}</span><br>
                <span>Available stock: ${el.stock}</span>
                <div class="asd">
                    <button class="add" onclick="orderItem(${el.id})">Order</button>
                    <button onclick="showOne(${el.id})" class="add">Show More</button>
                </div>
            </div>
       <div>     `;
        }
    }).catch((err)=>{
    })
}

function showOne(id) {
    localStorage.setItem("Item", id);
    window.location.href = "the item.html"
}

function orderItem(id){
    fetch(`http://localhost:1234/food/${id}`).then(res=>res.json())
    .then((data)=>{
        let cartObj = {
            name: data.name,
            price: Number(data.price)
        }
        fetch(`http://localhost:1234/cart`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartObj)
        }).then(res=>res.json())
        .then((data)=>{
            alert("Order Placed");
        }).catch((err)=>{
        })
    }).catch((err)=>{
    })
}

function checkOut(){
    window.location.href = "check out.html";
}

function logOut(){
    localStorage.removeItem("curruser");
    window.location.href = "user log in.html";
}
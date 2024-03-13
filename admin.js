const names = document.getElementById("name");
const price = document.getElementById("price");
const category = document.getElementById("category");
const stock = document.getElementById("stock");
const description = document.getElementById("description");
const foodImg = document.getElementById("foodImg");
const div1 = document.getElementById("div1");
const admin = localStorage.getItem("Admin");
let userId;
let imgURL;
let editedURL;

if(admin == null){
    alert("You have not logged in");
    window.location.href = "admin login.html";
}

function pickFile(ev){
    console.log(ev.target.files);
    let file = ev.target.files[0]; 
    let reader = new FileReader();
    reader.addEventListener("load", (e)=>{
        let result = e.target.result;
        imgURL = result;
        foodImg.src = result;
    })
    if(file){
        reader.readAsDataURL(file);
    }
}

function post(){
    let posts = {
        name: names.value,
        price: Number(price.value),
        category: category.value,
        stock: Number(stock.value),
        description: description.value,
        foodImg: imgURL
    }

    fetch("http://localhost:1234/food", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(posts)
    }).then(res=>res.json())
    .then((data)=>{
        alert("Food added");
        window.location.href = "admin page.html";
    }).catch((err)=>{
        alert("Something went wrong. Please try again.")
    })
}

function disFood(){
    fetch("http://localhost:1234/food").then(res=>res.json())
    .then((data)=>{
        for (let index = 0; index < data.length; index++) {
            const el = data[index];
            div1.innerHTML += `
            <div class="div">
                <img src="${el.foodImg}">
                <p>${el.name}</p>
                <span>Price: NGN${el.price}</span>
                <span>Available stock: ${el.stock}</span>
                <span>Category: ${el.category}</span><br>
                <span>Description: ${el.description}</span>
                <div class="div2">
                <button onclick="editDetails(${el.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Edit
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <input id="nameEdit" type="text" placeholder="New name">
                      <input id="priceEdit" type="number" placeholder="New price">
                      <select name="" id="categoryEdit">
                          <option value="snack">Snack</option>
                          <option value="drink">Drink</option>
                          <option value="soup">Soup</option>
                          <option value="swallow">Swallow</option>
                          <option value="food">Food</option>
                      </select>
                      <input id="stockEdit" type="number" placeholder="New number of stock available">
                      <textarea id="descriptionEdit" name="" id="" cols="30" rows="10" placeholder="New description"></textarea>
                      <input id="input1" type="file" onChange='editImage(event)'>
                      <img id="foodImgEdit" src="" width="200" height="200">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onclick="saveChanges()" id="save" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                    <button class="btn btn-primary" onclick="deleteItem(${el.id})">Delete</button>
                </div>
            </div>
            `;
        }
    }).catch((err)=>{
    })
}

disFood();

function editImage(ev){
    let file = ev.target.files[0]; 
    let reader = new FileReader();
    reader.addEventListener("load", (e)=>{
        let editResult = e.target.result;
        editedURL = editResult;
        const foodImgEdit = document.getElementById("foodImgEdit");
        foodImgEdit.setAttribute("src", editedURL);
    })
    if(file){
        reader.readAsDataURL(file);
    }
}

function editDetails(id){
    userId = id;
}

function saveChanges(){
const nameEdit = document.getElementById("nameEdit");
const priceEdit = document.getElementById("priceEdit");
const categoryEdit = document.getElementById("categoryEdit");
const stockEdit = document.getElementById("stockEdit");
const descriptionEdit = document.getElementById("descriptionEdit");
let edited = {
        name: nameEdit.value,
        price: Number(priceEdit.value),
        category: categoryEdit.value,
        stock: Number(stockEdit.value),
        description: descriptionEdit.value,
        foodImg: editedURL
    }

    fetch(`http://localhost:1234/food/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(edited)
    }).then(res=>res.json())
    .then((data)=>{
        alert("Edit sucessful");
        window.location.href = "admin page.html"
    }).catch((err)=>{})
}

function deleteItem(id){
    fetch(`http://localhost:1234/food/${id}`,{
        method: "DELETE"
    }).then(res=>res.json())
    .then((data)=>{
        window.location.href = "admin page.html"
    }).catch((err)=>{

    })
}
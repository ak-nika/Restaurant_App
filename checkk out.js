const div1 = document.getElementById("div1");
let totalAmt = document.getElementById("total");
let currUser = JSON.parse(localStorage.getItem("currUser"));
console.log(currUser);
let total;

function checkOut(){
    fetch("http://localhost:1234/cart").then(res=>res.json())
    .then((data)=>{
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const el = data[index];
            div1.innerHTML += `
            <p>${index+1}. ${el.name} ₦${el.price} <button onclick="deleteItem(${el.id})">Delete</button></p>
            `;
        }

        total = data.reduce((total, item, index)=>{
            return item.price + total;
        }, 0)

        console.log(total);

        totalAmt.innerText = `Total: ₦${total}`
    }).catch((err)=>{
        console.log(err);
    })
}

checkOut()

function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: total,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: currUser.email,
        phone_number: currUser.number,
        name: currUser.fname + currUser.lname,
      },
      customizations: {
        title: "Restaurant",
        description: "Payment for food",
        logo: "logo.jpg",
      },
    });
  }

  function deleteItem(id){
    console.log(id);
    let que = prompt("Are you sure you want to remove this item from your order list?(Y/N)");
    if (que == "Y") {
      fetch(`http://localhost:1234/cart/${id}`,{
        method: "DELETE"
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data);
        window.location.href = "check out.html";
    }).catch((err)=>{
        console.log(err);
    }) 
    } else {
      return
    }
}
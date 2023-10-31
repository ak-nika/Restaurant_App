function logIn() {
    const enteredEmail = document.getElementById("emails").value;
    const enteredPassword = document.getElementById("passwords").value;
 
    fetch("http://localhost:1234/users").then(res=>res.json())
    .then((data)=>{
        console.log(data);
        if (data) {
            const matchedUser = data.find((user) => {
              return user.email === enteredEmail && user.password === enteredPassword;
            });
        
            if (matchedUser) {
              alert("Login successful!");
              localStorage.setItem("currUser",JSON.stringify(matchedUser))
              window.location.href = "home page.html";
            } else {
              alert("Invalid email or password. Please try again.");
            }
          } else {
            alert("No user data found. Please register.");
          }
    }).catch((err)=>{
        console.log(err);
    })  
}
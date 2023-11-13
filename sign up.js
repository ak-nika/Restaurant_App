    let one = document.getElementById("fname");
    let two = document.getElementById("lname");
    let three = document.getElementById("number");
    let four = document.getElementById("email");
    let five = document.getElementById("password");
    let six = document.getElementById("password2");
    let div3 = document.getElementById("div3");

    one.focus();

    function changeType1() {
        const input1 = document.getElementById("password");

        if(input1.type === "password"){
            input1.type = "text";
        } else{
            input1.type = "password";
        }
    }

    function changeType2() {
        const input1 = document.getElementById("password2");

        if(input1.type === "password"){
            input1.type = "text";
        } else{
            input1.type = "password";
        }
    }

    function signUp() {
        let fname =  one.value;
        let lname = two.value;
        let number = Number(three.value);
        let email = four.value;
        let password = five.value;
        let conPassword = six.value;

        if(fname === "" || lname === "" || number=== "" || email === "" || password === "" || conPassword === "") {
            alert("You have not filled all the required inputs");
        } else if (password.length < 8) {
            alert("Password must not be less than 8 characters")
        } else if (password !== conPassword){
            alert("Check your password and try again")
        } else{
            let userObj = {
            fname,
            lname,
            number,
            email,
            password
        }
        
        fetch("http://localhost:1234/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(userObj)
        }).then(res=>res.json())
        .then((data)=>{
            alert("Sign up succesful");
            window.location.href = "user log in.html";
        }).catch((err)=>{
        })
    }
    }
alert("welocome to NRIIT learning management system")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers";
console.log("heading element: ", heading);
let msg = document.getElementById("message")
msg.innerHTML = "JAVASCRIPT IS FUN"
console.log("message element: ",msg)
  function showmessage( ){
    alert("welcome to NRIIT learning management system")}
    function changeHeading() {
        document.getElementById("welcome").innerHTML = "welcome python fullstack Devlopment"}
        let heading1=document.querySelector("#welcome");
        console.log("heading element: ", heading)
        let button = document.getElementById("btnGreeting");
        button.addEventListener("click",function () {
            alert("Welcome to javascript Event Handling");
        });
        let registerform = document.getElementById("registerform");
        registerform.addEventListener("submit",function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            if (!name || !email || !password){
                alert("please fill in all fields");
                return;
            }
            alert("Registration sucessful!");
            console.log("name:",name);
            console.log("email:,email");
            console.log("password:",password);
        });
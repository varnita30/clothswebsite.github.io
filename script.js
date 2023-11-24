let cloths = document.getElementById("cloths");
let blogs = document.getElementById("blogs");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let login = document.getElementById("login");
let logged = document.getElementById("logged");
let submit = document.getElementById("submit");

cloths.addEventListener("click",function(){
    cloths.style.color="red";
    blogs.style.color="black";
    reviews.style.color="black";
    contacts.style.color="black";
})
blogs.addEventListener("click",function(){
    cloths.style.color="black";
    blogs.style.color="red";
    reviews.style.color="black";
    contacts.style.color="black";
})
reviews.addEventListener("click",function(){
    cloths.style.color="black";
    blogs.style.color="black";
    reviews.style.color="red";
    contacts.style.color="black";
})
contacts.addEventListener("click",function(){
    cloths.style.color="black";
    blogs.style.color="black";
    reviews.style.color="black";
    contacts.style.color="red";
})

login.addEventListener("click",function(){
    let loginPage = document.querySelector(".loginPage").style.display="block";
})

logged.addEventListener("click", function() {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if (email.value === "" || pass.value === "") {
        alert("Please enter email and password");
    } else {
        alert("Logged IN");
        document.querySelector(".loginPage").style.display="none";
    }
});

submit.addEventListener("click",function(){
    let name = document.getElementById("name");
    let passw = document.getElementById("passw");
    let mess = document.getElementById("mess");
    if (name.value === "" || passw.value === "" || mess.value==="") {
        alert("Please enter name and password and message");
    } else {
        alert("Thanks for connecting");
        name.value = "";
        passw.value = "";
        mess.value = "";
    }
})

function login() {
    user_name = document.getElementById("user_input").value;

    localStorage.setItem("user_name",user_name); 

    window.location = "chat.html"
}
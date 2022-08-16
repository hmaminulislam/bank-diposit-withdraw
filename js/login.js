document.getElementById("btn-login").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(email === 'bangladesh@gmail.com' && password === 'Banglabank') {
        window.location.href = 'bank.html'
    } else {
        alert("invalid user")
    }
})
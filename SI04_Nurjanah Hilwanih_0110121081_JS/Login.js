function login() {
    let username = document.getElementById("user").Value;
    let password = document.getElementById("pass").Value;

    console.log (username);
    console.log (password);

    if (username == "Nurjanah Hilwanih" && password == "Weareone") {
        window.alert("Login berhasil");
        location.replace("halamanberhasil.html");
        document.getElementById("username").value="";
    }
    else {
        window.alert("Login gagal");
        document.getElementById("username").value="";
    }
}
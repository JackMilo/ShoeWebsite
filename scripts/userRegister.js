function Register()
{
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    console.log(name, phone, email, password1);

    if (name === "" || phone === "" || email === "" || password1 === "")
    {
        if (name === "")
        {
            document.getElementById("nameError").innerHTML = "You must enter a valid name!";
        }
        if (phone === "")
        {
            document.getElementById("phoneError").innerHTML = "You must enter a valid phone number!";
        }
        if (email === "")
        {
            document.getElementById("emailError").innerHTML = "You must enter a valid email!";
        }
        if (password1 === "")
        {
            document.getElementById("passError").innerHTML = "You must enter a valid password!";
        }
    }
    else if (password1 != password2)
    {
            document.getElementById("matchError").innerHTML = "Passwords do not match!";
    }
    else
    {
        const user = {
            name:name,
            email:email,
            password:password1,
            phone:phone
        }

        localStorage.setItem("userInfo", JSON.stringify(user));
        window.location.href="account.html";
    }
}
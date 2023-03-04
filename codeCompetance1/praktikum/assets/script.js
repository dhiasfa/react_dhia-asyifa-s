// function untuk menghandle form

function handleForm(){
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("textarea").value;

    if(firstName ===""){
        alert("The First Name field must be filled in");
        return false;
    }
    if(lastName ===""){
        alert("The Last Name field must be filled in");
        return false;
    }
    if(email ===""){
        alert("The Email Name field must be filled in");
        return false;
    }
    if(message ===""){
        alert("The Message Name field must be filled in");
        return false;
    }
    alert(`Data yang Dimasukan : \n First name : ` + firstName +
    ` \n Last name :` +lastName +
    ` \n Email: ` +email +
    ` \n Message: ` + message );
}
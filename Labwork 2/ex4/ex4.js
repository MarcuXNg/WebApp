//compare 2 password
function comparePasswords() {
    var password = document.getElementById('Password').value;
    var retype = document.getElementById('RetypePassword').value;
    var username = document.getElementById('username').value;
    if (username.trim() ==='' || retype.trim()==='' || password.trim()==='') {
        alert("Please input");
    }
    else if (password == retype){
        alert("Password match");
    } else {
        alert("Passwords do not match. Please try again.");
    }
}

// clear all value
function resetFields() {
    document.getElementById('username').value = '';
    document.getElementById('Password').value = '';
    document.getElementById('RetypePassword').value = '';
}
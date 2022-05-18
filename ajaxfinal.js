const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault() 
    let name =
        form.elements['name'].value
    let email = form.elements['email'].value
    let contact = form.elements['contact'].value
    let password = form.elements['password'].value
    if (name.length < 4) {
        alert("Username should be more than 5 characters")
    }
    else if (contact.length != 10) {
        alert("contact no is invalid") }
         else if (password.length < 6) { 
alert("Password should be more than 6 characters") 
 } else {
        load(name, email, contact,
            password)
    }
})
function load(name, email, contact, password) {
    const xh = new XMLHttpRequest(); xhr.onreadystatechange = function () {
            console.log("your state=", xhr.readyState)
             if (this.readyState == 4
                && this.status == 200) {
                document.getElementById('list').innerHTML = this.responseText
                document.getElementById('list').innerHTML += ` 
 <hr/> 
 <p>name: ${name}</p> 
 <p>email: ${email}</p> 
 <p>contact: ${contact}</p> 
 <p>password: ${password}</p>`
            }
        }
    xhr.open('GET', 'data.txt', true)
    xhr.send() //for GET .send() is empty 
}

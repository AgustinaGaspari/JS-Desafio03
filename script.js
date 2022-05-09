//DESAFÍO EVENTOS

let formulario = document.getElementById('form')
let arrayForm = []

formulario.addEventListener('submit', (event)=>{
    event.preventDefault()
    let name = document.getElementById('disabledTextInput').value
    let date =  document.getElementById('disabledSelect').value
    let email =  document.getElementById('disabledTextInputE').value
    let message=  document.getElementById('disabledTextInputM').value

    let datos ={name:name, date:date, email:email, message:message}
    arrayForm.push(datos)
    console.log(arrayForm)
    formulario.reset()
})

let div = document.createElement("div");

div.innerHTML = "<p>* Horario de servicio de atención al cliente: Lunes a Sábados de 10 a 20 hs.<p>";

document.body.append(div);
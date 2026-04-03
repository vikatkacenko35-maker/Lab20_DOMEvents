console.log(document);
const title = document.getElementById("title");
const text = document.querySelector(".text");
const input = document.getElementById("nameInput");
const button = document.getElementById("showName");
const output = document.getElementById("output");
const clearButton = document.getElementById("clearButton")
const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const result = document.getElementById("formresult");const btn = document.getElementById("btn");
console.log(title);
console.log(text);
title.textContent = "Dom change";
title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";

text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";

btn.addEventListener("click", () => {
    alert("Кнопка нажата!");
    btn.style.backgroundColor = "4CAF50";
    btn.style.color = "white";
});

button.addEventListener("click", () => {
    if (input.ariaValueMax.trim() = ""){
        output.textContent = `привет, ${input.value}!`;
        output.style.color = "green";
    }else{
        output.textContent ="Пожалуйста, введите имя";
        output.style.color = "red";
    }
});
clearButton.addEventListener("click", () =>{
    input.value = "";
    output.textContent = "";
    output.style.color = "";
    input.focus();
});
form.addEventListener("submit", (even) =>{
    event.preventDefault();
    const name = usernameInput.value.trim();
    if (name === ""){
        result.textContent - "Ошибка: Имя не может быть пустым!";
        result.style.color = "red";
        usernameInput.focus();
        return;
    }
    const age = Number(ageInput.value);
    if (isNaN(age) || age <= 0 || age > 120){
        result.textContent = "Ошибка: введите корректынй возвраст (от 1 до 120)!";
        result.style.color = "red";
        ageInput.focus();
        ageInput.value = "";
        return;
    }   
    result.textContent =  `Данные сохранены!`;
    result.style.color = "green";
    result.textContent = `Имя: ${name}, Возвраст: ${age}`;
    form.reset();
})

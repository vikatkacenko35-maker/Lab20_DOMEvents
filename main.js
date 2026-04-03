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
const addUserBtn = document.getElementById("addUserBtn");
const userList = document.getElementById("userList");
let usercount = 1;
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
    btn.style.backgroundColor = "#4CAF50";
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
form.addEventListener("submit", (event) =>{
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
});
addUserBtn.addEventListener("click", () =>{
    const Listitem = document.createElement("li");
    const userText = document.createTextNode(`Пользователь #${usercount}`);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";
    deleteBtn.style.marfinLeft = "10px";
    deleteBtn.style.fontSize = "12px";
    Listitem.appendChild(userText);
    Listitem.appendChild(deleteBtn);
    Listitem.id = `user-${usercount}`;
    userList.appendChild(Listitem);
    usercount++;
    updateUserStats();
});
userList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")){
        const Listitem = event.target.parentElement;
        Listitem.remove();
        updateUserStats();
    }
});
function updateUserStats(){
    const userCount = userList.children.length;
    const statsElement = document.querySelector(".user-stats") || createStatsElement();
    statsElement.textContent = `всего пользователей: ${userCount}`;
}
function createStatsElement(){
    const stats = document.createElement("div");
    stats.className = "user-stats";
    stats.style.marginTop = "10px";
    stats.style.marginTop = "10px";
    stats.style.color = "#333";
    userList.parentElement.appendChild(stats);
    return stats;

}

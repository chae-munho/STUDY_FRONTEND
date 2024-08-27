const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTast() {
    if (inputBox.value === '') {
        alert("You must be write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() { //localStorage는 사용자가 브라우저를 종료하거나 페이지를 새로고침해도 데이터가 유지되므로, 저장된 목록 데이터를 영구적으로 보관할 수 있습니다.
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

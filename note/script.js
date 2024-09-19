const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box");
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes"); //notes에 저장된 배열요소들을 가져와서 innterHTML을 통해 요소들을 추가한다.
}
showNotes();

function updateStorage() { 
    localStorage.setItem("notes", notesContainer.innerHTML); //입력된 단어들을 notes라는 변수에 배열에 한 단어씩 추가한다.
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
//noteContainer 영역에 클릭했을 경우 수행되는 메소드
notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") { //만약 클릭한 태그가 이미지라면
        e.target.parentElement.remove(); //이미지의 상위클래스인 noteContainer 영역을 삭제 즉 작성하는 부분이 사라진다.
    } else if(e.target.tagName === "P") { 
        notes = document.querySelectorAll(".input-box"); //작성한 글들을 모두 선택후 배열로 생성
        notes.forEach(nt => { //작성한 글들을 nt라는 변수  단위로 분리한 후 
            nt.onkeyup = function() { //사용자가 키를 떼는 순간 updateStorage() 메소드가 작동됩니다.
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event => { //키를 눌렀을때 발생하는 키 다운 이벤드이다.
    if (event.key === "Enter") { //만약 엔터를 눌렀다면
        document.execCommand("insertLineBreak"); //현재 커서 위치에 줄 바꿈을 삽입하는 명령어
        event.preventDefault(); //기본적인 Enter 키 동작을 방지합니다. 기본적으로 Enter 키를 누르면 새 줄이 추가되거나 폼이 제출되는데, 이 동작을 막아 주어진 커스텀 동작(insertLineBreak)만 수행하도록 합니다.
    }
})